import { Injectable } from '@nestjs/common';

// Minimal Redis service stub for compilation. Replace with real client (ioredis/redis) later.
@Injectable()
export class RedisService {
  getClient(): null {
    // return actual client in real implementation
    return null;
  }
}