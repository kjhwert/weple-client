import React, {useState, useEffect} from 'react';
import SetAnswerDetailPresenter from './SetAnswerDetailPresenter';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const [inquryAnswerDetail, setInquryAnswerDetail] = useState({
    id: 0,
    requestTitle: '',
    requestDescription: '',
    requestDate: '',
    requestStatus: false,
    responseDescription: null,
    responseDate: null,
  });

  const initInquryAnswerDetail = () => {
    const data = route.params.data;
    setInquryAnswerDetail(data);
  };

  useEffect(() => {
    initInquryAnswerDetail();
  }, []);

  return <SetAnswerDetailPresenter navigation={navigation} inquryAnswerDetail={inquryAnswerDetail} />;
};
