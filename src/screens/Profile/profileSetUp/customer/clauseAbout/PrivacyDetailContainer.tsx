import React from 'react';
import PrivacyDetailPresenter from './PrivacyDetailPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <PrivacyDetailPresenter navigation={navigation} />;
};
