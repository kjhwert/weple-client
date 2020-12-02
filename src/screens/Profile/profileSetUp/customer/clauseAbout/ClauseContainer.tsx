import React from 'react';
import ClausePresenter from './ClausePresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <ClausePresenter navigation={navigation} />;
};
