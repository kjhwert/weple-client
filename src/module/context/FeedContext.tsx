import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import AlertContext from './AlertContext';
import {feedApi} from '../api';
import {IShowFeed} from '../type/feedContext';
import CheckAlert from '../../components/CheckAlert';
import {IFeedIndex} from '../type/api';
import {IFeed} from '../type/feed';
import {getLatestLocation} from 'react-native-location';

const FeedContext = createContext({});

interface IProps {
  children: ReactNode;
}

export const FeedContextProvider = ({children}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);
  const [index, setIndex] = useState<Array<IShowFeed>>([]);
  const [indexPaging, setIndexPaging] = useState<IFeedIndex>({
    tab: '홈',
    hasNextPage: true,
    page: 1,
    sort: 'createdAt',
    order: 'DESC',
    lat: 0,
    lon: 0,
  });
  const [show, setShow] = useState<IShowFeed | null>(null);
  const [showLoading, setShowLoading] = useState(true);

  const getIndex = async (tab: string) => {
    if (tab === '추천') {
      return locationIndex();
    }
    const {page, sort, order}: IFeedIndex = await getIndexPaging(tab);
    const {statusCode, message, data, paging} = await feedApi.index({page, sort, order});
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
    setIndex(data);
    setIndexPaging({...indexPaging, tab, page, sort, order, hasNextPage: paging.hasNextPage});
  };

  const getMoreIndex = async () => {
    if (!indexPaging.hasNextPage) {
      return;
    }
    if (indexPaging.tab === '추천') {
      return getMoreLocationIndex();
    }
    const newIndexPaging = {...indexPaging, page: indexPaging.page + 1};
    const {statusCode, message, data, paging} = await feedApi.index({
      page: newIndexPaging.page,
      sort: newIndexPaging.sort,
      order: newIndexPaging.order,
    });
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
    const newIndex = index.concat(data);
    setIndex(newIndex);
    setIndexPaging({...newIndexPaging, hasNextPage: paging.hasNextPage});
  };

  const locationIndex = async () => {
    const {latitude: lat, longitude: lon}: any = await getLatestLocation();
    const {statusCode, message, data, paging} = await feedApi.locationIndex(1, lon, lat);
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
    setIndex(data);
    setIndexPaging({...indexPaging, tab: '추천', ...paging, lat, lon});
  };

  console.log(indexPaging);

  const getMoreLocationIndex = async () => {
    // const array = index.map((feed) => feed.id);
    // const newIndexPaging = {...indexPaging, page: indexPaging.page + 1};
    // console.log(newIndexPaging);
    // const {statusCode, message, data, paging} = await feedApi.locationIndex(
    //   newIndexPaging.page,
    //   newIndexPaging.lon,
    //   newIndexPaging.lat,
    // );
    //
    // const newArray = data.map((feed) => feed.id);
    // if (statusCode !== 200) {
    //   return setAlertVisible(
    //     <CheckAlert
    //       check={{
    //         type: 'warning',
    //         title: '데이터를 가져오는데 실패했습니다.',
    //         description: message,
    //       }}
    //     />,
    //   );
    // }
    // const newIndex = index.concat(data);
    // setIndex(newIndex);
    // setIndexPaging({...newIndexPaging, hasNextPage: paging.hasNextPage});
  };

  const getIndexPaging = (tab: string) => {
    switch (tab) {
      case '홈':
        return {tab: '홈', page: 1, sort: 'createdAt', order: 'DESC'};
      case '인기':
        return {tab: '인기', page: 1, sort: 'likeCount', order: 'DESC'};
      case '추천':
        return {tab: '추천', page: 1, sort: 'createdAt', order: 'DESC'};
    }
  };

  const feedLike = async (feed: IFeed) => {
    const {id, isUserLiked} = feed;
    if (isUserLiked) {
      await feedApi.feedDisLike(id);
    } else {
      await feedApi.feedLike(id);
    }

    await getIndex(indexPaging.tab);
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
    setShow(feed);
    setShowLoading(false);
  };

  useEffect(() => {}, [index, indexPaging, show, showLoading]);

  return (
    <FeedContext.Provider value={{index, getIndex, feedLike, indexPaging, show, showLoading, getShow, getMoreIndex}}>
      {children}
    </FeedContext.Provider>
  );
};

export default FeedContext;
