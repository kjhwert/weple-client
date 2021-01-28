import React, {useEffect, useState} from 'react';
import SetAskPresenter from './SetAskPresenter';
import {serviceApi} from '../../../../../module/api';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const [inquiryList, setInquiryList] = useState([
    {
      id: 0,
      requestTitle: '',
      requestDescription: '',
      requestDate: '',
      requestStatus: false,
      responseDescription: null,
      responseDate: null,
    },
  ]);

  const initInquiry = async () => {
    const {data, statusCode} = await serviceApi.getInquiry();
    if (statusCode !== 200) {
    } else {
      setInquiryList(data);
    }
  };

  useEffect(() => {
    initInquiry();
  }, []);

  useEffect(() => {
    if (route.params?.refresh) initInquiry();
  }, [route.params?.refresh]);

  return <SetAskPresenter navigation={navigation} inquiryList={inquiryList} />;
};
