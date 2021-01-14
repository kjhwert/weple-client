import React, {useState} from 'react';
import ProfilePresenter from './ProfileActivePresenter';

const menuList = [
  {id: 0, name: '나의 활동', isClick: true},
  {id: 1, name: '내가 참여중인 모임', isClick: false},
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [showAlert, setShowAlert] = useState(false);

  const alertFrame = (showFlag) => {
    setShowAlert(showFlag);
  };

  const radioBoxSortData = [
    {
      label: '거리 가까운 순',
      value: 'distance',
    },
    {
      label: '최신 등록 순',
      value: 'registration',
    },
  ];

  return (
    <ProfilePresenter
      navigation={navigation}
      showAlert={showAlert}
      alertFrame={alertFrame}
      menuList={menuList}
      radioBoxSortData={radioBoxSortData}
    />
  );
};
