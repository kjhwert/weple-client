import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'http://ttamna-api.hlabpartner.com',
});

api.interceptors.request.use(async (config) => {
  const user = await AsyncStorage.getItem('@user');
  if (user) {
    const {access_token} = JSON.parse(user);
    config.headers.Authorization = access_token;
  }
  return config;
});

export const categoryApi = {
  activities: async () => {
    try {
      const {data} = await api.get('/activity-group');
      return data;
    } catch ({message}) {
      return message;
    }
  },
};

const apiRequest = async (request: Object) => {
  try {
    const {data}: any = await request;
    return data;
  } catch (e) {
    return e;
  }
};

export const userApi = {
  login: (loginState: {email: string; password: string}) => {
    const response = apiRequest(api.post('/login', loginState));
    return response;
  },
  join: (createUserData: {
    name: string;
    nickName: string;
    email: string;
    password: string;
    activityCategories: [];
  }) => {
    const response = apiRequest(api.post('/user', createUserData));
    console.log('join:', response);
    return response;
  },
  hasEmail: (email: string) => {
    return apiRequest(api.get('/user/hasEmail?email=' + email));
  },
  hasNickName: (nickName: string) => {
    return apiRequest(api.get('/user/hasNickName?nickname=' + nickName));
  },
};
