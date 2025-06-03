import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DESTINATION_TITLE_FIELD } from "../destination/DestinationTitle";

export const CountryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"countries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="country_code" source="countryCode" />
        <TextField label="country_name" source="countryName" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="destinations"
          source="destination.id"
          reference="Destination"
        >
          <TextField source={DESTINATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
