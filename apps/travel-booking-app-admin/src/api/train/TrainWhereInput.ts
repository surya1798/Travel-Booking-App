import { StringFilter } from "../../util/StringFilter";

export type TrainWhereInput = {
  id?: StringFilter;
  trainName?: StringFilter;
  trainNumber?: StringFilter;
};
