import React, {createContext, ReactNode, useContext, useState} from 'react';
import {feedApi, togetherApi, userApi} from '../api';
import AlertContext from './AlertContext';
import {IProfileUserInfo} from '../type/user';
import UserContext from './UserContext';
import {IFeed} from '../type/feed';
import {ITogethers} from '../type/together';

const ProfileContext = createContext({});

interface IProps {
  children: ReactNode;
}

interface IPagination {
  feedPage: number;
  togetherPage: number;
  sort: 'feed' | 'together';
  order: 'createdAt' | 'likeCount';
  feedHasNextPage: boolean;
  togetherHasNextPage: boolean;
}

export const ProfileContextProvider = ({children}: IProps) => {
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const {userFollow, loginUser}: any = useContext(UserContext);
  const [user, setUser] = useState<IProfileUserInfo | null>(null);
  const [feeds, setFeeds] = useState<Array<IFeed>>([]);
  const [togethers, setTogethers] = useState<Array<ITogethers>>([]);
  const [pagination, setPagination] = useState<IPagination>({
    feedPage: 1,
    togetherPage: 1,
    sort: 'feed',
    order: 'createdAt',
    feedHasNextPage: false,
    togetherHasNextPage: false,
  });
  const [userStatistics, setUserStatistics] = useState([]);

  const getUserStatistics = async () => {
    let userId = user?.user.id;
    if (!user) {
      userId = loginUser.id;
    }
    const {statusCode, message, data} = await feedApi.userStatistics(userId);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setUserStatistics(data);
  };

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
    if (!user) {
      return;
    }
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
    const {statusCode, message, data, paging} = await feedApi.getProfileFeeds(1, order, userId);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setFeeds(data.feeds);
    setPagination({...pagination, feedHasNextPage: paging.hasNextPage});
  };

  const getMoreFeeds = async () => {
    const {feedPage, order, feedHasNextPage} = pagination;
    if (!feedHasNextPage || !user) {
      return;
    }
    const page = feedPage + 1;
    const {statusCode, message, data, paging} = await feedApi.getProfileFeeds(page, order, user.user.id);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    const newFeeds = feeds.concat(data.feeds);
    setFeeds(newFeeds);
    setPagination({...pagination, feedPage: page, feedHasNextPage: paging.hasNextPage});
  };

  const getTogethers = async (userId: number) => {
    const {statusCode, message, data, paging} = await togetherApi.getProfileTogethers(1, userId);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setTogethers(data);
    setPagination({...pagination, togetherHasNextPage: paging.hasNextPage});
  };

  const getMoreTogethers = async () => {
    const {togetherPage, togetherHasNextPage} = pagination;
    if (!togetherHasNextPage || !user) {
      return;
    }
    const page = togetherPage + 1;
    const {statusCode, message, data, paging} = await togetherApi.getProfileTogethers(page, user.user.id);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    const newTogethers = togethers.concat(data);
    setTogethers(newTogethers);
    setPagination({...pagination, togetherPage: page, togetherHasNextPage: paging.hasNextPage});
  };

  const switchingIndex = async (sort: 'feed' | 'together') => {
    if (!user) return;
    if (sort === 'together') {
      await getTogethers(user.user.id);
    }
    setPagination({...pagination, sort});
  };

  const profileInit = async (userId: number) => {
    await getUser(userId);
    await getFeeds(userId, pagination.order);
  };

  return (
    <ProfileContext.Provider
      value={{
        user,
        feeds,
        togethers,
        pagination,
        userStatistics,
        getUser,
        getFeeds,
        getTogethers,
        profileInit,
        switchingIndex,
        switchOrder,
        userFollowAndReload,
        changeLikeCount,
        getUserStatistics,
        getMoreFeeds,
        getMoreTogethers,
      }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
