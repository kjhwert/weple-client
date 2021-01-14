import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import AlertContext from './AlertContext';
import {feedApi} from '../api';
import {IShowFeed} from '../type/feedContext';
import CheckAlert from '../../components/CheckAlert';
import {IFeedIndex} from '../type/api';
import {IFeed} from '../type/feed';

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
  });
  const [show, setShow] = useState<IShowFeed | null>(null);
  const [showLoading, setShowLoading] = useState(true);

  const getIndex = async (tab: string) => {
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
    setIndexPaging({tab, page, sort, order, hasNextPage: paging.hasNextPage});
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
    <FeedContext.Provider value={{index, getIndex, feedLike, indexPaging, show, showLoading, getShow}}>
      {children}
    </FeedContext.Provider>
  );
};

export default FeedContext;
