import React from 'react';
import TogetherPostPresenter from './TogetherPostPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <TogetherPostPresenter navigation={navigation} />;
};
