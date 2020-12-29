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
