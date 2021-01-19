import React, {useState, useEffect} from 'react';
import TogetherModifyPresenter from './TogetherModifyPresenter';
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
      commentNickName: null,
      commentImage: null,
      commentDescription: null,
    },
    commentCount: 0,
  });

  const getListDetail = async () => {
    const id = route.params?.id;
    const {data, statusCode} = await togetherApi.userOpenDetail(id);
    // console.log('togetListDetail:', data);

    if (statusCode !== 200) {
    } else {
      setListDetail(data);
    }
  };

  useEffect(() => {
    getListDetail();
  }, []);

  return <TogetherModifyPresenter navigation={navigation} listDetail={listDetail} />;
};
