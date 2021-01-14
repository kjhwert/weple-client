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
  IFeedCreate,
  IFeedIndex,
  IFeedCreateComment,
  IUtilityApiEvents,
} from './type/api';

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
  userImage: (file) =>
    apiRequest(
      api.post('/user/image', file, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    ),
  getCategory: () => apiRequest(api.get('/user/categories')),
  putCategory: () => apiRequest(api.put('/user/categories')),
  dropOut: () => apiRequest(api.delete('/user')),
  follow: (userId: number) => apiRequest(api.put(`/user/follow/${userId}/follow`)),
  unFollow: (userId: number) => apiRequest(api.put(`/user/follow/${userId}/unFollow`)),
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
  userOpenList: () => apiRequest(api.get('/together/user')),
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
  index: ({page, sort, order}: IFeedIndex) => apiRequest(api.get(`/feed?page=${page}&sort=${sort}&order=${order}`)),
  show: (feedId: number) => apiRequest(api.get(`/feed/${feedId}`)),
  showComments: (feedId: number) => apiRequest(api.get(`/feed/comments/${feedId}`)),
  feedLike: (feedId: number) => apiRequest(api.post(`/feed/like`, {feedId})),
  feedDisLike: (feedId: number) => apiRequest(api.post(`/feed/dis-like`, {feedId})),
  createComment: (data: IFeedCreateComment) => apiRequest(api.post(`/feed/comment`, data)),
};
