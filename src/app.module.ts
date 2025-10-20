import { Module } from '@nestjs/common';
import { BookingsModule } from './modules/bookings/bookings.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { HealthModule } from './modules/health/health.module';
import { MetricsModule } from './modules/metrics/metrics.module';
import { RedisModule } from './shared/redis/redis.module';
import { CacheModule } from './shared/cache/cache.module';

@Module({
  imports: [
    BookingsModule,
    AuthModule,
    UsersModule,
    NotificationsModule,
    JobsModule,
    HealthModule,
    MetricsModule,
    RedisModule,
    CacheModule,
  ],
})
export class AppModule {}