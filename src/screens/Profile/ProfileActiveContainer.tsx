import React, {useState} from 'react';
import ProfilePresenter from './ProfileActivePresenter';

const menuList = [
  {id: 0, name: '활동', isClick: true},
  {id: 1, name: '참여중인 함께', isClick: false},
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [showAlert, setShowAlert] = useState(false);

  const radioBoxSortData = [
    {
      label: '거리 가까운 순',
      value: 'distance',
    },
    {
      label: '참가자 많은 순',
      value: 'participant',
    },
    {
      label: '최신 등록 순',
      value: 'registration',
    },
    {
      label: '모집마감 임박 순',
      value: 'deadline',
    },
  ];

  return (
    <ProfilePresenter
      navigation={navigation}
      showAlert={showAlert}
      setShowAlert={setShowAlert}
      menuList={menuList}
      radioBoxSortData={radioBoxSortData}
    />
  );
};
