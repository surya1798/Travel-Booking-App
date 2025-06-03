import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const DestinationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="destination_name" source="destinationName" />
        <TextField label="ID" source="id" />
        <BooleanField label="isBusesAvailable" source="isBusesAvailable" />
        <BooleanField label="isFlightsAvailable" source="isFlightsAvailable" />
        <BooleanField label="isTrainsAvailable" source="isTrainsAvailable" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
