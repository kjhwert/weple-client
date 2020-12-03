import React from 'react';
import StartCategoryPresenter from './StartCategoryPresenter';

const sportCategories = [
  {id: 0, name: '싸이클', isSelect: false},
  {id: 1, name: '달리기', isSelect: false},
  {id: 2, name: '걷기', isSelect: false},
  {id: 3, name: '등산', isSelect: false},
  {id: 4, name: '인라인스케이트', isSelect: false},
  {id: 5, name: '스케이트보드', isSelect: false},
  {id: 6, name: '수영', isSelect: false},
  {id: 7, name: '서핑보드', isSelect: false},
  {id: 8, name: '스노우보드', isSelect: false},
  {id: 9, name: '스키', isSelect: false},
];

const travelCategories = [
  {id: 0, name: '드라이빙', isSelect: false},
  {id: 1, name: '바이크', isSelect: false},
  {id: 2, name: '여행', isSelect: false},
  {id: 3, name: '기차여행', isSelect: false},
];

const hobbyCategories = [
  {id: 0, name: 'RC카', isSelect: false},
  {id: 1, name: '드론', isSelect: false},
  {id: 2, name: '낚시', isSelect: false},
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <StartCategoryPresenter
      navigation={navigation}
      sportCategories={sportCategories}
      travelCategories={travelCategories}
      hobbyCategories={hobbyCategories}
    />
  );
};
