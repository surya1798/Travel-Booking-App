import { SortOrder } from "../../util/SortOrder";

export type CountryOrderByInput = {
  countryCode?: SortOrder;
  countryName?: SortOrder;
  createdAt?: SortOrder;
  destinationsId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
