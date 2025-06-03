import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { COUNTRY_TITLE_FIELD } from "../country/CountryTitle";

export const DestinationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="country" source="country.id" reference="Country">
          <TextField source={COUNTRY_TITLE_FIELD} />
        </ReferenceField>
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
