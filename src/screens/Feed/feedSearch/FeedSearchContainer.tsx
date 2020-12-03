import React from 'react';
import FeedSearchPresenter from './FeedSearchPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <FeedSearchPresenter navigation={navigation} />;
};
