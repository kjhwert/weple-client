import React from 'react';
import ProfileActiveStatisticPresenter from './ProfileActiveStatisticPresenter';

const activeStatistic = [
  {
    id: 0,
    name: '싸이클링',
    km: '14,892',
    min: '1,825',
    cal: '9,200',
  },
  {
    id: 1,
    name: '바이크',
    km: '14,892',
    min: '1,825',
    cal: '0',
  },
  {
    id: 2,
    name: '드라이빙',
    km: '14,892',
    min: '1,825',
    cal: '0',
  },
  {
    id: 3,
    name: '등산',
    km: '14,892',
    min: '1,825',
    cal: '9,200',
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <ProfileActiveStatisticPresenter
      navigation={navigation}
      activeStatistic={activeStatistic}
    />
  );
};
