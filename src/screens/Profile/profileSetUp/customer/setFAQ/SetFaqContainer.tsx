import React, {useEffect, useState} from 'react';
import {serviceApi} from '../../../../../module/api';
import SetFaqPresenter from './SetFaqPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [faqList, setFaqList] = useState([
    {
      id: 1,
      request: '',
      response: '',
    },
  ]);

  const getfaq = async () => {
    const {data, statusCode} = await serviceApi.faq();

    if (statusCode !== 200) {
    } else {
      setFaqList(data);
    }
  };

  useEffect(() => {
    getfaq();
  }, []);

  return <SetFaqPresenter navigation={navigation} faqList={faqList} />;
};
