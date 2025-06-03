import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "fname";

export const UserTitle = (record: TUser): string => {
  return record.fname?.toString() || String(record.id);
};
