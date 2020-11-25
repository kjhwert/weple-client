import React from 'react';
import MethodPresenter from './MethodPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const radioBoxData = [
    {
      label: '공개모집',
      value: 'public',
    },
    {
      label: '비공개모집',
      value: 'private',
    },
  ];

  return (
    <MethodPresenter navigation={navigation} radioBoxData={radioBoxData} />
  );
};
