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
  isSocialLogin: boolean;
  socialUid: string;
  activityCategories: number[];
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

export interface IServiceApiInquiry {
  requestTitle: string;
  requestDescription: string;
}

export interface IUserApiCategory {
  categories: number[];
}

export interface ITogetherApiModify {
  title: string;
  description: string;
  recommend: string;
  notice: string;
}

export interface ITogetherApiOpneRoom {
  title: string;
  description: string;
  recommend: string;
  notice: string;
  togetherDate: string;
  limitDate: string;
  togetherPlace: string;
  maxMember: number;
  togetherPrice: number;
  isPublic: boolean;
  feed: number;
  activity: number;
}

export interface ITogetherCreateComment {
  description: string;
}

export interface ITogetherIndex {
  id?: number;
  hasNextPage?: boolean;
  page: number;
  sort: 'createdAt' | 'likeCount' | string;
  order: 'DESC' | 'ASC' | string;
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
