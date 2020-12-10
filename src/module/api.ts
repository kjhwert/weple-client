import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ttamna-api.hlabpartner.com',
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

export const userApi = async (loginState) => {
  const response = await api.post('/login', loginState);
  return response;
};

export const nickNameApi = {
  hasNickName: (nickName) => {
    return apiRequest(api.get('/user/hasNickName?nickname=' + nickName));
  },
};