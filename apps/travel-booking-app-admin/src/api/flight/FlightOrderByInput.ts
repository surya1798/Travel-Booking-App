import { SortOrder } from "../../util/SortOrder";

export type FlightOrderByInput = {
  createdAt?: SortOrder;
  flightNumber?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
