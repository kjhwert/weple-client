import React, {createContext, ReactNode, useContext, useState} from 'react';
import {userApi} from '../api';
import AlertContext from './AlertContext';
import {IProfileUser, IUserFollow} from '../type/user';

const FollowContext = createContext({});

interface IProps {
  children: ReactNode;
}

export const FollowContextProvider = ({children}: IProps) => {
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const [counts, setCounts] = useState({
    followingCount: 0,
    followerCount: 0,
  });
  const [pagination, setPagination] = useState({
    tab: '팔로워',
    page: 1,
    hasNextPage: false,
  });
  const [followers, setFollowers] = useState<Array<IUserFollow>>([]);
  const [user, setUser] = useState<IProfileUser>({});
  const [loading, setLoading] = useState(false);

  const switchingTabs = () => {
    const {tab} = pagination;
    if (tab === '팔로워') {
      setPagination({...pagination, tab: '팔로잉'});
      return getFollowings(user.id);
    }

    setPagination({...pagination, tab: '팔로워'});
    return getFollowers(user.id);
  };

  const getUserAndFollow = async (userId: number) => {
    setLoading(true);
    const {statusCode, message, data} = await userApi.getProfile(userId);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setUser(data.user);
    await getFollowCount(userId);
    await getFollowers(userId);
    setLoading(false);
  };

  const getFollowers = async (userId: number) => {
    const {statusCode, message, data} = await userApi.getUserFollower(userId);
    if (statusCode !== 200) return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    setFollowers(data);
  };

  const getFollowings = async (userId: number) => {
    const {statusCode, message, data} = await userApi.getUserFollowing(userId);
    if (statusCode !== 200) return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    setFollowers(data);
  };

  const getFollowCount = async (userId: number) => {
    const {statusCode, message, data} = await userApi.getFollowCount(userId);
    if (statusCode !== 200) return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    setCounts(data);
  };

  const follow = async (userId: number) => {
    const {statusCode, message} = await userApi.follow(userId);
    if (statusCode !== 201) {
      return setWarningAlertVisible('팔로우에 실패했습니다.', message);
    }

    const newState = followers.map((user) => {
      if (user.id === userId) {
        user.isUserFollowed = user.isUserFollowed === '1' ? '1' : '0';
      }

      return user;
    });
    setFollowers(newState);
    await getFollowCount(userId);
  };

  return (
    <FollowContext.Provider
      value={{user, counts, pagination, followers, loading, getUserAndFollow, switchingTabs, follow}}>
      {children}
    </FollowContext.Provider>
  );
};

export default FollowContext;
