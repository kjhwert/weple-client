export interface IUser {
  id: number;
  name: string;
  nickName: string;
  email: string;
  password: string;
  token: string;
  activeCategories: {
    userCategory?: Array<number>;
  };
}
