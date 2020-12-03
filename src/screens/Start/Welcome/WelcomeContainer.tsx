import React from 'react';
import WelcomePresenter from './WelcomePresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <WelcomePresenter navigation={navigation} />;
};
