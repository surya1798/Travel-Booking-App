import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type UserWhereInput = {
  email?: StringFilter;
  fname?: StringFilter;
  id?: StringFilter;
  lname?: StringFilter;
  phoneNumber?: IntFilter;
};
