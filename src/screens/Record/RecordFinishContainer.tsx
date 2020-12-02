import React from 'react';
import RecordFinishPresenter from './RecordFinishPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <RecordFinishPresenter navigation={navigation} />;
};
