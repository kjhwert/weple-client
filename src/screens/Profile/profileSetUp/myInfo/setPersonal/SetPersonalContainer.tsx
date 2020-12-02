import React from 'react';
import SetPersonalPresenter from './SetPersonalPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <SetPersonalPresenter navigation={navigation} />;
};
