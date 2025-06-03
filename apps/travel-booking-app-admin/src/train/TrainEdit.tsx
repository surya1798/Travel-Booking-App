import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TrainEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="train_name" source="trainName" />
        <TextInput label="train_number" source="trainNumber" />
      </SimpleForm>
    </Edit>
  );
};
