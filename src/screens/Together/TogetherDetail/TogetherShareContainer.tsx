import React from 'react';
import TogetherSharePresenter from './TogetherSharePresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <TogetherSharePresenter navigation={navigation} />;
};
