import React from 'react';
import SignInPresenter from './SignInPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <SignInPresenter navigation={navigation} />;
};
