import React from 'react';
import PersonalDataPresenter from './PersonalDataPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <PersonalDataPresenter navigation={navigation} />;
};
