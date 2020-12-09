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
