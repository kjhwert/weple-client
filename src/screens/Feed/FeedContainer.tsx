import React, {useContext, useEffect, useState} from 'react';
import FeedPresenter from './FeedPresenter';
import {feedApi, utilitiesApi} from '../../module/api';
import Loading from '../../components/Loading';
import {IFeedIndex} from '../../module/type/api';
import {IFeed} from '../../module/type/feed';
import FeedContext from '../../module/context/FeedContext';
import AlertContext from '../../module/context/AlertContext';
import CheckAlert from '../../components/CheckAlert';
import UserContext from '../../module/context/UserContext';

const newFollower = [
  {
    id: 0,
    name: 'GilDong',
    followerImage: require('../../assets/follower_1.jpeg'),
  },
  {
    id: 1,
    name: 'Benjamin',
    followerImage: require('../../assets/follower_2.png'),
  },
  {
    id: 2,
    name: 'Benjamin',
    followerImage: require('../../assets/follower_3.jpeg'),
  },
  {
    id: 3,
    name: 'Benjamin',
    followerImage: require('../../assets/follower_4.png'),
  },
  {
    id: 4,
    name: 'GilDong',
    followerImage: require('../../assets/follower_1.jpeg'),
  },
  {
    id: 5,
    name: 'Benjamin',
    followerImage: require('../../assets/follower_2.png'),
  },
  {
    id: 6,
    name: 'Benjamin',
    followerImage: require('../../assets/follower_3.jpeg'),
  },
  {
    id: 7,
    name: 'Benjamin',
    followerImage: require('../../assets/follower_4.png'),
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);
  const {userFollow}: any = useContext(UserContext);
  const {getIndex, indexPaging}: any = useContext(FeedContext);
  const [eventLoading, setEventLoading] = useState(false);
  const [events, setEvents] = useState([]);

  const userFollowAndReload = async (userId: number) => {
    const {statusCode, message} = await userFollow(userId);
    if (statusCode !== 201) {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '팔로우에 실패했습니다.',
            description: message,
          }}
        />,
      );
    }

    await getIndex(indexPaging.tab);
  };

  const getEvents = async () => {
    setEventLoading(true);
    const {data, statusCode, message} = await utilitiesApi.events({page: 1});
    if (statusCode !== 200) {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '데이터를 가져오는데 실패했습니다.',
            description: message,
          }}
        />,
      );
    }
    const events = data.filter((event: any) => event.isOnGoing === true);
    setEvents(events);
    setEventLoading(false);
  };

  useEffect(() => {
    getEvents();
    getIndex('홈');
  }, []);

  return eventLoading ? (
    <Loading />
  ) : (
    <FeedPresenter
      navigation={navigation}
      newFollower={newFollower}
      events={events}
      userFollowAndReload={userFollowAndReload}
    />
  );
};
