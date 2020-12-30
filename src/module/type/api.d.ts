export interface IUserApiLogin {
  email: string;
  password: string;
}

export interface IUserApiSnsLogin {
  email: string;
  socialUid: string;
}

export interface IUserApiCreate {
  name: string;
  nickName: string;
  email: string;
  password: string;
  activityCategories: [];
}

export interface IUserApiPwForget {
  email: string;
}

export interface IUserApiPwChange {
  oldPassword: string;
  newPassword: string;
}

export interface IUserApiProfile {
  nickName: string;
  description: string;
}

export interface IFeedCreate {
  activityId: number;
  startDate: string;
  endDate: string;
  duration: number;
  calorie: number;
  distance: number;
  mapId: number;
  musicId: number;
  coordinates: string;
}

export interface IFeedIndex {
  id?: number;
  hasNextPage?: boolean;
  page: number;
  sort: 'createdAt' | 'likeCount' | string;
  order: 'DESC' | 'ASC' | string;
}

export interface IFeedCreateComment {
  feedId: number;
  description: string;
}
