import {IGps} from './type/common';

export const BASE_URL = 'http://ttamna-api.hlabpartner.com';
export const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2pod2VydCIsImEiOiJja2g0M2s5Mm8wYXU4MnNvYWh0Nzc1ZXhyIn0.plvnGOmcjL1bMP2P7vuSTg';
export const MAPBOX_STYLE = 'mapbox://styles/kjhwert/ckio4u2e702zs17sgpsbw6n2i';

export const ACTIVE_BUTTON = '#007bf1';
export const ACTIVE_TEXT = '#007bf1';

export const INACTIVE_BUTTON = '#bfbfbf';
export const INACTIVE_TEXT = '#6f6f6f';

export const MINUTE = 60;
export const DURATION_TIME = 5;

export const getDistanceWithSpeedAndTime = (speed: number, time: number) => {
  /**
   * speed : km/h
   * time : second
   * */
  return Math.floor(speed * (time / 3600) * 1000) / 1000;
};

// export const getDistanceBetweenTwoGPS = (gps: IGps) => {
//   const lat1 = gps[0][0];
//   const lng1 = gps[0][1];
//   const lat2 = gps[1][0];
//   const lng2 = gps[1][1];
//
//   function deg2rad(deg: number) {
//     return deg * (Math.PI / 180);
//   }
//   const r = 6371; //지구의 반지름(km)
//   const dLat = deg2rad(lat2 - lat1);
//   const dLon = deg2rad(lng2 - lng1);
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   const d = r * c; // Distance in km
//   return Math.round(d * 1000) / 10000;
// };

export const getDistanceBetweenTwoGPS = (gps: IGps) => {
  const lat1 = gps[0][0];
  const lon1 = gps[0][1];
  const lat2 = gps[1][0];
  const lon2 = gps[1][1];
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const theta = lon1 - lon2;
    const radtheta = (Math.PI * theta) / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    return dist;
  }
};

export const secondsToHms = (seconds: number) => {
  const hour = Math.floor(seconds / 3600);
  const minute = Math.floor((seconds % 3600) / 60);
  const second = Math.floor((seconds % 3600) % 60);

  return {hour, minute, second};
};

export const showDateToAmPmHourMinute = (date: Date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const head = hour > 12 ? '오후' : '오전';
  const minuteDisplay = minute < 10 ? `0${minute}` : minute;

  return `${head} ${hour}:${minuteDisplay}`;
};

export const timeForToday = (value: string) => {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
};
