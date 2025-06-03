import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";

export type CountryUpdateInput = {
  countryCode?: string | null;
  countryName?: string | null;
  destinations?: DestinationWhereUniqueInput | null;
};
