import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { CountryTitle } from "../country/CountryTitle";

export const DestinationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="country.id" reference="Country" label="country">
          <SelectInput optionText={CountryTitle} />
        </ReferenceInput>
        <TextInput label="destination_name" source="destinationName" />
        <BooleanInput label="isBusesAvailable" source="isBusesAvailable" />
        <BooleanInput label="isFlightsAvailable" source="isFlightsAvailable" />
        <BooleanInput label="isTrainsAvailable" source="isTrainsAvailable" />
      </SimpleForm>
    </Create>
  );
};
