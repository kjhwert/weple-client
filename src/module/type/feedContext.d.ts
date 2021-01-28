export interface IFeedContext {
  show?: IShowFeed;
  showLoading?: boolean;
  getShow?: (id: number) => void;
}

export interface IShowFeed {
  id: number;
  duration: number;
  distance: number;
  coordinates: string;
  startDate: Date;
  endDate: Date;
  calorie: number;
  thumbnail: string;
  userNickName: string;
  userImage: string;
  likeCount: number;
  commentCount: number;
  isUserLiked: number;
  createdAt: string;
  userId: number;
  isUserFollowed: boolean;
  activityName: string;
  activityColor: string;
  activityImage: string;
  mapId: number;
  mapStyle: string;
  musicId: number;
  musicUrl: string;
  images: Array<IFeedImage>;
}

export interface IFeedImage {
  id: number;
  img: string;
  lat: number;
  lon: number;
  distance: number;
}
