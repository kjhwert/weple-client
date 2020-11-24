import React, {useState, useEffect} from 'react';
import CategoryPresenter from './CategoryPresenter';

export default ({navigation}) => {
  const [category, setCategory] = useState([
    {id: 0, name: '싸이클', isSelect: false},
    {id: 1, name: '달리기', isSelect: false},
    {id: 2, name: '드론', isSelect: false},
    {id: 3, name: '하이킹', isSelect: false},
    {id: 4, name: '모터싸이클', isSelect: false},
    {id: 5, name: '드라이빙', isSelect: false},
    {id: 6, name: '스키', isSelect: false},
  ]);

  return <CategoryPresenter navigation={navigation} category={category} />;
};
