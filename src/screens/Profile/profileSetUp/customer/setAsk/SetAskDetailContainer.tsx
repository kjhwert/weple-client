import React, {useState, useEffect} from 'react';
import SetAskDetailPresenter from './SetAskDetailPresenter';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const [inquryAskDetail, setInquryAskDetail] = useState({
    id: 0,
    requestTitle: '',
    requestDescription: '',
    requestDate: '',
    requestStatus: false,
    responseDescription: null,
    responseDate: null,
  });

  const initInquryAskDetail = () => {
    const data = route.params?.data;
    setInquryAskDetail(data);
  };

  useEffect(() => {
    initInquryAskDetail();
  }, []);

  return <SetAskDetailPresenter navigation={navigation} inquryAskDetail={inquryAskDetail} />;
};
