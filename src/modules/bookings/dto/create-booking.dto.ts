export class CreateBookingDto {
  readonly userId: number;
  readonly roomId: number;
  readonly startDate: Date;
  readonly endDate: Date;
  readonly specialRequests?: string;
}