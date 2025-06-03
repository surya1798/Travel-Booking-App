import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DestinationTitle } from "../destination/DestinationTitle";

export const CountryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
