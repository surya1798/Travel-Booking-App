import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type DestinationCreateInput = {
  country?: CountryWhereUniqueInput | null;
  destinationName?: string | null;
  isBusesAvailable?: boolean | null;
  isFlightsAvailable?: boolean | null;
  isTrainsAvailable?: boolean | null;
};
