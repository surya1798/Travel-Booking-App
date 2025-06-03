import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const DestinationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"destinations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="destination_name" source="destinationName" />
        <TextField label="ID" source="id" />
        <BooleanField label="isBusesAvailable" source="isBusesAvailable" />
        <BooleanField label="isFlightsAvailable" source="isFlightsAvailable" />
        <BooleanField label="isTrainsAvailable" source="isTrainsAvailable" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
