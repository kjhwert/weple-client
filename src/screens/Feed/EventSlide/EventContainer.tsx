import React, {useState} from 'react';
import EventPresenter from './EventPresenter';

export default ({navigation}) => {
  const [eventData, setEventData] = useState([
    {
      id: 0,
      image: require('../../../assets/event_1.jpg'),
      title: '이벤트를 진행합니다.',
      content: '이벤트에 대한 설명입니다. 이벤트에대한 설명입니다.',
      date: '2020-11-19 ~ 2020-12-30',
      isOpen: true,
    },
    {
      id: 1,
      image: require('../../../assets/event_1.jpg'),
      title: '이벤트가 종료되었습니다.',
      content: '이벤트에 대한 설명입니다. 이벤트에대한 설명입니다.',
      date: '2020-11-19 ~ 2020-12-30',
      isOpen: false,
    },
    {
      id: 2,
      image: require('../../../assets/event_1.jpg'),
      title: '이벤트가 종료되었습니다.',
      content: '이벤트에 대한 설명입니다. 이벤트에대한 설명입니다.',
      date: '2020-11-19 ~ 2020-12-30',
      isOpen: false,
    },
  ]);
  return <EventPresenter navigation={navigation} eventData={eventData} />;
};
