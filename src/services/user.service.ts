/*
 * Developer: Nesrine Jouini
 * Company: ISET_RADES
 * Date: 30/12/2024
 */

import { UserModelType } from '../types';
import UserModel from '../models/user.model';
import { FilterQuery, UpdateQuery } from 'mongoose';
import { InternalServerError } from '../errors';

export async function getByRole(role: string) {
    const filter = role ? { role: role } : {};
    try {
      const users = await UserModel.find(filter);
      return users;
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  }
export function createOne(email: string, password: string, fullName: string, phoneNumber: string) {
  try {
    const user = {
      email,
      password,
      fullName,
      phoneNumber,
    };
    return UserModel.create(user);
  } catch (error) {
    throw new InternalServerError('', 'user.service createOne', {
      email,
      fullName,
    });
  }
}

export function createMany(users: UserModelType[]) {
    try {
        return UserModel.insertMany(users);
    } catch (error) {
        throw new InternalServerError('', 'user.service createMany', users);
    }
}

export function getOne(filter: FilterQuery<UserModelType>) {
    try {
        return UserModel.findOne(filter);
    } catch (error) {
        throw new InternalServerError('', 'user.service getOne', filter);
    }
}

export function getById(_id: string) {
    try {
        return UserModel.findById(_id);
    } catch (error) {
        throw new InternalServerError('', 'user.service getById', { _id });
    }
}

export function getMany(filter: FilterQuery<UserModelType>) {
    try {
        return UserModel.find(filter);
    } catch (error) {
        throw new InternalServerError('', 'user.service getMany', filter);
    }
}

export function count(filter: FilterQuery<UserModelType>) {
    try {
        return UserModel.countDocuments(filter);
    } catch (error) {
        throw new InternalServerError('', 'user.service count', filter);
    }
}

export async function updateOne(filter: FilterQuery<UserModelType>, update: UpdateQuery<UserModelType>) {
    try {
        return await UserModel.updateOne(filter, update);
    } catch (error) {
        throw new InternalServerError('', 'user.service updateOne', { filter, update });
    }
}

export async function updateMany(filter: FilterQuery<UserModelType>, update: UpdateQuery<UserModelType>) {
    try {
        return await UserModel.updateMany(filter, update);
    } catch (error) {
        throw new InternalServerError('', 'user.service updateMany', { filter, update });
    }
}

export async function getIdis(filter: FilterQuery<UserModelType>) {
    try {
        return await UserModel.find(filter).distinct('_id');
    } catch (error) {
        throw new InternalServerError('', 'user.service getIdis', filter);
    }
}
export async function deleteOne(filter: FilterQuery<UserModelType>) {
    try {
        return await UserModel.deleteOne(filter);
    } catch (error) {
        throw new InternalServerError('', 'user.service deleteOne', filter);
    }
}