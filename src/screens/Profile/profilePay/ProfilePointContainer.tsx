import React from 'react';
import ProfilePointPresenter from './ProfilePointPresenter';

const pointData = [
  {
    id: 0,
    title: '포인트 적립내용',
    date: '2019-02-01 10:10:30',
    point: '100',
  },
  {
    id: 1,
    title: '포인트 적립내용',
    date: '2019-02-01 10:10:30',
    point: '800',
  },
  {
    id: 2,
    title: '포인트 적립내용',
    date: '2019-02-01 10:10:30',
    point: '200',
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <ProfilePointPresenter navigation={navigation} pointData={pointData} />
  );
};
