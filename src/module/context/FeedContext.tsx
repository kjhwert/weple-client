import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import AlertContext from './AlertContext';
import {feedApi} from '../api';
import {IFeedPagination} from '../type/api';
import {IFeed} from '../type/feed';
import {getLatestLocation} from 'react-native-location';
import UserContext from './UserContext';
import {IShowFeed} from '../type/feedContext';

const FeedContext = createContext({});

interface IProps {
  children: ReactNode;
}

export const FeedContextProvider = ({children}: IProps) => {
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const {userFollow}: any = useContext(UserContext);
  const [pagination, setPagination] = useState<IFeedPagination>({
    page: 1,
    sort: 'createdAt',
    order: 'DESC',
    lat: 0,
    lon: 0,
    nickName: '',
    hasNextPage: false,
  });
  const [index, setIndex] = useState<Array<IFeed>>([]);
  const [searchVisible, setSearchVisible] = useState(false);
  const [show, setShow] = useState<IShowFeed | null>(null);
  const [showLoading, setShowLoading] = useState(true);

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

  const userFollowAndReload = async (userId: number) => {
    const {statusCode, message} = await userFollow(userId);
    if (statusCode !== 201) {
      return setWarningAlertVisible('팔로잉에 실패했습니다.', message);
    }
    const newIndex = index.map((feed) => {
      if (feed.userId === userId) {
        feed.isUserFollowed = !feed.isUserFollowed;
      }

      return feed;
    });
    setIndex(newIndex);
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

    const sortIndex = changeLikeStatus.sort((a, b) => b.likeCount - a.likeCount);
    setIndex(sortIndex);
  };

  const getCreatedIndex = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {lat, lon, page: unUsedPage, ...sortOrder} = pagination;

    const page = 1;
    const sort = 'createdAt';
    const {
      statusCode,
      message,
      data,
      paging: {hasNextPage},
    } = await feedApi.index({...sortOrder, sort, page});

    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    const indexData = data.map((feed: any) => {
      return {...feed, commentCount: Number(feed.commentCount), likeCount: Number(feed.likeCount)};
    });
    setPagination({...pagination, sort, hasNextPage});
    setIndex(indexData);
  };

  const getCreatedMoreIndex = async (page: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {lat, lon, page: unUsedPage, ...sortOrder} = pagination;
    const {
      statusCode,
      message,
      data,
      paging: {hasNextPage},
    } = await feedApi.index({...sortOrder, page});

    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    const indexData = data.map((feed: any) => {
      return {...feed, commentCount: Number(feed.commentCount), likeCount: Number(feed.likeCount)};
    });

    setPagination({...pagination, page, hasNextPage});
    setIndex(index.concat(indexData));
  };

  const getLocationIndex = async () => {
    const {nickName} = pagination;
    const {latitude: lat, longitude: lon}: any = await getLatestLocation();
    const page = 1;

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

    setPagination({...pagination, sort: 'location', hasNextPage});
    setIndex(indexData);
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {lat, lon, page: unUsedPage, ...sortOrder} = pagination;

    const page = 1;
    const sort = 'likeCount';
    const {
      statusCode,
      message,
      data,
      paging: {hasNextPage},
    } = await feedApi.index({...sortOrder, sort, page});

    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    const indexData = data.map((feed: any) => {
      return {...feed, commentCount: Number(feed.commentCount), likeCount: Number(feed.likeCount)};
    });
    setPagination({...pagination, sort, hasNextPage});
    setIndex(indexData);
  };

  const getLikeCountMoreIndex = async (page: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {lat, lon, page: unUsedPage, ...sortOrder} = pagination;
    const {
      statusCode,
      message,
      data,
      paging: {hasNextPage},
    } = await feedApi.index({...sortOrder, page});

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
    const {page, sort, hasNextPage} = pagination;
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

  useEffect(() => {}, [index, pagination]);

  return (
    <FeedContext.Provider
      value={{
        index,
        show,
        showLoading,
        getShow,
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
      }}>
      {children}
    </FeedContext.Provider>
  );
};

export default FeedContext;
