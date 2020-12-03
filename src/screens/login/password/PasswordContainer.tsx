import React from 'react';
import PasswordPresenter from './PasswordPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <PasswordPresenter navigation={navigation} />;
};
