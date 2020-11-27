import React from 'react';
import SignUpEmailPresenter from './SignUpEmailPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <SignUpEmailPresenter navigation={navigation} />;
};
