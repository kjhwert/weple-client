import React from 'react';
import TogetherPresenter from './TogetherPresenter';

const menuList = [
  {id: 0, name: '내 주변', isClick: true},
  {id: 1, name: '팔로워', isClick: false},
  {id: 2, name: '모집임박', isClick: false},
];

const openClub = [
  {
    id: 0,
    image: require('../../assets/photo_2.jpeg'),
    iconImage: require('../../assets/cycle.png'),
    distance: 21.7,
    title: '강변북로 라이딩',
    address: '서울특별시 마포구 공덕동 118-1',
    pay: '10,000',
    endTime: 18,
  },
  {
    id: 1,
    image: require('../../assets/photo_2.jpeg'),
    iconImage: require('../../assets/cycle.png'),
    distance: 18.8,
    title: '북한강 라이딩',
    address: '서울특별시 마포구 공덕동 118-1',
    pay: '10,000',
    endTime: 18,
  },
  {
    id: 2,
    image: require('../../assets/photo_2.jpeg'),
    iconImage: require('../../assets/cycle.png'),
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
  return (
    <TogetherPresenter
      navigation={navigation}
      menuList={menuList}
      openClub={openClub}
    />
  );
};
