import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "travelingVia";

export const BookingTitle = (record: TBooking): string => {
  return record.travelingVia?.toString() || String(record.id);
};
