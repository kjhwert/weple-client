import React from 'react';
import SubscriptionDetailPresenter from './SubscriptionDetailPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <SubscriptionDetailPresenter navigation={navigation} />;
};
