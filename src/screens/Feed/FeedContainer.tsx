import React from 'react';
import FeedPresenter from './FeedPresenter';

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

const menuList = [
  {id: 0, name: '홈', isClick: true},
  {id: 1, name: '인기', isClick: false},
  {id: 2, name: '추천', isClick: false},
];
interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <FeedPresenter
      navigation={navigation}
      newFollower={newFollower}
      menuList={menuList}
    />
  );
};
