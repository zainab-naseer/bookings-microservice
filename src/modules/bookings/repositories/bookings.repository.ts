import { EntityRepository, Repository } from 'typeorm';
import { Booking } from '../entities/booking.entity';

@EntityRepository(Booking)
export class BookingsRepository extends Repository<Booking> {
    // Custom database operations can be defined here
}