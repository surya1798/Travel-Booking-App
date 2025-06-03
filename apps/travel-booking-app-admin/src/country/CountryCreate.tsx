import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CountryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="country_code" source="countryCode" />
        <TextInput label="country_name" source="countryName" />
      </SimpleForm>
    </Create>
  );
};
