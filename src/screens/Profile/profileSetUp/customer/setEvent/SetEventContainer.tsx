import React, {useState, useEffect} from 'react';
import SetEventPresenter from './SetEventPresenter';
import {serviceApi} from '../../../../../module/api';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [eventList, setEventList] = useState([]);

  const [pagingInfo, setPagingInfo] = useState({
    page: 1,
    hasNextPage: true,
  });

  const getEventList = async (page) => {
    const {data, statusCode, paging} = await serviceApi.eventList(page);

    if (statusCode !== 200) {
    } else {
      setEventList(eventList.concat(data));
      setPagingInfo(paging);
    }
  };

  useEffect(() => {
    getEventList(1);
  }, []);

  return (
    <SetEventPresenter
      navigation={navigation}
      eventList={eventList}
      pagingInfo={pagingInfo}
      getEventList={getEventList}
    />
  );
};
