import React from 'react';
import TogetherPostPresenter from './TogetherPostPresenter';

const content = [
  {
    id: 0,
    title: '모임하기 설명',
    content: '이 모임에 대한 소개입니다.',
  },
  {
    id: 1,
    title: '이런 분들께 추천합니다.',
    content: '이런 분들께 추천하는 내용입니다. 이런 분들께 추천하는 내용입니다.',
  },
  {
    id: 2,
    title: '공지사항',
    content: '공지사항 내용입니다.',
  },
];

export default ({navigation}) => {
  return <TogetherPostPresenter navigation={navigation} content={content} />;
};
