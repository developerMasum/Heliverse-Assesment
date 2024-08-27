/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';

import AppError from '../../errors/AppError';

import QueryBuilder from '../../builder/QueryBuilder';
import { TUser } from './user.interface';
import { User } from './user.model';
import { userSearchableFields } from './user.constants';

const createUserIntoDB = async (payload: TUser) => {
  const isExistUser = await User.findOne({ email: payload.email });

  if (isExistUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This email already exists');
  }

  const result = await User.create(payload);
  return result;
};

const getAllUser = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(User.find({ isDeleted: false }), query)
    .search(userSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await userQuery.modelQuery;
  const meta = await userQuery.countTotal();

  return {
    meta,
    result,
  };
};

const getSingleUser = async (id: string) => {
  const result = await User.findById(id);
  return result;
};
const deleteUser = async (id: string) => {
  const isExistUser = await User.findOne({ _id: id });

  if (!isExistUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This user not found !');
  }

  const result = await User.findByIdAndDelete(id);
  return result;
};

const updateUser = async (id: string, payload: Partial<TUser>) => {
  const isExistUser = await User.findOne({ _id: id });

  if (!isExistUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This user not found !');
  }

  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
};
