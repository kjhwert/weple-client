export interface IUser {
  id: number;
  name: string;
  nickName: string;
  email: string;
  password: string;
  access_token: string;
  description: string;
  activeCategories: {
    userCategory?: Array<number>;
  };
}

export interface IUserFollower {
  id: number;
  nickName: string;
  image: string;
}

export interface IUserFollow {
  id: number;
  userNickName: string;
  userImage: string;
  isUserFollowed: string;
}
