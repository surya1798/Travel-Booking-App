import { Destination as TDestination } from "../api/destination/Destination";

export const DESTINATION_TITLE_FIELD = "destinationName";

export const DestinationTitle = (record: TDestination): string => {
  return record.destinationName?.toString() || String(record.id);
};
