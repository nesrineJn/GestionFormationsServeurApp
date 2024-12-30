import { ROLES } from "../constants/roles";

export type UserModelType = {
  email: string;
  fullName?: string;
  password: string;
  role: ROLES;
  // _id: string;
};
