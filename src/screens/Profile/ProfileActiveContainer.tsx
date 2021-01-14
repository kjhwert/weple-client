import React, {useContext} from 'react';
import ProfilePresenter from './ProfileActivePresenter';
import AlertContext from '../../module/context/AlertContext';
import SortAlert from '../../components/SortAlert';

const menuList = [
  {id: 0, name: '나의 활동', isClick: true},
  {id: 1, name: '내가 참여중인 모임', isClick: false},
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);
  const clearAlert = () => {
    setAlertVisible();
  };

  const sortDataType = [
    {
      label: '거리 가까운 순',
      value: 'distance',
    },
    {
      label: '최신 등록 순',
      value: 'createdAt',
    },
  ];

  const sortAlert = () => {
    return setAlertVisible(
      <SortAlert
        sortType={sortDataType}
        checked={() => {
          clearAlert();
        }}
      />,
    );
  };

  return <ProfilePresenter navigation={navigation} menuList={menuList} sortAlert={sortAlert} />;
};
