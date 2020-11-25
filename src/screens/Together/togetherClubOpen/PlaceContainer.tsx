import React from 'react';
import PlacePresenter from './PlacePresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <PlacePresenter navigation={navigation} />;
};
