import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const FlightEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="flight_number" source="flightNumber" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
