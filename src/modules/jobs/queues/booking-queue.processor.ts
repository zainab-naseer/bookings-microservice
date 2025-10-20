import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { BookingsService } from '../../bookings/bookings.service';

@Processor('booking-queue')
export class BookingQueueProcessor {
  constructor(private readonly bookingService: BookingsService) {}

  @Process('create-booking')
  async handleCreate(job: Job<any>) {
    const bookingData = job.data;
    // was: return this.bookingService.createBooking(bookingData);
    return this.bookingService.create(bookingData);
  }

  @Process('update-booking')
  async handleUpdate(job: Job<any>) {
    const { bookingId, updateData } = job.data;
    // was: return this.bookingService.updateBooking(bookingId, updateData);
    return this.bookingService.update(bookingId, updateData);
  }

  @Process('delete-booking')
  async handleDelete(job: Job<any>) {
    const { bookingId } = job.data;
    // was: return this.bookingService.deleteBooking(bookingId);
    return this.bookingService.remove(bookingId);
  }
}