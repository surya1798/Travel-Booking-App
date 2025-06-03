import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="booking_date" source="bookingDate" />
        <TextInput label="traveling_via" source="travelingVia" />
      </SimpleForm>
    </Edit>
  );
};
