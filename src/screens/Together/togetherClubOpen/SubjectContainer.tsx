import React from 'react';
import SubjectPresenter from './SubjectPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const radioBoxData = [
    {
      label: '싸이클',
      value: 'cycle',
    },
    {
      label: '달리기',
      value: 'run',
    },
    {
      label: '하이킹',
      value: 'hiking',
    },
    {
      label: '드라이빙',
      value: 'driving',
    },
    {
      label: '모터싸이클',
      value: 'motorcycle',
    },
  ];

  return (
    <SubjectPresenter navigation={navigation} radioBoxData={radioBoxData} />
  );
};
