import React from 'react';
import ActiveDetailPresenter from './ActiveDetailPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <ActiveDetailPresenter navigation={navigation} />;
};
