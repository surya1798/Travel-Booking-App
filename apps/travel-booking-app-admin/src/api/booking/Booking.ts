import { User } from "../user/User";

export type Booking = {
  bookingDate: Date;
  createdAt: Date;
  id: string;
  travelingVia: string;
  updatedAt: Date;
  user?: User;
};
