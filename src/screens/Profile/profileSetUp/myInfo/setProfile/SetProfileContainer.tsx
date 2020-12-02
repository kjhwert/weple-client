import React from 'react';
import SetProfilePresenter from './SetProfilePresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <SetProfilePresenter navigation={navigation} />;
};
