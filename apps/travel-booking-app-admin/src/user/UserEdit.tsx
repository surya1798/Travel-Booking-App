import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="fname" source="fname" />
        <TextInput label="lname" source="lname" />
        <NumberInput step={1} label="phone_number" source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
