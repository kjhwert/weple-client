import React from 'react';
import AlarmSetPresenter from './AlarmSetPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <AlarmSetPresenter navigation={navigation} />;
};
