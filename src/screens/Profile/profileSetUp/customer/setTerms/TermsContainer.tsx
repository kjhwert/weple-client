import React from 'react';
import TermsPresenter from './TermsPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <TermsPresenter navigation={navigation} />;
};
