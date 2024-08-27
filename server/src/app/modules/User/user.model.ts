/* eslint-disable @typescript-eslint/no-this-alias */

import { Schema, model } from 'mongoose';
import { TUser, UserModel } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female'],
      required: true,
    },

    avatar: {
      type: String,
      required: true,
    },
    availability: {
      type: Boolean,
      required: true,
      default: true,
    },
    domain: {
      type: String,
      required: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email });
};

export const User = model<TUser, UserModel>('users', userSchema);
