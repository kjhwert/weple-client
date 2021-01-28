import React, {useContext, useEffect, useState} from 'react';
import FriendLikePresenter from './FriendLikePresenter';
import {feedApi} from '../../../../module/api';
import AlertContext from '../../../../module/context/AlertContext';
import CheckAlert from '../../../../components/CheckAlert';
import UserContext from '../../../../module/context/UserContext';

const member = [
  {
    id: 0,
    image: require('../../../../assets/profile_1.png'),
    name: 'GilDong',
    isFollow: true,
  },
  {
    id: 1,
    image: require('../../../../assets/profile_2.png'),
    name: 'Benjamin',
    isFollow: true,
  },
  {
    id: 2,
    image: require('../../../../assets/follower_2.png'),
    name: 'Jamin',
    isFollow: false,
  },
];

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);
  const {userFollow}: any = useContext(UserContext);
  const [users, setUsers] = useState([]);

  const getLikeUsers = async () => {
    const {statusCode, message, data} = await feedApi.showLikeUsers(route.params.id);
    if (statusCode !== 200) {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '데이터 조회에 실패했습니다.',
            description: message,
          }}
        />,
      );
    }
    setUsers(data);
  };

  const userFollowAction = async (userId: number) => {
    const {statusCode, message} = await userFollow(userId);
    if (statusCode !== 201) {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '팔로우 수정에 실패했습니다.',
            description: message,
          }}
        />,
      );
    }
    await getLikeUsers();
  };

  useEffect(() => {
    getLikeUsers();
  }, []);

  return <FriendLikePresenter users={users} userFollowAction={userFollowAction} />;
};
