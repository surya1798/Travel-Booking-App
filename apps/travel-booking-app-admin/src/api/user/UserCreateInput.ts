import { BookingCreateNestedManyWithoutUsersInput } from "./BookingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bookings?: BookingCreateNestedManyWithoutUsersInput;
  email: string;
  fname: string;
  lname: string;
  phoneNumber: number;
};
