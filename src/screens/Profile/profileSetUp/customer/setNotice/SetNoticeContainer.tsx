import React, {useEffect, useState} from 'react';
import SetNoticePresenter from './SetNoticePresenter';
import {serviceApi} from '../../../../../module/api';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [noticeList, setNoticeList] = useState([]);

  const [pagingInfo, setPagingInfo] = useState({
    page: 1,
    hasNextPage: true,
  });

  const getNoticeList = async (page) => {
    const {data, statusCode, paging} = await serviceApi.noticeList(page);

    if (statusCode !== 200) {
    } else {
      setNoticeList(noticeList.concat(data));
      setPagingInfo(paging);
    }
  };

  useEffect(() => {
    getNoticeList(1);
  }, []);

  return (
    <SetNoticePresenter
      navigation={navigation}
      noticeList={noticeList}
      pagingInfo={pagingInfo}
      getNoticeList={getNoticeList}
    />
  );
};
