import React from 'react';
import ProfilePresenter from './ProfileActivePresenter';

const menuList = [
  {id: 0, name: '활동', isClick: true},
  {id: 1, name: '참여중인 함께', isClick: false},
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <ProfilePresenter navigation={navigation} menuList={menuList} />;
};
