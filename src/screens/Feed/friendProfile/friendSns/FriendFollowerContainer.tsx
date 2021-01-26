import React, {useContext, useEffect, useState} from 'react';
import FriendFollowerPresenter from './FriendFollowerPresenter';
import Loading from '../../../../components/Loading';
import {userApi} from '../../../../module/api';
import AlertContext from '../../../../module/context/AlertContext';
import CheckAlert from '../../../../components/CheckAlert';
import {IUserFollow} from '../../../../module/type/user';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);

  const [pagination, setPagination] = useState({
    tab: '팔로워',
    page: 1,
    hasNextPage: false,
  });
  const [counts, setCounts] = useState({
    followingCount: 0,
    followerCount: 0,
  });
  const [followers, setFollowers] = useState<Array<IUserFollow>>([]);

  const switchingTabs = () => {
    const {tab} = pagination;
    if (tab === '팔로워') {
      setPagination({...pagination, tab: '팔로잉'});
      return getFollowings();
    }

    setPagination({...pagination, tab: '팔로워'});
    return getFollowers();
  };

  const getFollowers = async () => {
    const {statusCode, message, data} = await userApi.getUserFollower();
    if (statusCode !== 200) return serverAccessFail(message);
    setFollowers(data);
  };

  const getFollowings = async () => {
    const {statusCode, message, data} = await userApi.getUserFollowing();
    if (statusCode !== 200) return serverAccessFail(message);
    setFollowers(data);
  };

  const getFollowCount = async () => {
    const {statusCode, message, data} = await userApi.getFollowCount();
    if (statusCode !== 200) return serverAccessFail(message);
    setCounts(data);
  };

  const userFollow = async (userId: number) => {
    const {statusCode, message} = await userApi.follow(userId);
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

    const newState = followers.map((user) => {
      if (user.id === userId) {
        user.isUserFollowed = user.isUserFollowed === '1' ? '1' : '0';
      }

      return user;
    });
    setFollowers(newState);
    await getFollowCount();
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
    getFollowCount();
    getFollowers();
  }, []);

  return (
    <FriendFollowerPresenter
      navigation={navigation}
      pagination={pagination}
      counts={counts}
      followers={followers}
      switchingTabs={switchingTabs}
      userFollow={userFollow}
    />
  );
};
