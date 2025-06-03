import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  bookingDate?: DateTimeFilter;
  id?: StringFilter;
  travelingVia?: StringFilter;
  user?: UserWhereUniqueInput;
};
