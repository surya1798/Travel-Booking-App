import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const FlightCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="flight_number" source="flightNumber" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
