import { Module, forwardRef } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { BookingQueueProcessor } from './queues/booking-queue.processor';
import { BookingsModule } from '../bookings/bookings.module';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'booking-queue' }),
    forwardRef(() => BookingsModule),
  ],
  providers: [BookingQueueProcessor],
  exports: [],
})
export class JobsModule {}