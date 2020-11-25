import React from 'react';
import StartPresenter from './StartPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <StartPresenter navigation={navigation} />;
};
