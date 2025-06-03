import { DestinationWhereUniqueInput } from "../destination/DestinationWhereUniqueInput";

export type CountryCreateInput = {
  countryCode?: string | null;
  countryName?: string | null;
  destinations?: DestinationWhereUniqueInput | null;
};
