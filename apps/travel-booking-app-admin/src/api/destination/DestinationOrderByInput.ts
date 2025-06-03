import { SortOrder } from "../../util/SortOrder";

export type DestinationOrderByInput = {
  createdAt?: SortOrder;
  destinationName?: SortOrder;
  id?: SortOrder;
  isBusesAvailable?: SortOrder;
  isFlightsAvailable?: SortOrder;
  isTrainsAvailable?: SortOrder;
  updatedAt?: SortOrder;
};
