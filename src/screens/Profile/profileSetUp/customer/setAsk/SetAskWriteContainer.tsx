import React, {useState, useEffect, useContext} from 'react';
import SetAskWritePresenter from './SetAskWritePresenter';
import {serviceApi} from '../../../../../module/api';
import AlertContext from '../../../../../module/context/AlertContext';
import CheckAlert from '../../../../../components/CheckAlert';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);

  const typeData = [
    {label: '회원정보', value: '01'},
    {label: '환불/멤버십', value: '02'},
    {label: '이용문의', value: '03'},
    {label: '기타', value: '04'},
  ];

  const [isActive, setIsActive] = useState(false);
  const [askData, setAskData] = useState({
    requestTitle: '',
    requestDescription: '',
    requestType: '01',
  });

  const onChangeAskData = (e) => {
    const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name;
    const value = e.nativeEvent.text;
    setAskData({
      ...askData,
      [name]: value,
    });
  };

  const onCheckType = (type) => {
    setAskData({
      ...askData,
      requestType: type,
    });
  };

  const askDataRegister = async () => {
    const askDataRequest = {
      requestTitle: askData.requestTitle,
      requestDescription: askData.requestDescription,
      requestType: askData.requestType,
    };

    const {message} = await serviceApi.setInquiry(askDataRequest);
    return setAlertVisible(
      <CheckAlert
        check={{
          type: 'check',
          title: message,
          description: '',
        }}
        checked={() => {
          navigation.navigate('setAsk', {refresh: true});
        }}
      />,
    );
  };

  useEffect(() => {
    setIsActive(askData.requestTitle.trim().length > 0 && askData.requestDescription.trim().length > 0);
  }, [askData]);

  return (
    <SetAskWritePresenter
      navigation={navigation}
      askData={askData}
      onChangeAskData={onChangeAskData}
      onCheckType={onCheckType}
      askDataRegister={askDataRegister}
      isActive={isActive}
      typeData={typeData}
    />
  );
};
