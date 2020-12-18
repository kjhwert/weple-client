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
