export interface ITogetherComments {
  id: number;
  description: string;
  createdAt: string;
  user: {
    id: number;
    image: string;
    nickName: string;
  };
  isModify: false;
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
}
