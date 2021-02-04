export interface ITogetherComments {
  id: number;
  description: string;
  createdAt: string;
  user: {
    id: number;
    image: string;
    nickName: string;
  };
}

export interface IUserTogethers {
  activity: {
    color: string;
    image: string;
    name: string;
  };
  description: string;
  feed: {
    distance: number;
    thumbnail: string;
  };
  id: number;
  limitDate: string;
  title: string;
  togetherPlace: string;
  togetherPrice: number;
}

export interface ITogethers {
  id: number;
  title: string;
  place: string;
  price: number;
  limitDate: string;
  activityName: string;
  activityColor: string;
  activityImage: number;
  thumbnail: string;
  distance: number;
  address: string;
  lat?: number;
  lon?: number;
}

export interface IShowTogether {
  userCount: number;
  together: ITogether;
  commentCount: number;
}

export interface ITogether {
  address: string;
  commentDescription: string | null;
  commentImage: string | null;
  commentNickName: string | null;
  description: string;
  id: number;
  isUserJoined: boolean;
  isUsersTogether: boolean;
  maxMember: number;
  notice: string;
  recommend: string;
  thumbnail: string;
  title: string;
  togetherDate: Date;
  togetherPlace: string;
  togetherPrice: string;
}

export interface IActivityGroup {
  id: number;
  name: string;
  categoryActivity: Array<ICategoryActivity>;
}

export interface ICategoryActivity {
  id: number;
  name: string;
  caloriesPerMinute: number;
}
