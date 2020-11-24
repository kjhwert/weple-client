import React, {useState} from 'react';
import TogetherOpenPresenter from './TogetherOpenPresenter';

export default ({navigation}) => {
  const [menuList, setMenuList] = useState([
    {id: 0, name: '내 주변', isClick: true},
    {id: 1, name: '팔로워', isClick: false},
    {id: 2, name: '모집임박', isClick: false},
  ]);

  return <TogetherOpenPresenter navigation={navigation} menuList={menuList} />;
};
