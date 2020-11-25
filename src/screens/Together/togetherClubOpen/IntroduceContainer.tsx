import React from 'react';
import IntroducePresenter from './IntroducePresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <IntroducePresenter navigation={navigation} />;
};
