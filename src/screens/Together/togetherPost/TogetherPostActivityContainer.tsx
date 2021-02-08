import React, {useState, useContext, useEffect} from 'react';
import TogetherPostActivityPresenter from './TogetherPostActivityPresenter';
import {feedApi} from '../../../module/api';
import UserContext from '../../../module/context/UserContext';
import TogetherContext from '../../../module/context/TogetherContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {getUserId}: any = useContext(UserContext);
  const {createRoomFeedData}: any = useContext(TogetherContext);

  const [toggleCheckBox, setToggleCheckBox] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [feedActiveList, setFeedActiveList] = useState([]);
  const [togetherPaging, setTogetherPaging] = useState({
    id: 0,
    hasNextPage: true,
    page: 1,
    sort: 'likeCount',
    order: 'DESC',
  });

  const setMyfeedPaging = async () => {
    const myFeedPaging = {id: 0, page: 1, sort: '', order: ''};
    setTogetherPaging(myFeedPaging);
    await getMyFeed(myFeedPaging);
  };

  const setLikefeedPaging = async () => {
    const likeFeedPaging = {id: 1, page: 1, sort: 'likeCount', order: 'DESC'};
    setTogetherPaging(likeFeedPaging);
    await getLikefeed(likeFeedPaging);
  };

  const getMyFeed = async (myFeedPaging) => {
    const page = myFeedPaging ? myFeedPaging.page : 1;
    const id = await getUserId();
    const {data, statusCode} = await feedApi.getMyFeed(id, page);
    if (statusCode !== 200) {
    } else {
      const newActive = data.map((item) => ({
        id: item.id,
        thumbnail: item.thumbnail,
        distance: item.distance,
        address: item.address,
        activityName: item.activity.name,
        activityColor: item.activity.color,
      }));
      setFeedActiveList(newActive);
    }
  };

  const getLikefeed = async (likeFeedPaging) => {
    const page = likeFeedPaging ? likeFeedPaging.page : 1;
    const {data, statusCode} = await feedApi.getLikefeed(page, likeFeedPaging.sort, likeFeedPaging.order);
    if (statusCode !== 200) {
    } else {
      const newActive = data.map((item) => ({
        id: item.id,
        thumbnail: item.thumbnail,
        distance: item.distance,
        address: item.address,
        activityName: item.activityName,
        activityColor: item.activityColor,
      }));
      setFeedActiveList(newActive);
    }
  };

  const setFeedId = () => {
    feedActiveList.map((item) => {
      if (item.id + '' == toggleCheckBox) {
        createRoomFeedData(toggleCheckBox, item.thumbnail, item.address);
      }
    });
  };

  useEffect(() => {
    getMyFeed();
  }, []);

  useEffect(() => {
    setIsActive(toggleCheckBox ? true : false);
  }, [toggleCheckBox]);

  return (
    <TogetherPostActivityPresenter
      navigation={navigation}
      feedActiveList={feedActiveList}
      toggleCheckBox={toggleCheckBox}
      setToggleCheckBox={setToggleCheckBox}
      isActive={isActive}
      setFeedId={setFeedId}
      togetherPaging={togetherPaging}
      setMyfeedPaging={setMyfeedPaging}
      setLikefeedPaging={setLikefeedPaging}
    />
  );
};
