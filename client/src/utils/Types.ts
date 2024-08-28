export type TUser = {
  _id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  domain: string;
  gender: string;
  available: boolean;
};

export interface IUserResponse {
  users: {
    data: {
      result: TUser[];
    };
  };
}
