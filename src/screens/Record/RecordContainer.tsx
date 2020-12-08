import React from 'react';
import RecordPresenter from './RecordPresenter';

interface IProps {
  navigation: any;
}
export default ({navigation}: IProps) => {
  return <RecordPresenter navigation={navigation} />;
};
