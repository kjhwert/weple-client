import React, {useContext, useState, useEffect} from 'react';
import ProfilePresenter from './ProfileActivePresenter';
import AlertContext from '../../module/context/AlertContext';
import SortAlert from '../../components/SortAlert';
import UserContext from '../../module/context/UserContext';
import {feedApi, togetherApi, userApi} from '../../module/api';
import {IProfileUserInfo} from '../../module/type/user';
import Loading from '../../components/Loading';
import UserProfileComponent from '../../components/UserProfileComponent';
import ProfileActivePresenter from './ProfileActivePresenter';
import {IFeed} from '../../module/type/feed';

interface IProps {
  navigation: any;
  route: any;
}

const sortDataType = [
  {
    label: '최신 등록 순',
    value: 'createdAt',
  },
  {
    label: '인기 많은 순',
    value: 'likeCount',
  },
];

export default (props: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const {loginUser}: any = useContext(UserContext);
  const [user, setUser] = useState<IProfileUserInfo | null>(null);
  const [feeds, setFeeds] = useState([]);
  const [togethers, setTogethers] = useState([]);
  const [pagination, setPagination] = useState<{page: number; sort: string; order: 'createdAt' | 'likeCount'}>({
    page: 1,
    sort: 'feed',
    order: 'createdAt',
  });

  const init = async () => {
    await getUser();
    await getFeeds(pagination.order);
    await getTogethers();
  };

  const getUser = async () => {
    const {id: userId} = loginUser;
    const {data, statusCode, message} = await userApi.getProfile(userId);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setUser(data);
  };

  const getFeeds = async (order: 'createdAt' | 'likeCount') => {
    const {id: userId} = loginUser;
    const {statusCode, message, data} = await feedApi.getProfileFeeds(1, order, userId);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setFeeds(data.feeds);
  };

  const getTogethers = async () => {
    const {id: userId} = loginUser;
    const {statusCode, message, data} = await togetherApi.getProfileTogethers(1, userId);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setTogethers(data);
  };

  const switchingIndex = (sort: 'feed' | 'together') => {
    setPagination({...pagination, sort});
  };

  const sortAlert = () => {
    return setAlertVisible(
      <SortAlert
        sortType={sortDataType}
        checked={async ({value}) => {
          await switchOrder(value);
        }}
        initial={sortDataType.findIndex(({value}) => value === pagination.order)}
      />,
    );
  };

  const switchOrder = async (order: 'createdAt' | 'likeCount') => {
    await getFeeds(order);
    setPagination({...pagination, order});
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

  const feedLiked = async (feed: IFeed) => {
    const {id, isUserLiked} = feed;
    if (isUserLiked) {
      return await feedApi.feedDisLike(id);
    }
    return await feedApi.feedLike(id);
  };

  useEffect(() => {
    init();
  }, []);

  return !user ? (
    <Loading />
  ) : (
    <ProfileActivePresenter
      {...props}
      user={user}
      feeds={feeds}
      togethers={togethers}
      pagination={pagination}
      switchingIndex={switchingIndex}
      sortAlert={sortAlert}
      init={init}
      changeLikeCount={changeLikeCount}
    />
  );
};
