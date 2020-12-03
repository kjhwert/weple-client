import React from 'react';
import FollowingMemberPresenter from './FollowingMemberPresenter';

const menuList = [
  {id: 0, name: '팔로워', number: '1,226', isClick: false},
  {id: 1, name: '팔로우 중', number: 50, isClick: true},
];

const member = [
  {
    id: 0,
    image: require('../../../assets/profile_1.png'),
    name: 'GilDong',
    isFollow: true,
  },
  {
    id: 1,
    image: require('../../../assets/profile_2.png'),
    name: 'Benjamin',
    isFollow: true,
  },
  {
    id: 2,
    image: require('../../../assets/follower_2.png'),
    name: 'Jamin',
    isFollow: false,
  },
];
interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <FollowingMemberPresenter
      navigation={navigation}
      menuList={menuList}
      member={member}
    />
  );
};
