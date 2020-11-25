import React from 'react';
import ProfilePresenter from './ProfilePresenter';

const menuList = [
  {id: 0, name: 'GilDong님의\n활동', isClick: true},
  {id: 1, name: 'GilDong님이\n참여중인 함께', isClick: false},
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <ProfilePresenter navigation={navigation} menuList={menuList} />;
};
