import React from 'react';
import EventDetailPresenter from './FeedEventDetailPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <EventDetailPresenter navigation={navigation} />;
};
