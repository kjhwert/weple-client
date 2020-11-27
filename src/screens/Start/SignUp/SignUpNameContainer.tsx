import React from 'react';
import SignUpNamePresenter from './SignUpNamePresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <SignUpNamePresenter navigation={navigation} />;
};
