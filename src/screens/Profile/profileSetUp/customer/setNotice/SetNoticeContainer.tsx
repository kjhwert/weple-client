import React from 'react';
import SetNoticePresenter from './SetNoticePresenter';

const noticeData = [
  {
    id: 0,
    title: '공지사항입니다.',
    date: '2019.02.01 10:10',
  },
  {
    id: 1,
    title: '공지사항입니다. 공지사항입니다.',
    date: '2019.02.01 10:10',
    isNew: true,
  },
  {
    id: 2,
    title: '공지사항입니다. 공지사항입니다. 공지사항입니다.',
    date: '2019.02.01 10:10',
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <SetNoticePresenter navigation={navigation} noticeData={noticeData} />;
};
