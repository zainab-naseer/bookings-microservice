import { Module } from '@nestjs/common';
import { BookingQueueProcessor } from './queues/booking-queue.processor';
import { CleanupProcessor } from './processors/cleanup.processor';

@Module({
  providers: [BookingQueueProcessor, CleanupProcessor],
  exports: [BookingQueueProcessor, CleanupProcessor],
})
export class JobsModule {}