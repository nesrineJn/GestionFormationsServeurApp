
import { userService } from '../services';
import { UserModelType } from '../types';

export async function getAll() {
  const users = await userService.getMany({});
  return{users};
}
export async function getByRole(role: string) {
  return await userService.getByRole(role);
}
// user.controller.ts

export async function updateById(id: string, userData: UserModelType) {
  // Implementation for updating user
  return userService.updateOne({ _id: id }, userData);
}

export async function deleteById(id: string) {
  // Implementation for deleting user
  return userService.deleteOne({ _id: id });
}
