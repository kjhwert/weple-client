import React, {useState} from 'react';
import FeedPresenter from './FeedPresenter';

export default ({navigation}) => {
  const [newFollower, setNewFollower] = useState([
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
  ]);

  const [menuList, setMenuList] = useState([
    {id: 0, name: '홈', isClick: true},
    {id: 1, name: '인기', isClick: false},
    {id: 2, name: '추천', isClick: false},
  ]);

  return (
    <FeedPresenter
      navigation={navigation}
      newFollower={newFollower}
      menuList={menuList}
    />
  );
};
