import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const DestinationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="destination_name" source="destinationName" />
        <BooleanInput label="isBusesAvailable" source="isBusesAvailable" />
        <BooleanInput label="isFlightsAvailable" source="isFlightsAvailable" />
        <BooleanInput label="isTrainsAvailable" source="isTrainsAvailable" />
      </SimpleForm>
    </Create>
  );
};
