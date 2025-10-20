import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getStatus() {
    return { status: 'ok', timestamp: Date.now() };
  }
}