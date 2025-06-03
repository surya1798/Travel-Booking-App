import { SortOrder } from "../../util/SortOrder";

export type TrainOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  trainName?: SortOrder;
  trainNumber?: SortOrder;
  updatedAt?: SortOrder;
};
