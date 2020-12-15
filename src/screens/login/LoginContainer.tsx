import React from 'react';
import LoginPresenter from './LoginPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <LoginPresenter navigation={navigation} />;
};
