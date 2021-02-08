import React, {createContext, ReactNode, useContext, useState} from 'react';
import {feedApi, togetherApi, userApi} from '../api';
import AlertContext from './AlertContext';
import {IProfileUserInfo} from '../type/user';
import UserContext from './UserContext';
import {IFeed} from '../type/feed';

const ProfileContext = createContext({});

interface IProps {
  children: ReactNode;
}

export const ProfileContextProvider = ({children}: IProps) => {
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const {userFollow}: any = useContext(UserContext);
  const [user, setUser] = useState<IProfileUserInfo | null>(null);
  const [feeds, setFeeds] = useState([]);
  const [togethers, setTogethers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    sort: 'feed',
    order: 'createdAt',
  });

  const userFollowAndReload = async (userId: number) => {
    const {statusCode, message} = await userFollow(userId);
    if (statusCode !== 201) {
      return setWarningAlertVisible('팔로잉에 실패했습니다.', message);
    }
    const newIndex = feeds.map((feed) => {
      if (feed.userId === userId) {
        feed.isUserFollowed = !feed.isUserFollowed;
      }

      return feed;
    });
    setFeeds(newIndex);
  };

  const feedLiked = async (feed: IFeed) => {
    const {id, isUserLiked} = feed;
    if (isUserLiked) {
      return await feedApi.feedDisLike(id);
    }
    return await feedApi.feedLike(id);
  };

  const changeLikeCount = async (feedId: number) => {
    const feed = feeds.find((feed) => feed.id === feedId);
    if (!feed) {
      return;
    }

    const {statusCode, message} = await feedLiked(feed);
    if (statusCode !== 201) {
      return setWarningAlertVisible('좋아요에 실패했습니다.', message);
    }

    const newIndex = feeds.map((feedItem) => {
      if (feedId === feedItem.id) {
        feedItem.isUserLiked = !feed.isUserLiked;
        feedItem.likeCount = feed.isUserLiked ? feedItem.likeCount + 1 : feedItem.likeCount - 1;
      }

      return feedItem;
    });
    setFeeds(newIndex);
  };

  const switchOrder = async (order: 'createdAt' | 'likeCount') => {
    await getFeeds(user.user.id, order);
    setPagination({...pagination, order});
  };

  const getUser = async (userId: number) => {
    const {data, statusCode, message} = await userApi.getProfile(userId);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setUser(data);
  };

  const getFeeds = async (userId: number, order: 'createdAt' | 'likeCount') => {
    const {statusCode, message, data} = await feedApi.getProfileFeeds(1, order, userId);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setFeeds(data.feeds);
  };

  const getTogethers = async (userId: number) => {
    const {statusCode, message, data} = await togetherApi.getProfileTogethers(1, userId);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setTogethers(data);
  };

  const switchingIndex = (sort: 'feed' | 'together') => {
    setPagination({...pagination, sort});
  };

  const profileInit = async (userId: number) => {
    await getUser(userId);
    await getFeeds(userId, pagination.order);
    await getTogethers(userId);
  };

  return (
    <ProfileContext.Provider
      value={{
        user,
        feeds,
        togethers,
        pagination,
        getUser,
        getFeeds,
        getTogethers,
        profileInit,
        switchingIndex,
        switchOrder,
        userFollowAndReload,
        changeLikeCount,
      }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
