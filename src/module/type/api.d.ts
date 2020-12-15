export interface IUserApiLogin {
  email: string;
  password: string;
}

export interface IUserApiCreate {
  name: string;
  nickName: string;
  email: string;
  password: string;
  activityCategories: [];
}
