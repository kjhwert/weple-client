import React, {useContext, useState, useEffect} from 'react';
import ProfilePresenter from './ProfileActivePresenter';
import AlertContext from '../../module/context/AlertContext';
import SortAlert from '../../components/SortAlert';
import UserContext from '../../module/context/UserContext';
import {userApi} from '../../module/api';

const menuList = [
  {id: 0, name: '나의 활동', isClick: true},
  {id: 1, name: '내가 참여중인 모임', isClick: false},
];

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {getUserId}: any = useContext(UserContext);
  const {setAlertVisible}: any = useContext(AlertContext);
  const clearAlert = () => {
    setAlertVisible();
  };

  const [profileData, setProfileData] = useState({
    nickName: '',
    description: '',
    image: '',
    feedCount: 0,
    userFollow: 0,
    userFollower: 0,
  });

  const getProfileInfo = async () => {
    const id = await getUserId();
    const {data} = await userApi.getProfile(id);
    setProfileData({
      ...profileData,
      nickName: data.user.nickName ? data.user.nickName : '',
      description: data.user.description ? data.user.description : '',
      image: data.user.image ? data.user.image : '',
      feedCount: data.feedCount ? data.feedCount : 0,
      userFollow: data.userFollow ? data.userFollow : 0,
      userFollower: data.userFollower ? data.userFollower : 0,
    });
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

  useEffect(() => {
    getProfileInfo();
  }, []);

  useEffect(() => {
    if (route.params?.refresh) getProfileInfo();
  }, [route.params?.refresh]);

  return (
    <ProfilePresenter navigation={navigation} profileData={profileData} menuList={menuList} sortAlert={sortAlert} />
  );
};
