import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DestinationTitle } from "../destination/DestinationTitle";

export const CountryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="country_code" source="countryCode" />
        <TextInput label="country_name" source="countryName" />
        <ReferenceInput
          source="destinations.id"
          reference="Destination"
          label="destinations"
        >
          <SelectInput optionText={DestinationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
