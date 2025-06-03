import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CountryWhereInput = {
  countryCode?: StringNullableFilter;
  countryName?: StringNullableFilter;
  destinations?: DestinationWhereUniqueInput;
  id?: StringFilter;
};
