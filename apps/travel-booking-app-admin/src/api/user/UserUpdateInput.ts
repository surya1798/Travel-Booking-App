import { BookingUpdateManyWithoutUsersInput } from "./BookingUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bookings?: BookingUpdateManyWithoutUsersInput;
  email?: string;
  fname?: string;
  lname?: string;
  phoneNumber?: number;
};
