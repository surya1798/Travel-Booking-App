import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="booking_date" source="bookingDate" />
        <TextInput label="traveling_via" source="travelingVia" />
      </SimpleForm>
    </Create>
  );
};
