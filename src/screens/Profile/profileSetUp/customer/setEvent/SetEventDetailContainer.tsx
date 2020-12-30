import React, {useState, useEffect} from 'react';
import SetEventDetailPresenter from './SetEventDetailPresenter';
import {serviceApi} from '../../../../../module/api';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const [eventDetail, setEventDetail] = useState({
    id: 1,
    title: '',
    description: '',
    createdAt: '',
    img: '',
    eventStatus: true,
  });

  const getEventDetail = async () => {
    const id = route.params.id;
    const {data, statusCode} = await serviceApi.event(id);

    if (statusCode !== 200) {
      console.log('eventDetail error');
    } else {
      setEventDetail(data);
    }
  };
  console.log('eventDetail:', eventDetail);

  useEffect(() => {
    getEventDetail();
  }, []);

  return <SetEventDetailPresenter navigation={navigation} eventDetail={eventDetail} />;
};
