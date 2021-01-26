import React, {useContext, useEffect, useState} from 'react';
import FeedPresenter from './FeedPresenter';
import {userApi, utilitiesApi} from '../../module/api';
import Loading from '../../components/Loading';
import FeedContext from '../../module/context/FeedContext';
import AlertContext from '../../module/context/AlertContext';
import CheckAlert from '../../components/CheckAlert';
import UserContext from '../../module/context/UserContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);
  const {userFollow}: any = useContext(UserContext);
  const {getIndex, indexPaging}: any = useContext(FeedContext);
  const [newFollowers, setNewFollowers] = useState({
    newFollowCount: 0,
    followers: [],
  });
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

  const getFollowers = async () => {
    const {statusCode, message, data} = await userApi.getNewFollowers();
    if (statusCode !== 200) return serverAccessFail(message);
    setNewFollowers(data);
  };

  const getEvents = async () => {
    setEventLoading(true);
    const {data, statusCode, message} = await utilitiesApi.events({page: 1});
    if (statusCode !== 200) return serverAccessFail(message);
    const events = data.filter((event: any) => event.isOnGoing === true);
    setEvents(events);
    setEventLoading(false);
  };

  const serverAccessFail = (message: string) => {
    return setAlertVisible(
      <CheckAlert
        check={{
          type: 'warning',
          title: '데이터 조회에 실패했습니다.',
          description: message,
        }}
      />,
    );
  };

  useEffect(() => {
    getFollowers();
    getEvents();
    getIndex('홈');
  }, []);

  return eventLoading ? (
    <Loading />
  ) : (
    <FeedPresenter
      navigation={navigation}
      events={events}
      userFollowAndReload={userFollowAndReload}
      newFollowers={newFollowers}
    />
  );
};
