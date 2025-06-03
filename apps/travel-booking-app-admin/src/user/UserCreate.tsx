import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="fname" source="fname" />
        <TextInput label="lname" source="lname" />
        <NumberInput step={1} label="phone_number" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
