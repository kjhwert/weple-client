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

export interface IUtilityApiEvents {
  page: number;
}

export interface IFeedCreate {
  activity: number;
  startDate: string;
  endDate: string;
  duration: number;
  calorie: number;
  distance: number;
  map: number;
  music: number;
  coordinates: string;
  address: string;
}

export interface IFeedIndex {
  tab?: string;
  hasNextPage?: boolean;
  page: number;
  sort: 'createdAt' | 'likeCount' | string;
  order: 'DESC' | 'ASC' | string;
}

export interface IFeedCreateComment {
  feedId: number;
  description: string;
}
