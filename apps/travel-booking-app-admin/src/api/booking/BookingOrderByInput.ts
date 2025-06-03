import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  bookingDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  travelingVia?: SortOrder;
  updatedAt?: SortOrder;
};
