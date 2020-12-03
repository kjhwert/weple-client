import React from 'react';
import CreateAccountPresenter from './CreateAccountPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <CreateAccountPresenter navigation={navigation} />;
};
