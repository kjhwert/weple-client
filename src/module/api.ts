import axios from 'axios';
import {BASE_URL} from './common';
import AsyncStorage from '@react-native-community/async-storage';
import {
  IUserApiCreate,
  IUserApiLogin,
  IUserApiSnsLogin,
  IUserApiPwForget,
  IUserApiPwChange,
  IUserApiProfile,
  IServiceApiInquiry,
  IUserApiCategory,
  ITogetherApiModify,
  ITogetherApiOpneRoom,
  ITogetherCreateComment,
  IFeedCreate,
  IFeedIndex,
  IFeedCreateComment,
  IUtilityApiEvents,
  IFeedPagination,
} from './type/api';
import {IFeedComments} from './type/feed';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const user = await AsyncStorage.getItem('@user');
  if (user) {
    const {access_token} = JSON.parse(user);
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

const apiRequest = async (request: Object) => {
  try {
    const {data}: any = await request;
    return data;
  } catch (e) {
    console.log(e);
    return {statusCode: 500, message: e.message};
  }
};

export const categoryApi = {
  activities: () => apiRequest(api.get('/activity-group')),
};

export const utilitiesApi = {
  maps: () => apiRequest(api.get('/map-group')),
  musics: () => apiRequest(api.get('/music-group')),
  events: ({page}: IUtilityApiEvents) => apiRequest(api.get(`/event?page=${page}`)),
};

export const userApi = {
  login: (login: IUserApiLogin) => apiRequest(api.post('/user/login', login)),
  socialLogin: (socialLogin: IUserApiSnsLogin) => apiRequest(api.post('/user/social-login', socialLogin)),
  create: (user: IUserApiCreate) => apiRequest(api.post('/user', user)),
  hasEmail: (email: string) => apiRequest(api.get(`/user/hasEmail?email=${email}`)),
  hasNickName: (nickName: string) => apiRequest(api.get(`/user/hasNickName?nickname=${nickName}`)),
  passwordForget: (passwordForget: IUserApiPwForget) => apiRequest(api.post('/user/password-forget', passwordForget)),
  passwordChange: (passwordChange: IUserApiPwChange) => apiRequest(api.post('/user/password-change', passwordChange)),
  getProfile: (id: string) => apiRequest(api.get('/user/' + id)),
  putProfile: (putProfile: IUserApiProfile) => apiRequest(api.put('/user/', putProfile)),
  userImage: (file: string) =>
    apiRequest(
      api.post('/user/image', file, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    ),
  getCategory: () => apiRequest(api.get('/user/categories')),
  putCategory: (category: IUserApiCategory) => apiRequest(api.put('/user/categories', category)),
  dropOut: () => apiRequest(api.delete('/user')),
  getFollowCount: () => apiRequest(api.get('/user/follow/count')),
  getNewFollowers: () => apiRequest(api.get('/user/follow')),
  getUserFollowing: () => apiRequest(api.get('/user/follow/following')),
  getUserFollower: () => apiRequest(api.get('/user/follow/follower')),
  follow: (userId: number) => apiRequest(api.put(`/user/follow/${userId}/follow`)),
};

export const serviceApi = {
  noticeList: (page: string) => apiRequest(api.get('/notice?page=' + page)),
  notice: (id: string) => apiRequest(api.get('/notice/' + id)),
  eventList: (page: string) => apiRequest(api.get('/event?page=' + page)),
  event: (id: string) => apiRequest(api.get('/event/' + id)),
  getInquiry: () => apiRequest(api.get('/inquiry')),
  setInquiry: (ask: IServiceApiInquiry) => apiRequest(api.post('/inquiry', ask)),
  faq: () => apiRequest(api.get('/faq')),
  terms: () => apiRequest(api.get('/terms')),
};

export const togetherApi = {
  userOpenList: (id: number) => apiRequest(api.get('/together/user/' + id)),
  userOpenTotalList: (id: number, page: number) => apiRequest(api.get('/together/user/' + id + '?page=' + page)),
  userOpenDetail: (id: number) => apiRequest(api.get('/together/' + id)),
  putTogetherDetail: (id: number, modify: ITogetherApiModify) => apiRequest(api.put('/together/' + id, modify)),
  deleteTogetherDetail: (id: number) => apiRequest(api.delete('/together/' + id)),
  togetherMember: (id: number) => apiRequest(api.get('/together/' + id + '/user')),
  userOpenRoom: (room: ITogetherApiOpneRoom) => apiRequest(api.post('/together', room)),
  locationList: (latitude: string, longitude: string, page: string) =>
    apiRequest(api.get('/together/location?latitude=' + latitude + '&longitude=' + longitude + '&page=' + page)),
  followerList: (page: number) => apiRequest(api.get('/together/follower?page=' + page)),
  endSoonList: (page: number) => apiRequest(api.get('/together/end-soon?page=' + page)),
  getComment: (togetherId: number) => apiRequest(api.get('/together/' + togetherId + '/comment/')),
  createComment: (togetherId: number, data: ITogetherCreateComment) =>
    apiRequest(api.post('/together/' + togetherId + '/comment/', data)),
  putComment: (commentId: number, description: any) =>
    apiRequest(api.put('/together/comment/' + commentId, description)),
  deleteComment: (commentId: number) => apiRequest(api.delete('/together/comment/' + commentId)),
  togetherIn: (togetherId: number) => apiRequest(api.post('/together/' + togetherId + '/together-in')),
  togetherOut: (togetherId: number) => apiRequest(api.post('/together/' + togetherId + '/together-out')),
};

export const feedApi = {
  create: (data: IFeedCreate) => apiRequest(api.post('/feed', data)),
  imagesCreate: async (file) => {
    try {
      const {data} = await api.post('/feed/image', file, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (e) {
      return {statusCode: 500, message: e.message};
    }
  },
  thumbnailCreate: async (file) => {
    try {
      const {data} = await api.post('/feed/thumbnail', file, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (e) {
      return {statusCode: 500, message: e.message};
    }
  },
  index: ({page, sort, order, nickName}: IFeedPagination) =>
    apiRequest(api.get(`/feed?page=${page}&sort=${sort}&order=${order}&nickName=${nickName}`)),
  locationIndex: ({page, lat, lon, nickName}: IFeedPagination) =>
    /** reverse latitude, longitude */
    apiRequest(api.get(`/feed/location?lat=${lon}&lon=${lat}&page=${page}&nickName=${nickName}`)),
  show: (feedId: number) => apiRequest(api.get(`/feed/${feedId}`)),
  showComments: (feedId: number) => apiRequest(api.get(`/feed/${feedId}/comment`)),
  showLikeUsers: (feedId: number) => apiRequest(api.get(`/feed/${feedId}/like`)),
  feedLike: (feedId: number) => apiRequest(api.post(`/feed/like`, {feedId})),
  feedDisLike: (feedId: number) => apiRequest(api.post(`/feed/dis-like`, {feedId})),
  createComment: (data: IFeedCreateComment) => apiRequest(api.post(`/feed/comment`, data)),
  updateComment: (id: number, description: string) => apiRequest(api.put(`/feed/comment/${id}`, {description})),
  destroyComment: (id: number) => apiRequest(api.delete(`/feed/comment/${id}`)),

  getMyfeed: (id: string, page: number) => apiRequest(api.get('/feed/user/' + id + '?page=' + page + '&userId=' + id)),
  getLikefeed: (page: number, sort: string, order: string) =>
    apiRequest(api.get('/feed?page=' + page + '&sort=' + sort + '&order=' + order)),
};
