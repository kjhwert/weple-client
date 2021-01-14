import React from 'react';
import TogetherPostActivityPresenter from './TogetherPostActivityPresenter';

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
    address: '서울서울서울특별시 마포구 공덕동 118-1',
  },
  {
    id: 1,
    image: require('../../../assets/photo_4.jpeg'),
    kind: '드라이빙',
    distance: 18.8,
    address: '서울서울서울특별시 마포구 백범로 110-10',
  },
  {
    id: 2,
    image: require('../../../assets/photo_4.jpeg'),
    kind: '하이킹',
    distance: 30.5,
    address: '서울서울서울특별시 마포구 백범로 110-10',
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <TogetherPostActivityPresenter navigation={navigation} menuList={menuList} ActivityData={ActivityData} />;
};
