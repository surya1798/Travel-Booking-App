import { Booking } from "../booking/Booking";

export type User = {
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string;
  fname: string;
  id: string;
  lname: string;
  phoneNumber: number;
  updatedAt: Date;
};
