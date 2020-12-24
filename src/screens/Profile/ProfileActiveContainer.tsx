import React, {useState, useContext} from 'react';
import ProfilePresenter from './ProfileActivePresenter';
import UserContext from '../../module/context/UserContext';

const menuList = [
  {id: 0, name: '나의 활동', isClick: true},
  {id: 1, name: '내가 참여중인 함께', isClick: false},
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {loginUser}: any = useContext(UserContext);

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
      alertFrame={alertFrame}
      menuList={menuList}
      radioBoxSortData={radioBoxSortData}
      loginUser={loginUser}
    />
  );
};
