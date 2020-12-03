import React from 'react';
import StartAlarmSetPresenter from './StartAlarmSetPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <StartAlarmSetPresenter navigation={navigation} />;
};
