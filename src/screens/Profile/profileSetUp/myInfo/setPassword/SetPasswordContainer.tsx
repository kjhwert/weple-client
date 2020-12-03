import React from 'react';
import SetPasswordPresenter from './SetPasswordPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <SetPasswordPresenter navigation={navigation} />;
};
