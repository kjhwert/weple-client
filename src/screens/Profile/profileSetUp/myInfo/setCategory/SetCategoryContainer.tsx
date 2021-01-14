import React from 'react';
import SetCategoryPresenter from './SetCategoryPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <SetCategoryPresenter navigation={navigation} />;
};
