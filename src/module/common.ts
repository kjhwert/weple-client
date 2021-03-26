import {IGps} from './type/common';

export const BASE_URL = 'http://ttamna-api.hlabpartner.com';
export const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2pod2VydCIsImEiOiJja2g0M2s5Mm8wYXU4MnNvYWh0Nzc1ZXhyIn0.plvnGOmcjL1bMP2P7vuSTg';
export const MAPBOX_STYLE = 'mapbox://styles/kjhwert/ckio4u2e702zs17sgpsbw6n2i';
export const MAPBOX_DEFAULT_STYLE = 'mapbox://styles/kjhwert/ckinuio2v2slu18pcvazoehxx';
export const GOOGLE_MAPS_GEOCODING_API_TOKEN = 'AIzaSyBBsD_9g607xaTvt7khh8P8wl4eEPdTl14';

export const ACTIVE_BUTTON = '#007bf1';
export const ACTIVE_TEXT = '#007bf1';

export const INACTIVE_BUTTON = '#bfbfbf';
export const INACTIVE_TEXT = '#6f6f6f';

export const MINUTE = 60;
export const DURATION_TIME = 2;

export const getDistanceWithSpeedAndTime = (speed: number, time: number) => {
  /**
   * speed : km/h
   * time : second
   * */
  return Math.floor(speed * (time / 3600) * 1000) / 1000;
};

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

export const secondsToTimeFormat = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  let hour = '00';
  let minute = '00';
  let second = '00';

  if (h !== 0 && h >= 10) hour = `${h}`;
  if (h !== 0 && h < 10) hour = `0${h}`;
  if (m !== 0 && m >= 10) minute = `${m}`;
  if (m !== 0 && m < 10) minute = `0${m}`;
  if (s !== 0 && s >= 10) second = `${s}`;
  if (s !== 0 && s < 10) second = `0${s}`;

  return [hour, minute, second].join(':');
};

export const showDateToAmPmHourMinute = (date: Date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const head = hour > 12 ? '오후' : '오전';
  const minuteDisplay = minute < 10 ? `0${minute}` : minute;

  return `${head} ${hour}:${minuteDisplay}`;
};

export const togetherDate = (value: string) => {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((timeValue.getTime() - today.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '모집마감';
  if (betweenTime < 60) {
    return `${betweenTime}분 후 마감`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `모집마감 ${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `모집마감 ${betweenTimeDay}일전`;
  }

  return `모집마감 ${Math.floor(betweenTimeDay / 365)}년전`;
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

export const timeDifferentFromNow = (value: Date) => {
  const today = new Date();
  const timeValue = new Date(value);

  return Math.floor((timeValue.getTime() - today.getTime()) / 1000 / 60);
};
