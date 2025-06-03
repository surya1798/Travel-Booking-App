import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingCreateInput = {
  bookingDate: Date;
  travelingVia: string;
  user: UserWhereUniqueInput;
};
