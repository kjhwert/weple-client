export interface IEvent {
  id: number;
  img: string;
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
  userName: string;
  userImage: string;
  feedImage: string;
  likeCount: string;
  commentCount: string;
  isUserLiked: boolean;
  isFollowed: boolean;
  activityName: string;
  activityColor: string;
  activityImage: string;
}

export interface IFeedComments {
  id: number;
  description: string;
  createdAt: string;
  userName: string;
  userImage: string;
  isLoginUserWrote: boolean;
}
