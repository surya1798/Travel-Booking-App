import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type DestinationWhereInput = {
  country?: CountryWhereUniqueInput;
  destinationName?: StringNullableFilter;
  id?: StringFilter;
  isBusesAvailable?: BooleanNullableFilter;
  isFlightsAvailable?: BooleanNullableFilter;
  isTrainsAvailable?: BooleanNullableFilter;
};
