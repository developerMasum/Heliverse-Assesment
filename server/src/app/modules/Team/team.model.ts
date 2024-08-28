import { ITeam, TUser } from './team.interface';
import { model, Schema } from 'mongoose';
const userSchema = new Schema<TUser>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const teamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true },
    users: [userSchema],

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Team = model<ITeam>('Team', teamSchema);
