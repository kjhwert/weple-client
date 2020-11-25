import React from 'react';
import TogetherSearchPresenter from './TogetherSearchPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <TogetherSearchPresenter navigation={navigation} />;
};
