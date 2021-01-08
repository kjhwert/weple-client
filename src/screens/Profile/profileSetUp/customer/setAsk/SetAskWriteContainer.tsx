import React, {useState} from 'react';
import SetAskWritePresenter from './SetAskWritePresenter';
import {serviceApi} from '../../../../../module/api';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [askData, setAskData] = useState({
    requestTitle: '',
    requestDescription: '',
  });

  const onChangeAskData = (e) => {
    const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name;
    const value = e.nativeEvent.text;
    setAskData({
      ...askData,
      [name]: value,
    });
  };

  const askDataRegister = async () => {
    const askDataRequest = {
      requestTitle: askData.requestTitle,
      requestDescription: askData.requestDescription,
    };

    const {message} = await serviceApi.setInquiry(askDataRequest);
    console.log('문의 등록: ', message);
  };

  return (
    <SetAskWritePresenter navigation={navigation} onChangeAskData={onChangeAskData} askDataRegister={askDataRegister} />
  );
};
