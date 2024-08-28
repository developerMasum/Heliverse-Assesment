import { Types } from 'mongoose';
export type TUser = {
  userId: Types.ObjectId;
};
export interface ITeam {
  name: string;
  users: TUser;
  isDeleted?: boolean;
}
