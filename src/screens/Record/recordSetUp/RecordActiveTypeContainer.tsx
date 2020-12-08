import React from 'react';
import RecordActiveTypePresenter from './RecordActiveTypePresenter';

const activities = [
  {
    id: 1,
    name: '운동',
    categoryActivity: [
      {
        id: 1,
        name: '싸이클링',
      },
      {
        id: 2,
        name: '달리기',
      },
      {
        id: 3,
        name: '걷기',
      },
      {
        id: 4,
        name: '등산',
      },
      {
        id: 5,
        name: '인라인 스케이트',
      },
      {
        id: 6,
        name: '스케이트보드',
      },
      {
        id: 7,
        name: '수영',
      },
      {
        id: 8,
        name: '서핑보드',
      },
      {
        id: 9,
        name: '스노우보드',
      },
      {
        id: 10,
        name: '스키',
      },
    ],
  },
  {
    id: 2,
    name: '여행',
    categoryActivity: [
      {
        id: 11,
        name: '드라이빙',
      },
      {
        id: 12,
        name: '바이크',
      },
      {
        id: 13,
        name: '여행',
      },
      {
        id: 14,
        name: '기차여행',
      },
    ],
  },
  {
    id: 3,
    name: '취미',
    categoryActivity: [
      {
        id: 15,
        name: 'RC카',
      },
      {
        id: 16,
        name: '드론',
      },
      {
        id: 17,
        name: '낚시',
      },
    ],
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <RecordActiveTypePresenter
      navigation={navigation}
      activities={activities}
    />
  );
};
