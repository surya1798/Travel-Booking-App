import { SortOrder } from "../../util/SortOrder";

export type DestinationOrderByInput = {
  countryId?: SortOrder;
  createdAt?: SortOrder;
  destinationName?: SortOrder;
  id?: SortOrder;
  isBusesAvailable?: SortOrder;
  isFlightsAvailable?: SortOrder;
  isTrainsAvailable?: SortOrder;
  updatedAt?: SortOrder;
};
