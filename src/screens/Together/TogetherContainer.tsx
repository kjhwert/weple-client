import React, {useState, useEffect} from 'react';
import TogetherPresenter from './TogetherPresenter';
import {togetherApi} from '../../module/api';

const openClub = [
  {
    id: 0,
    image: require('../../assets/photo_2.jpeg'),
    iconImage: require('../../assets/active_cycle.png'),
    distance: 21.7,
    title: '강변북로 라이딩',
    address: '서울특별시 마포구 공덕동 118-1',
    pay: '10,000',
    endTime: 18,
  },
  {
    id: 1,
    image: require('../../assets/photo_2.jpeg'),
    iconImage: require('../../assets/active_cycle.png'),
    distance: 18.8,
    title: '북한강 라이딩',
    address: '서울특별시 마포구 공덕동 118-1',
    pay: '10,000',
    endTime: 18,
  },
  {
    id: 2,
    image: require('../../assets/photo_2.jpeg'),
    iconImage: require('../../assets/active_cycle.png'),
    distance: 30.5,
    title: '남한강 라이딩',
    address: '서울특별시 마포구 공덕동 118-1',
    pay: '10,000',
    endTime: 18,
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [userList, setUserList] = useState({
    togetherCount: 0,
    togethers: [],
  });

  const [togetherPaging, setTogetherPaging] = useState({
    id: 0,
    hasNextPage: true,
    page: 1,
  });

  const setLocationPaging = async () => {
    const locationPaging = {id: 0, page: 1};
    setTogetherPaging(locationPaging);
    await getTogether(locationPaging);
  };

  const setFollowerPaging = async () => {
    const followerPaging = {id: 1, page: 1};
    setTogetherPaging(followerPaging);
    await getTogether(followerPaging);
  };

  const setEndSoonPaging = async () => {
    const endSoonPaging = {id: 2, page: 1};
    setTogetherPaging(endSoonPaging);
    await getTogether(endSoonPaging);
  };

  // 내가 개설한 모임 api 조회
  const getTogether = async () => {
    const {data, statusCode} = await togetherApi.userOpenList();
    console.log('togetherData:', data);

    if (statusCode !== 200) {
      console.log('together error');
    } else {
      setUserList(data);
    }
  };

  useEffect(() => {
    getTogether();
  }, []);

  return (
    <TogetherPresenter
      navigation={navigation}
      userList={userList}
      togetherPaging={togetherPaging}
      setLocationPaging={setLocationPaging}
      setFollowerPaging={setFollowerPaging}
      setEndSoonPaging={setEndSoonPaging}
      openClub={openClub}
    />
  );
};
