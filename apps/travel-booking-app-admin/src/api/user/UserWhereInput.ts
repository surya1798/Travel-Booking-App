import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type UserWhereInput = {
  bookings?: BookingListRelationFilter;
  email?: StringFilter;
  fname?: StringFilter;
  id?: StringFilter;
  lname?: StringFilter;
  phoneNumber?: IntFilter;
};
