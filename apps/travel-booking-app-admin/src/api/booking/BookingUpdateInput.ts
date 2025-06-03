import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingUpdateInput = {
  bookingDate?: Date;
  travelingVia?: string;
  user?: UserWhereUniqueInput;
};
