import React, {useState, useEffect} from 'react';
import TogetherMyDetailPresenter from './TogetherMyDetailPresenter';
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
      description: '',
      togetherPrice: 0,
      togetherPlace: '',
      togetherDate: '',
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

  const getListDetail = async () => {
    const id = route.params?.id;
    const {data, statusCode} = await togetherApi.userOpenDetail(id);
    if (statusCode !== 200) {
    } else {
      setListDetail(data);
    }
  };

  useEffect(() => {
    getListDetail();
  }, []);

  useEffect(() => {
    if (route.params?.refresh) getListDetail();
  }, [route.params?.refresh]);

  return <TogetherMyDetailPresenter navigation={navigation} listDetail={listDetail} />;
};
