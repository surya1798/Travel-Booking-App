import { Flight as TFlight } from "../api/flight/Flight";

export const FLIGHT_TITLE_FIELD = "name";

export const FlightTitle = (record: TFlight): string => {
  return record.name?.toString() || String(record.id);
};
