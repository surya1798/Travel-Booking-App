import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  fname?: SortOrder;
  id?: SortOrder;
  lname?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
