import React from 'react';
import ProfileSettingPresenter from './ProfileSettingPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <ProfileSettingPresenter navigation={navigation} />;
};
