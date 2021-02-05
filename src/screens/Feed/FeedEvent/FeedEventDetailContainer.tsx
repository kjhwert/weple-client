import React, {useContext, useEffect, useState} from 'react';
import EventDetailPresenter from './FeedEventDetailPresenter';
import {serviceApi} from '../../../module/api';
import AlertContext from '../../../module/context/AlertContext';
import {IEventTypes} from '../../../module/type/event';
import Loading from '../../../components/Loading';

interface IProps {
  navigation: any;
  route: {
    params: {
      id: number;
    };
  };
}

export default ({navigation, route}: IProps) => {
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const [event, setEvent] = useState<IEventTypes | null>(null);
  const getEvent = async () => {
    const {statusCode, message, data} = await serviceApi.event(route.params.id);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    setEvent(data);
  };

  useEffect(() => {
    getEvent();
  }, []);

  return !event ? <Loading /> : <EventDetailPresenter navigation={navigation} event={event} />;
};
