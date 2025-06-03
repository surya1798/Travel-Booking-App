import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TrainCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="train_name" source="trainName" />
        <TextInput label="train_number" source="trainNumber" />
      </SimpleForm>
    </Create>
  );
};
