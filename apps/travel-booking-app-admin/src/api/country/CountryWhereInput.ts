import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CountryWhereInput = {
  countryCode?: StringNullableFilter;
  countryName?: StringNullableFilter;
  id?: StringFilter;
};
