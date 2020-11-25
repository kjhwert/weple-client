import React from 'react';
import AlarmPresenter from './AlarmPresenter';

const alarmData = [
  {
    id: 0,
    title: '벤자민님이 게시글을 올렸습니다.',
    date: '2019.02.01 10:10',
    isNew: true,
  },
  {
    id: 1,
    title: '벤님이 게시글을 올렸습니다.',
    date: '2019.02.01 10:10',
    isNew: true,
  },
  {
    id: 2,
    title: '자민님이 게시글을 올렸습니다.',
    date: '2019.02.01 10:10',
    isNew: false,
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <AlarmPresenter navigation={navigation} alarmData={alarmData} />;
};
