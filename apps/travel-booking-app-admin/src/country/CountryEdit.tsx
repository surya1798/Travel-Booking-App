import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CountryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="country_code" source="countryCode" />
        <TextInput label="country_name" source="countryName" />
      </SimpleForm>
    </Edit>
  );
};
