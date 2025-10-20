# Bookings Microservice

Minimal bookings microservice implementing:
- Create booking, get by id, list upcoming/past bookings (paginated)
- JWT auth (roles: provider, admin)
- Redis + WebSockets broadcast for booking.created
- Background job to send reminder 10 minutes before booking start
- PostgreSQL schema + migration
- Health check + basic metrics
- Unit tests (1–2) and 1 e2e happy path
- Dockerfile + docker-compose

## Assumptions & decisions
- Single service handles bookings, notifications (via WebSocket) and scheduling (simple background job using Bull/Redis).
- Users are minimal (only id + role). Auth is JWT-only (no refresh tokens) for simplicity.
- Bookings have: id, userId, providerId, startAt (UTC), endAt, status.
- Reminder job enqueues when booking is created; a worker sends a placeholder notification (logs + WebSocket event).
- Migrations use TypeORM/DataSource or equivalent. A blank migrations folder exists; initial migration should create bookings & users tables.
- Minimal metrics: basic /health and a Prometheus-friendly /metrics endpoint (if ENABLE_METRICS=true).

## Setup instructions

Requirements (Mac):
- Node 18+
- npm or yarn
- Docker & docker-compose (for running Postgres + Redis easily)

1. Copy env
   - cp .env.example .env

2. Start dependent services with Docker
   - docker compose up -d
   - This starts Postgres and Redis as configured in docker-compose.yml.

3. Install dependencies
   - npm install

4. Run migrations (local dev)
   - npm run typeorm:migrate
   - (If scripts differ, run your project's migration command; ensure .env points to the DB container.)


## How to run locally & test

Run in development:
- npm run start:dev
  - Hot reload, listens on PORT (defaults to 3000).

Build & run production mode:
- npm run build
- npm run start:prod

Docker
- docker-compose up --build
  - This builds the service image and starts Postgres+Redis+app (if docker compose is configured to run the service).

API basics
- Health: GET http://localhost:3000/health
- Metrics: GET http://localhost:3000/metrics
- Auth:
  - Obtain a JWT using a test user (see fixtures or auth endpoint if implemented).
  - Add Authorization: Bearer <token> to protected routes.

Key endpoints (examples)
- POST /bookings
  - Body: { "userId": "...", "providerId": "...", "startAt": "2025-10-20T15:00:00Z", "endAt": "2025-10-20T15:30:00Z" }
- GET /bookings/:id
- GET /bookings?when=upcoming&page=1&limit=10
  - when = upcoming | past

Testing
- Unit tests:
  - npm run test
- E2E tests:
  - npm run test:e2e
  - The e2e happy-path test expects DB+Redis running (use docker-compose up -d before running).

Troubleshooting
- If DB connection fails, verify POSTGRES_* vars and that docker-compose started postgres.
- Check logs: docker-compose logs -f

## 4. What you’d improve with +4 hours
- Add full user management (registration, password hash, refresh tokens) and proper seed data.
- Harden authentication/authorization (role-based guards, policies) and add integration tests for RBAC boundaries.
- Implement retry/backoff and dead-letter handling for background jobs.
- Add comprehensive OpenAPI (Swagger) docs for all endpoints and example requests/responses.
- Improve metrics: instrument service with counters/histograms (request latency, job durations) and add dashboards.
- Add end-to-end CI pipeline (GitHub Actions) to run lint/test/migrations and container image build.
- Add production-ready configuration (secrets management, health probes, graceful shutdown, rate limiting).
