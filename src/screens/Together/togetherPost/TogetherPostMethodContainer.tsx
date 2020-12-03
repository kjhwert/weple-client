import React from 'react';
import TogetherPostMethodPresenter from './TogetherPostMethodPresenter';

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
    <TogetherPostMethodPresenter
      navigation={navigation}
      radioBoxData={radioBoxData}
    />
  );
};
