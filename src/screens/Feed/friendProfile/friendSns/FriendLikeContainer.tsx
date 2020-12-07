import React from 'react';
import FriendLikePresenter from './FriendLikePresenter';

const member = [
  {
    id: 0,
    image: require('../../../../assets/profile_1.png'),
    name: 'GilDong',
    isFollow: true,
  },
  {
    id: 1,
    image: require('../../../../assets/profile_2.png'),
    name: 'Benjamin',
    isFollow: true,
  },
  {
    id: 2,
    image: require('../../../../assets/follower_2.png'),
    name: 'Jamin',
    isFollow: false,
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <FriendLikePresenter navigation={navigation} member={member} />;
};
