import axios from 'axios';
import {BASE_URL} from './common';
import AsyncStorage from '@react-native-community/async-storage';
import {IFeedCreate, IUserApiCreate, IUserApiLogin} from './type/api';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const user = await AsyncStorage.getItem('@user');
  if (user) {
    const {access_token} = JSON.parse(user);
    config.headers.Authorization = access_token;
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
};

export const userApi = {
  login: (login: IUserApiLogin) => apiRequest(api.post('/login', login)),
  create: (user: IUserApiCreate) => apiRequest(api.post('/user', user)),
  hasEmail: (email: string) =>
    apiRequest(api.get(`/user/hasEmail?email=${email}`)),
  hasNickName: (nickName: string) =>
    apiRequest(api.get(`/user/hasNickName?nickname=${nickName}`)),
};

export const feedApi = {
  create: (data: IFeedCreate) => apiRequest(api.post('/feed', data)),
  imagesCreate: (data) => apiRequest(api.post('/feed/images', data)),
};
