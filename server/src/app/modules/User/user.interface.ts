/* eslint-disable no-unused-vars */

import { Model } from 'mongoose';

export interface TUser {
  first_name: string;
  last_name: string;
  email: string;
  gender: 'Male' | 'Female';
  domain: string;
  available: boolean;
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
