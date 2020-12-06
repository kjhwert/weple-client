import React from 'react';
import AboutAppPresenter from './AboutAppPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <AboutAppPresenter navigation={navigation} />;
};
