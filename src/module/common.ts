import {IGps} from './type/common';

export const MINUTE = 60;

export const getDistanceBetweenTwoGPS = (gps: IGps) => {
  const lat1 = gps[0][0];
  const lng1 = gps[0][1];
  const lat2 = gps[1][0];
  const lng2 = gps[1][1];

  function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }
  const r = 6371; //지구의 반지름(km)
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = r * c; // Distance in km
  return Math.round(d * 1000) / 10000;
};

export const secondsToHms = (seconds: number) => {
  const hour = Math.floor(seconds / 3600);
  const minute = Math.floor((seconds % 3600) / 60);
  const second = Math.floor((seconds % 3600) % 60);

  return {hour, minute, second};
};
