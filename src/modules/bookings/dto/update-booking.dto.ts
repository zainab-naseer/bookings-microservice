export class UpdateBookingDto {
  readonly id: number;
  readonly date?: Date;
  readonly time?: string;
  readonly customerName?: string;
  readonly status?: string;
}