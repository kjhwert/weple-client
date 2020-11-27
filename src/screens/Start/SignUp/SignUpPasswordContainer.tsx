import React from 'react';
import SignUpPasswordPresenter from './SignUpPasswordPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <SignUpPasswordPresenter navigation={navigation} />;
};
