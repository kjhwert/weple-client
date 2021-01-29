import React, {useContext, useState, useEffect} from 'react';
import ProfilePresenter from './ProfileActivePresenter';
import AlertContext from '../../module/context/AlertContext';
import SortAlert from '../../components/SortAlert';
import UserContext from '../../module/context/UserContext';
import {userApi} from '../../module/api';
import {IProfileUserInfo} from '../../module/type/user';
import Loading from '../../components/Loading';

const menuList = [
  {id: 0, name: '나의 활동', isClick: true},
  {id: 1, name: '내가 참여중인 모임', isClick: false},
];

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {loginUser}: any = useContext(UserContext);
  const {setAlertVisible, setWarningAlertVisible}: any = useContext(AlertContext);
  const [user, setUser] = useState<IProfileUserInfo | null>(null);

  const [profileData, setProfileData] = useState({
    nickName: '',
    description: '',
    image: '',
    feedCount: 0,
    userFollow: 0,
    userFollower: 0,
  });

  const getProfile = async () => {
    const id = route?.params?.id;

    let userId = loginUser.id;
    if (id) {
      userId = id;
    }

    const {data} = await userApi.getProfile(userId);
    setUser(data);
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
    return setAlertVisible(<SortAlert sortType={sortDataType} checked={() => {}} />);
  };

  useEffect(() => {
    getProfile();
  }, [route]);

  return !user ? (
    <Loading />
  ) : (
    <ProfilePresenter
      navigation={navigation}
      user={user}
      profileData={profileData}
      menuList={menuList}
      sortAlert={sortAlert}
    />
  );
};
