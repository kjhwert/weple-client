import React from 'react';
import SetNoticeDetailPresenter from './SetNoticeDetailPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <SetNoticeDetailPresenter navigation={navigation} />;
};
