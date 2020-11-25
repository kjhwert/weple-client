import React from 'react';
import ActivityPresenter from './ActivityPresenter';

const menuList = [
  {id: 0, name: '내 활동', isClick: true},
  {id: 1, name: '인기 활동', isClick: false},
];

const ActivityData = [
  {
    id: 0,
    image: require('../../../assets/photo_2.jpeg'),
    kind: '싸이클',
    distance: 21.7,
    nickName: 'GilDong',
    address: '서울특별시 마포구 공덕동 118-1',
  },
  {
    id: 1,
    image: require('../../../assets/photo_4.jpeg'),
    kind: '싸이클',
    distance: 18.8,
    nickName: 'Benjamin',
    address: '서울시 마포구 백범로 110-10',
  },
  // {
  //   id: 2,
  //   image: require('../../../assets/photo_2.jpeg'),
  //   kind: '싸이클',
  //   distance: 30.5,
  //   nickName: 'Ben',
  //   address: '서울시 마포구 백범로 110-10',
  // },
  // {
  //   id: 3,
  //   image: require('../../../assets/photo_4.jpeg'),
  //   kind: '싸이클',
  //   distance: 30.5,
  //   nickName: 'Jamin',
  //   address: '서울시 마포구 백범로 110-10',
  // },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <ActivityPresenter
      navigation={navigation}
      menuList={menuList}
      ActivityData={ActivityData}
    />
  );
};
