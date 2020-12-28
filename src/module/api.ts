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
  IFeedCreate,
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
};

export const userApi = {
  login: (login: IUserApiLogin) => apiRequest(api.post('/login', login)),
  socialLogin: (socialLogin: IUserApiSnsLogin) => apiRequest(api.post('/social-login', socialLogin)),
  create: (user: IUserApiCreate) => apiRequest(api.post('/user', user)),
  hasEmail: (email: string) => apiRequest(api.get(`/user/hasEmail?email=${email}`)),
  hasNickName: (nickName: string) => apiRequest(api.get(`/user/hasNickName?nickname=${nickName}`)),
  passwordForget: (passwordForget: IUserApiPwForget) => apiRequest(api.post(`/user/password-forget`, passwordForget)),
  passwordChange: (passwordChange: IUserApiPwChange) => apiRequest(api.post('/user/password-change', passwordChange)),
  getProfile: (id: string) => apiRequest(api.get('/user' + id)),
  putProfile: (putProfile: IUserApiProfile, id: string) => apiRequest(api.put('/user' + id, putProfile)),
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
};
