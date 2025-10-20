import { Module } from '@nestjs/common';
import { CacheModule as NestCacheModule } from '@nestjs/common/cache';

@Module({
  imports: [
    NestCacheModule.register({
      ttl: 60, // seconds
      max: 100, // maximum number of items in cache
    }),
  ],
  exports: [NestCacheModule],
})
export class CacheModule {}