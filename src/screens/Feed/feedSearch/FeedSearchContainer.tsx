import React, {useContext, useEffect, useState} from 'react';
import FeedSearchPresenter from './FeedSearchPresenter';
import {feedApi} from '../../../module/api';
import AlertContext from '../../../module/context/AlertContext';
import {IFeed} from '../../../module/type/feed';
import UserContext from '../../../module/context/UserContext';
import FeedContext from '../../../module/context/FeedContext';
import {IFeedPagination} from '../../../module/type/api';
import {getLatestLocation} from 'react-native-location';
import SortOrderComponent, {ISortOrder} from '../../../components/SortOrderComponent';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {setWarningAlertVisible, setAlertVisible}: any = useContext(AlertContext);
  const {feedLiked}: any = useContext(FeedContext);
  const {userFollow}: any = useContext(UserContext);
  const [pagination, setPagination] = useState<IFeedPagination>({
    page: 1,
    sort: 'createdAt',
    order: 'DESC',
    lat: 0,
    lon: 0,
    nickName: route.params.searchText,
    hasNextPage: false,
  });
  const [index, setIndex] = useState<Array<IFeed>>([]);

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

    const newIndex = index.map((feedItem) => {
      if (feed.id === feedItem.id) {
        feedItem.isUserLiked = !feedItem.isUserLiked;
        feedItem.likeCount = feedItem.isUserLiked ? feedItem.likeCount + 1 : feedItem.likeCount - 1;
        return feedItem;
      }

      return feedItem;
    });
    setIndex(newIndex);
  };

  const getCreatedIndex = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {lat, lon, page: unUsedPage, ...sortOrder} = pagination;

    const page = 1;
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
    setPagination({...pagination, hasNextPage});
    setIndex(indexData);
  };

  const getCreatedMoreIndex = async (page: number) => {
    const {hasNextPage: isLoadable} = pagination;
    if (!isLoadable) {
      return;
    }
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

    setPagination({...pagination, hasNextPage});
    setIndex(indexData);
  };

  const getLocationMoreIndex = async (page: number) => {
    const {hasNextPage: isLoadable} = pagination;
    if (!isLoadable) {
      return;
    }

    const {latitude: lat, longitude: lon}: any = await getLatestLocation();

    const {
      statusCode,
      message,
      data,
      paging: {hasNextPage},
    } = await feedApi.locationIndex({page, lon, lat});

    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    const indexData = data.map((feed: any) => {
      return {...feed, commentCount: Number(feed.commentCount), likeCount: Number(feed.likeCount)};
    });

    setPagination({...pagination, page, hasNextPage});
    setIndex(index.concat(indexData));
  };

  const switchingSortIndex = ({value}: ISortOrder) => {
    if (value === 'createdAt') {
      setPagination({...pagination, sort: value});
      return getCreatedIndex();
    }

    if (value === 'location') {
      setPagination({...pagination, sort: value});
      return getLocationIndex();
    }
  };

  const setSortAlertVisible = () => {
    const sorts = [
      {label: '최신 등록순', value: 'createdAt'},
      {label: '거리 가까운순', value: 'location'},
    ];
    setAlertVisible(<SortOrderComponent confirm={switchingSortIndex} sort={sorts} />);
  };

  const getMoreIndex = () => {
    const {page, sort} = pagination;
    if (sort === 'createdAt') {
      return getCreatedMoreIndex(page + 1);
    }

    if (sort === 'location') {
      return getLocationMoreIndex(page + 1);
    }
  };

  useEffect(() => {
    getCreatedIndex();
  }, []);

  return (
    <FeedSearchPresenter
      navigation={navigation}
      index={index}
      userFollowAndReload={userFollowAndReload}
      feedLikedAndReload={feedLikedAndReload}
      setSortAlertVisible={setSortAlertVisible}
      getMoreIndex={getMoreIndex}
    />
  );
};
