import React from 'react';
import RecordSetPresenter from './RecordSetPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <RecordSetPresenter navigation={navigation} />;
};
