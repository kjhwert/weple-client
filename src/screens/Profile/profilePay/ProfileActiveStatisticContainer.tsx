import React from 'react';
import ProfileActiveStatisticPresenter from './ProfileActiveStatisticPresenter';
import UserActivityStatisticsComponent from '../../../components/UserActivityStatisticsComponent';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <UserActivityStatisticsComponent />;
};
