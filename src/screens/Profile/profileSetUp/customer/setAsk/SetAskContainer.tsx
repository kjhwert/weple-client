import React from 'react';
import SetAskPresenter from './SetAskPresenter';

const askList = [
  {
    id: 0,
    title: '문의 제목입니다.',
    date: '2020.12.20 10:10',
    isClick: true,
  },
  {
    id: 1,
    title: '문의 제목입니다.',
    date: '2020.12.20 10:10',
    isClick: true,
  },
  {
    id: 2,
    title: '문의 제목입니다.',
    date: '2020.12.20 10:10',
    isClick: true,
  },
  {
    id: 3,
    title: '문의 제목입니다.',
    date: '2020.12.20 10:10',
    isClick: false,
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <SetAskPresenter navigation={navigation} askList={askList} />;
};
