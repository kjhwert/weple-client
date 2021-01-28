import React, {useEffect, useState} from 'react';
import TermsPresenter from './TermsPresenter';
import {serviceApi} from '../../../../../module/api';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [termsList, setTermsList] = useState([
    {
      id: 1,
      title: '',
      description: '',
    },
  ]);

  const getTerms = async () => {
    const {data, statusCode} = await serviceApi.terms();

    if (statusCode !== 200) {
    } else {
      setTermsList(data);
    }
  };

  useEffect(() => {
    getTerms();
  }, []);
  return <TermsPresenter navigation={navigation} termsList={termsList} />;
};
