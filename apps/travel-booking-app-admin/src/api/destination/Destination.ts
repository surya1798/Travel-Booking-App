import { Country } from "../country/Country";

export type Destination = {
  country?: Country | null;
  createdAt: Date;
  destinationName: string | null;
  id: string;
  isBusesAvailable: boolean | null;
  isFlightsAvailable: boolean | null;
  isTrainsAvailable: boolean | null;
  updatedAt: Date;
};
