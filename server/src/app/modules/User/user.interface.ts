/* eslint-disable no-unused-vars */

import { Model } from 'mongoose';

export interface TUser {
  name: string;
  email: string;
  gender: 'Male' | 'Female';
  domain: string;
  availability: boolean;
  avatar?: string;
  isDeleted?: boolean;
}

export interface UserModel extends Model<TUser> {
  isUserExistsByEmail(email: string): Promise<TUser>;

  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
