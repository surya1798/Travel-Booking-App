import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const DestinationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="destination_name" source="destinationName" />
        <BooleanInput label="isBusesAvailable" source="isBusesAvailable" />
        <BooleanInput label="isFlightsAvailable" source="isFlightsAvailable" />
        <BooleanInput label="isTrainsAvailable" source="isTrainsAvailable" />
      </SimpleForm>
    </Edit>
  );
};
