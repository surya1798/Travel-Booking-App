import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FlightWhereInput = {
  flightNumber?: IntNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
