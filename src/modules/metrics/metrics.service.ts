import { Injectable } from '@nestjs/common';

@Injectable()
export class MetricsService {
  getMetrics() {
    // return minimal data; replace with prom-client instrumentation
    return { uptime: process.uptime() };
  }
}