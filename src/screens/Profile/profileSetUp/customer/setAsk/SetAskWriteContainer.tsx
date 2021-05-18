import React, {useState, useEffect, useContext} from 'react';
import SetAskWritePresenter from './SetAskWritePresenter';
import {serviceApi} from '../../../../../module/api';
import AlertContext from '../../../../../module/context/AlertContext';
import CheckAlert from '../../../../../components/CheckAlert';

interface IProps {
  navigation: any;
}
const typeData = [
  {label: '회원정보', value: '01'},
  {label: '환불/멤버십', value: '02'},
  {label: '이용문의', value: '03'},
  {label: '기타', value: '04'},
];

export default ({navigation}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);
  const [isActive, setIsActive] = useState(false);
  const [askData, setAskData] = useState({
    requestTitle: '',
    requestDescription: '',
    requestType: '01',
    requestLabel: '회원정보',
  });

  const onChangeTitle = (e: string) => {
    setAskData({...askData, requestTitle: e});
  };

  const onChangeDescription = (e: string) => {
    setAskData({...askData, requestDescription: e});
  };

  const onChangeAskData = (e) => {
    const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name;
    const value = e.nativeEvent.text;
    setAskData({
      ...askData,
      [name]: value,
    });
  };

  const onCheckType = (type: string) => {
    const {label}: any = typeData.find(({value}) => value === type);
    setAskData({
      ...askData,
      requestLabel: label,
      requestType: type,
    });
  };

  const askDataRegister = async () => {
    const {requestTitle, requestDescription, requestLabel} = askData;
    const {message} = await serviceApi.setInquiry({requestTitle, requestDescription, requestType: requestLabel});
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
      onChangeTitle={onChangeTitle}
      onChangeDescription={onChangeDescription}
    />
  );
};
