import React from 'react';
import SetFaqPresenter from './SetFaqPresenter';

const qnaData = [
  {
    id: 0,
    title: 'Q. 자주 묻는 질문입니다.',
    answer: 'A. 자주 묻는 질문에 대한 답변입니다.',
  },
  {
    id: 1,
    title: 'Q. 자주 묻는 질문입니다.',
    answer: 'A. 자주 묻는 질문에 대한 답변입니다.',
  },
  {
    id: 2,
    title: 'Q. 자주 묻는 질문입니다.',
    answer:
      'A. 자주 묻는 질문에 대한 답변입니다. 자주 묻는 질문에 대한 답변입니다. 자주 묻는 질문에 대한 답변입니다.',
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <SetFaqPresenter navigation={navigation} qnaData={qnaData} />;
};
