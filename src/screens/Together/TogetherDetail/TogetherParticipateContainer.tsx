import React, {useState, useEffect} from 'react';
import ParticipatePresenter from './TogetherParticipatePresenter';
import {togetherApi} from '../../../module/api';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const [listDetail, setListDetail] = useState({
    userCount: 0,
    together: {
      id: 0,
      title: '',
      Place: '',
      price: '',
      limitDate: '',
      description: '',
      recommend: '',
      notice: '',
      address: '',
      thumbnail: '',
      commentNickName: null,
      commentImage: null,
      commentDescription: null,
    },
    commentCount: 0,
  });

  const getTogethertDetail = async () => {
    const id = route.params?.id;
    const {data, statusCode} = await togetherApi.userOpenDetail(id);
    if (statusCode !== 200) {
    } else {
      setListDetail(data);
    }
  };

  useEffect(() => {
    getTogethertDetail();
  }, []);

  return <ParticipatePresenter navigation={navigation} listDetail={listDetail} />;
};
