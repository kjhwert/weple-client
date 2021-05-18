import React, {useContext, useEffect, useState} from 'react';
import SetAskPresenter from './SetAskPresenter';
import {serviceApi} from '../../../../../module/api';
import AlertContext from '../../../../../module/context/AlertContext';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const [inquiryList, setInquiryList] = useState([]);

  const initInquiry = async () => {
    const {data, statusCode, message} = await serviceApi.getInquiry();
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setInquiryList(data);
  };

  useEffect(() => {
    initInquiry();
  }, []);

  useEffect(() => {
    if (route.params?.refresh) initInquiry();
  }, [route.params?.refresh]);

  return <SetAskPresenter navigation={navigation} inquiryList={inquiryList} />;
};
