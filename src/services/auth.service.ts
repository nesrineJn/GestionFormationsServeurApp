import { userService } from '.';
import UserModel from '../models/user.model';
import { InternalServerError } from '../errors';
import { bcryptService } from '../middlewares';

export const createUser = async (
  email: string,
  password: string,
  fullName: string,
  phoneNumber: string,
) => {
  const hashedPassword = await bcryptService.hash(password);
  return await userService.createOne(email, hashedPassword, fullName, phoneNumber);
};

export const doesUserExist = async (email: string) => {
  const existingUserCount = await userService.count({ email });
  return existingUserCount > 0;
};

