import React, {useContext, useEffect, useState} from 'react';
import FriendLikePresenter from './FriendLikePresenter';
import {feedApi} from '../../../../module/api';
import AlertContext from '../../../../module/context/AlertContext';
import UserContext from '../../../../module/context/UserContext';
import FeedContext from '../../../../module/context/FeedContext';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const {userFollowAndChangeFollowStatus}: any = useContext(FeedContext);
  const {userFollow}: any = useContext(UserContext);
  const [users, setUsers] = useState<Array<any>>([]);

  const getLikeUsers = async () => {
    const {statusCode, message, data} = await feedApi.showLikeUsers(route.params.id);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    const result = data.map((user: any) => {
      user.isUserFollowed = Number(user.isUserFollowed);

      return user;
    });
    setUsers(result);
  };

  const userFollowAction = async (userId: number) => {
    const {statusCode, message} = await userFollow(userId);
    if (statusCode !== 201) {
      return setWarningAlertVisible('팔로우 수정에 실패했습니다.', message);
    }

    const newUsers = users.map((user: any) => {
      if (userId === user.userId) {
        user.isUserFollowed = !user.isUserFollowed;
      }
      return user;
    });
    userFollowAndChangeFollowStatus(userId);
    setUsers(newUsers);
  };

  useEffect(() => {
    getLikeUsers();
  }, [route]);

  return <FriendLikePresenter users={users} userFollowAction={userFollowAction} />;
};
