import React from 'react';
import SetAnswerDetailPresenter from './SetAnswerDetailPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <SetAnswerDetailPresenter navigation={navigation} />;
};
