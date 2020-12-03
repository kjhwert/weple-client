import React from 'react';
import ServiceDetailPresenter from './ServiceDetailPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <ServiceDetailPresenter navigation={navigation} />;
};
