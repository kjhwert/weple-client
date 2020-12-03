import React from 'react';
import FeedSharePresenter from './FeedSharePresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <FeedSharePresenter navigation={navigation} />;
};
