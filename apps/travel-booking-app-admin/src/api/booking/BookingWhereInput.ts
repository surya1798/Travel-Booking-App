import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type BookingWhereInput = {
  bookingDate?: DateTimeFilter;
  id?: StringFilter;
  travelingVia?: StringFilter;
};
