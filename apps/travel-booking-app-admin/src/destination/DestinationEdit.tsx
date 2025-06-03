import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { CountryTitle } from "../country/CountryTitle";

export const DestinationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="country.id" reference="Country" label="country">
          <SelectInput optionText={CountryTitle} />
        </ReferenceInput>
        <TextInput label="destination_name" source="destinationName" />
        <BooleanInput label="isBusesAvailable" source="isBusesAvailable" />
        <BooleanInput label="isFlightsAvailable" source="isFlightsAvailable" />
        <BooleanInput label="isTrainsAvailable" source="isTrainsAvailable" />
      </SimpleForm>
    </Edit>
  );
};
