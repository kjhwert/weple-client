import React, {useEffect, useState} from 'react';
import SetNoticeDetailPresenter from './SetNoticeDetailPresenter';
import {serviceApi} from '../../../../../module/api';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const [noticeDetail, setNoticeDetail] = useState({
    createdAt: '',
    id: 1,
    title: '',
    description: '',
  });

  const getNoticeDetail = async () => {
    const id = route.params?.id;
    const {data, statusCode} = await serviceApi.notice(id);

    if (statusCode !== 200) {
    } else {
      setNoticeDetail(data);
    }
  };

  useEffect(() => {
    getNoticeDetail();
  }, []);
  return <SetNoticeDetailPresenter navigation={navigation} noticeDetail={noticeDetail} />;
};
