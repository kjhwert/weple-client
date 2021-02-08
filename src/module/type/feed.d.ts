export interface IEvent {
  id: number;
  image: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface IFeed {
  id: number;
  duration: number;
  distance: number;
  createdAt: string;
  thumbnail: string;
  commentDescription: string;
  commentUserName: string;
  commentUserImage: string;
  userId: number;
  userNickName: string;
  userImage: string;
  feedImage: string;
  likeCount: number;
  commentCount: number;
  isUserLiked: boolean;
  isUserFollowed: boolean;
  activityName: string;
  activityColor: string;
  activityImage: string;
}

export interface IUserStatistics {
  activityName: string;
  calorie: string;
  distance: number;
  duration: string;
}

export interface IFeedComments {
  id: number;
  description: string;
  createdAt: string;
  userId: number;
  userName: string;
  userImage: string;
  isLoginUserWrote: boolean;
}
