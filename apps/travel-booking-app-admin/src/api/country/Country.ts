import { Destination } from "../destination/Destination";

export type Country = {
  countryCode: string | null;
  countryName: string | null;
  createdAt: Date;
  destinations?: Destination | null;
  id: string;
  updatedAt: Date;
};
