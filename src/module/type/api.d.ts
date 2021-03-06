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
  requestType: string;
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

export interface IUtilityApiEvents {
  page: number;
}

interface Image {
  img: string;
  lat: number | undefined;
  lon: number | undefined;
  distance: number;
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
  images: Array<Image>;
}

export interface IFeedIndex {
  tab?: string;
  hasNextPage?: boolean;
  page: number;
  sort: 'createdAt' | 'likeCount' | string;
  order: 'DESC' | 'ASC' | string;
  nickName: string;
  lat?: number;
  lon?: number;
}

export interface IFeedPagination {
  page: number;
  label?: string;
  sort?: 'createdAt' | 'likeCount' | 'location';
  order?: 'DESC' | 'ASC';
  nickName: string;
  lat?: number;
  lon?: number;
  hasNextPage?: boolean;
}

export interface IFeedCreateComment {
  feedId: number;
  description: string;
}
