import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

// Minimal in-memory stub service so compilation succeeds.
// Replace with real repository/TypeORM usage later.
@Injectable()
export class BookingsService {
  private items: any[] = [];
  private idCounter = 1;

  async create(dto: CreateBookingDto) {
    const item = { id: this.idCounter++, ...dto, status: 'scheduled' };
    this.items.push(item);
    return item;
  }

  async findAll() {
    return this.items;
  }

  async findOne(id: number | string) {
    const nid = typeof id === 'string' ? Number(id) : id;
    return this.items.find((i) => i.id === nid) || null;
  }

  // add findById to satisfy callers using that name
  async findById(id: number) {
    return this.findOne(id);
  }

  async update(id: number, dto: UpdateBookingDto) {
    const idx = this.items.findIndex((i) => i.id === id);
    if (idx === -1) return null;
    this.items[idx] = { ...this.items[idx], ...dto };
    return this.items[idx];
  }

  async remove(id: number) {
    this.items = this.items.filter((i) => i.id !== id);
  }
}