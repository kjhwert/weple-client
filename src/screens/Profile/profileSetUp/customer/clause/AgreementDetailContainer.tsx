import React from 'react';
import AgreementDetailPresenter from './AgreementDetailPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <AgreementDetailPresenter navigation={navigation} />;
};
