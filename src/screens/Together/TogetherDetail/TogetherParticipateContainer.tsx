import React from 'react';
import ParticipatePresenter from './TogetherParticipatePresenter';

const content = [
  {
    id: 0,
    title: '함께하기 설명',
    content:
      '함께하기 설명입니다. 함께하기 설명입니다. 함께하기 설명입니다. 함께하기 설명입니다.',
  },
  {
    id: 1,
    title: '이런 분들께 추천합니다.',
    content:
      '이런 분들께 추천하는 내용입니다. 이런 분들께 추천하는 내용입니다. 이런 분들께 추천하는 내용입니다. ',
  },
  {
    id: 2,
    title: '이런 분들께 추천합니다.',
    content:
      '이런 분들께 추천하는 내용입니다. 이런 분들께 추천하는 내용입니다. 이런 분들께 추천하는 내용입니다. ',
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <ParticipatePresenter navigation={navigation} content={content} />;
};
