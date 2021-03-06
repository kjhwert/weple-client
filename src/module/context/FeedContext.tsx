import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import AlertContext from './AlertContext';
import {feedApi} from '../api';
import {IFeedPagination} from '../type/api';
import {IFeed} from '../type/feed';
import {getLatestLocation} from 'react-native-location';
import UserContext from './UserContext';
import {IShowFeed} from '../type/feedContext';
import Geolocation from '@react-native-community/geolocation';
import {IGeoLocation} from './RecordContext';

const FeedContext = createContext({});

interface IProps {
  children: ReactNode;
}

export const FeedContextProvider = ({children}: IProps) => {
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const {userFollow}: any = useContext(UserContext);
  const [tabBarVisible, setTabBarVisible] = useState(true);
  const [pagination, setPagination] = useState<IFeedPagination>({
    page: 1,
    order: 'DESC',
    lat: 0,
    lon: 0,
    nickName: '',
    hasNextPage: false,
  });
  const [sort, setSort] = useState<'createdAt' | 'location' | 'likeCount'>('createdAt');
  const [index, setIndex] = useState<Array<IFeed>>([]);
  const [indexLoading, setIndexLoading] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [show, setShow] = useState<IShowFeed | null>(null);
  const [showLoading, setShowLoading] = useState(true);

  const changeTabBarVisible = () => {
    setTabBarVisible(true);
  };

  const changeTabBarInvisible = () => {
    setTabBarVisible(false);
  };

  const getShow = async (feedId: number) => {
    setShowLoading(true);
    const {statusCode, message, data} = await feedApi.show(feedId);
    const feed = {
      ...data,
      isUserLiked: Number(data.isUserLiked),
      likeCount: Number(data.likeCount),
      commentCount: Number(data.commentCount),
      isUserFollowed: Number(data.isUserFollowed),
    };
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setShow(feed);
    setShowLoading(false);
  };

  const changeSearchVisible = () => {
    setSearchVisible(!searchVisible);
  };

  const feedLiked = async (feed: IFeed) => {
    const {id, isUserLiked} = feed;
    if (isUserLiked) {
      return await feedApi.feedDisLike(id);
    }
    return await feedApi.feedLike(id);
  };

  const userFollowAndChangeFollowStatus = (userId: number) => {
    if (show) {
      setShow({...show, isUserFollowed: !show.isUserFollowed});
    }

    const newIndex = index.map((feed) => {
      if (feed.userId === userId) {
        feed.isUserFollowed = !feed.isUserFollowed;
      }

      return feed;
    });
    setIndex(newIndex);
  };

  const showUserFollowAndReload = async (userId: number) => {
    const {statusCode, message} = await userFollow(userId);
    if (statusCode !== 201) {
      return setWarningAlertVisible('팔로잉에 실패했습니다.', message);
    }

    userFollowAndChangeFollowStatus(userId);
  };

  const userFollowAndReload = async (userId: number) => {
    const {statusCode, message} = await userFollow(userId);
    if (statusCode !== 201) {
      return setWarningAlertVisible('팔로잉에 실패했습니다.', message);
    }
    userFollowAndChangeFollowStatus(userId);
  };

  const feedLikedAndReload = async (feed: IFeed) => {
    const {statusCode, message} = await feedLiked(feed);
    if (statusCode !== 201) {
      return setWarningAlertVisible('좋아요에 실패했습니다.', message);
    }

    const changeLikeStatus = index.map((feedItem) => {
      if (feed.id === feedItem.id) {
        feedItem.isUserLiked = !feedItem.isUserLiked;
        feedItem.likeCount = feedItem.isUserLiked ? feedItem.likeCount + 1 : feedItem.likeCount - 1;
        return feedItem;
      }

      return feedItem;
    });

    if (sort === 'likeCount') {
      const sortIndex = changeLikeStatus.sort((a, b) => b.likeCount - a.likeCount);
      setIndex(sortIndex);
    } else {
      setIndex(changeLikeStatus);
    }
  };

  const getCreatedIndex = async () => {
    setIndexLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {lat, lon, page: unUsedPage, ...sortOrder} = pagination;

    const page = 1;
    const {statusCode, message, data, paging} = await feedApi.index({...sortOrder, sort: 'createdAt', page});

    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    const indexData = data.map((feed: any) => {
      return {...feed, commentCount: Number(feed.commentCount), likeCount: Number(feed.likeCount)};
    });
    setPagination({...pagination, hasNextPage: paging.hasNextPage});
    setIndex(indexData);
    setIndexLoading(false);
  };

  const getCreatedMoreIndex = async (page: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {lat, lon, page: unUsedPage, ...sortOrder} = pagination;
    const {
      statusCode,
      message,
      data,
      paging: {hasNextPage},
    } = await feedApi.index({...sortOrder, sort: 'createdAt', page});

    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    const indexData = data.map((feed: any) => {
      return {...feed, commentCount: Number(feed.commentCount), likeCount: Number(feed.likeCount)};
    });

    setPagination({...pagination, page, hasNextPage});
    setIndex(index.concat(indexData));
  };

  const getCoordinates = async ({coords}: IGeoLocation) => {
    const {latitude: lat, longitude: lon} = coords;
    const {nickName} = pagination;
    const page = 1;

    const {statusCode, message, data, paging} = await feedApi.locationIndex({page, lon, lat, nickName});

    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    const indexData = data.map((feed: any) => {
      return {...feed, commentCount: Number(feed.commentCount), likeCount: Number(feed.likeCount)};
    });

    setPagination({...pagination, hasNextPage: paging.hasNextPage});
    setIndex(indexData);
    setIndexLoading(false);
  };

  const getLocationIndex = async () => {
    setIndexLoading(true);
    await Geolocation.getCurrentPosition(
      (res) => getCoordinates(res),
      (err) => setWarningAlertVisible('내 위치를 가져오는데 실패했습니다.', '잠시 후에 다시 시도해주세요.'),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const getLocationMoreIndex = async (page: number) => {
    const {nickName} = pagination;
    const {latitude: lat, longitude: lon}: any = await getLatestLocation();
    const {
      statusCode,
      message,
      data,
      paging: {hasNextPage},
    } = await feedApi.locationIndex({page, lon, lat, nickName});

    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    const indexData = data.map((feed: any) => {
      return {...feed, commentCount: Number(feed.commentCount), likeCount: Number(feed.likeCount)};
    });

    setPagination({...pagination, page, hasNextPage});
    setIndex(index.concat(indexData));
  };

  const getLikeCountIndex = async () => {
    setIndexLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {lat, lon, page: unUsedPage, order, nickName} = pagination;

    const page = 1;

    const {statusCode, message, data, paging} = await feedApi.index({order, nickName, sort: 'likeCount', page});

    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    const indexData = data.map((feed: any) => {
      return {...feed, commentCount: Number(feed.commentCount), likeCount: Number(feed.likeCount)};
    });
    setPagination({...pagination, hasNextPage: paging.hasNextPage});
    setIndex(indexData);
    setIndexLoading(false);
  };

  const getLikeCountMoreIndex = async (page: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {lat, lon, page: unUsedPage, ...sortOrder} = pagination;
    const {
      statusCode,
      message,
      data,
      paging: {hasNextPage},
    } = await feedApi.index({...sortOrder, sort: 'likeCount', page});

    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    const indexData = data.map((feed: any) => {
      return {...feed, commentCount: Number(feed.commentCount), likeCount: Number(feed.likeCount)};
    });

    setPagination({...pagination, page, hasNextPage});
    setIndex(index.concat(indexData));
  };

  const switchingSortIndex = (sort: 'createdAt' | 'location' | 'likeCount') => {
    setSort(sort);
    if (sort === 'createdAt') {
      return getCreatedIndex();
    }

    if (sort === 'location') {
      return getLocationIndex();
    }

    if (sort === 'likeCount') {
      return getLikeCountIndex();
    }
  };

  const getMoreIndex = () => {
    const {page, hasNextPage} = pagination;
    if (!hasNextPage) {
      return;
    }
    if (sort === 'createdAt') {
      return getCreatedMoreIndex(page + 1);
    }

    if (sort === 'location') {
      return getLocationMoreIndex(page + 1);
    }

    if (sort === 'likeCount') {
      return getLikeCountMoreIndex(page + 1);
    }
  };

  const changeLikeCount = async (feedId: number) => {
    const feed = index.find((feed) => feed.id === feedId);
    if (!feed) {
      return;
    }

    const {statusCode, message} = await feedLiked(feed);
    if (statusCode !== 201) {
      return setWarningAlertVisible('좋아요에 실패했습니다.', message);
    }

    if (show && show.id === feedId) {
      setShow({
        ...show,
        isUserLiked: !feed.isUserLiked,
        likeCount: feed.isUserLiked ? show.likeCount - 1 : show.likeCount + 1,
      });
    }
    const newIndex = index.map((feedItem) => {
      if (feedId === feedItem.id) {
        feedItem.isUserLiked = !feed.isUserLiked;
        feedItem.likeCount = feed.isUserLiked ? feedItem.likeCount + 1 : feedItem.likeCount - 1;
      }

      return feedItem;
    });
    setIndex(newIndex);
  };

  const increaseCommentCount = (feedId: number) => {
    if (show) {
      setShow({...show, commentCount: show.commentCount + 1});
    }

    const newIndex = index.map((feed) => {
      if (feed.id === feedId) {
        feed.commentCount += 1;
      }

      return feed;
    });
    setIndex(newIndex);
  };

  const decreaseCommentCount = (feedId: number) => {
    if (show) {
      setShow({...show, commentCount: show.commentCount - 1});
    }

    const newIndex = index.map((feed) => {
      if (feed.id === feedId) {
        feed.commentCount -= 1;
      }

      return feed;
    });
    setIndex(newIndex);
  };
  return (
    <FeedContext.Provider
      value={{
        index,
        show,
        showLoading,
        indexLoading,
        getShow,
        sort,
        pagination,
        userFollowAndReload,
        feedLikedAndReload,
        getCreatedIndex,
        getLocationIndex,
        getLikeCountIndex,
        switchingSortIndex,
        getMoreIndex,
        changeSearchVisible,
        searchVisible,
        increaseCommentCount,
        decreaseCommentCount,
        showUserFollowAndReload,
        userFollowAndChangeFollowStatus,
        changeLikeCount,
        tabBarVisible,
        changeTabBarVisible,
        changeTabBarInvisible,
      }}>
      {children}
    </FeedContext.Provider>
  );
};

export default FeedContext;
