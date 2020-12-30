import React, {useEffect, useState} from 'react';
import FeedPresenter from './FeedPresenter';
import {feedApi, utilitiesApi} from '../../module/api';
import Loading from '../../components/Loading';
import {IFeedIndex} from '../../module/type/api';
import {IFeed} from '../../module/type/feed';

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
  const [eventLoading, setEventLoading] = useState(false);
  const [feedLoading, setFeedLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [feeds, setFeeds] = useState([]);
  const [eventPaging, setEventPaging] = useState({
    page: 1,
  });
  const [feedPaging, setFeedPaging] = useState<IFeedIndex>({
    id: 0,
    hasNextPage: true,
    page: 1,
    sort: 'createdAt',
    order: 'DESC',
  });

  const setHomePaging = async () => {
    const homePaging = {id: 0, page: 1, sort: 'createdAt', order: 'DESC'};
    setFeedPaging(homePaging);
    await getFeeds(homePaging);
  };

  const setPopularPaging = async () => {
    const popularPaging = {id: 1, page: 1, sort: 'likeCount', order: 'DESC'};
    setFeedPaging(popularPaging);
    await getFeeds(popularPaging);
  };

  const setRecommendPaging = async () => {
    const recommendPaging = {id: 2, page: 1, sort: 'createdAt', order: 'DESC'};
    setFeedPaging(recommendPaging);
    await getFeeds(recommendPaging);
  };

  const feedLike = async (feed: IFeed) => {
    const {id, isUserLiked} = feed;
    if (isUserLiked) {
      await feedApi.feedDisLike(id);
    } else {
      await feedApi.feedLike(id);
    }

    await getFeeds(feedPaging);
  };

  const onLoadFeedPaging = async () => {
    const {id, hasNextPage: isAllowedPaging, page, ...rest} = feedPaging;
    if (!isAllowedPaging) {
      return;
    }
    const newPage = page + 1;
    const {
      data,
      statusCode,
      paging: {hasNextPage},
    } = await feedApi.index({...rest, page: newPage});
    if (statusCode === 200) {
      const pagingFeeds = feeds.concat(data);
      setFeedPaging({...feedPaging, page: newPage, hasNextPage});
      setFeeds(pagingFeeds);
    }
  };

  const getFeeds = async (paging: IFeedIndex) => {
    const {id, hasNextPage: trash, ...rest} = paging;
    const {
      data,
      statusCode,
      paging: {hasNextPage},
    } = await feedApi.index(rest);
    if (statusCode === 200) {
      setFeedPaging({...feedPaging, hasNextPage});
      setFeeds(data);
    }
  };

  const getEvents = async () => {
    setEventLoading(true);
    const {data, statusCode} = await utilitiesApi.events(eventPaging);
    if (statusCode === 200) {
      setEvents(data);
    }
    setEventLoading(false);
  };

  useEffect(() => {
    getEvents();
    getFeeds(feedPaging);
  }, []);

  return eventLoading ? (
    <Loading />
  ) : (
    <FeedPresenter
      navigation={navigation}
      newFollower={newFollower}
      events={events}
      feeds={feeds}
      setHomePaging={setHomePaging}
      setPopularPaging={setPopularPaging}
      setRecommendPaging={setRecommendPaging}
      feedLoading={feedLoading}
      feedLike={feedLike}
      feedPaging={feedPaging}
      onLoadFeedPaging={onLoadFeedPaging}
    />
  );
};
