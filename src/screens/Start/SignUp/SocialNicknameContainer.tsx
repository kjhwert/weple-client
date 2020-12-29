import React, {useState, useContext, useEffect} from 'react';
import SocialNicknamePresenter from './SocialNicknamePresenter';
import {userApi} from '../../../module/api';
import UserContext from '../../../module/context/UserContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {createUser, createUserData}: any = useContext(UserContext);

  const [isActive, setIsActive] = useState(false);
  const [userNick, setUserNick] = useState({
    data: '',
    activeFlag: 0,
  });

  const [alertFrame, setAlertFrame] = useState({
    showAlert: false,
    usable: false,
  });

  const userNickChange = (e) => {
    const value = e.nativeEvent.text;
    setUserNick({
      ...userNick,
      data: value,
      activeFlag: value.length,
    });
    setIsActive(false);
  };

  const clearAlertFrame = () => {
    setAlertFrame({
      ...alertFrame,
      showAlert: false,
    });
  };

  // console.log('createUser', createUser);
  const hasNickName = async () => {
    if (userNick.data.length <= 0) {
      setAlertFrame({showAlert: true, usable: false});
      return;
    }

    const data = await userApi.hasNickName(userNick.data);
    if (data.statusCode === 200) {
      console.log('닉네임 사용가능');
      setAlertFrame({showAlert: true, usable: true});
      setIsActive(true);
      return;
    } else {
      console.log('닉네임 중복');
      setAlertFrame({showAlert: true, usable: false});
      setIsActive(false);
      return;
    }
  };

  const createUserNickName = () => {
    createUserData('nickName', userNick.data);
  };

  useEffect(() => {
    setUserNick({
      ...userNick,
      data: createUser.nickName,
    });
  }, []);

  return (
    <SocialNicknamePresenter
      navigation={navigation}
      userNickChange={userNickChange}
      userNick={userNick}
      isActive={isActive}
      alertFrame={alertFrame}
      clearAlertFrame={clearAlertFrame}
      hasNickName={hasNickName}
      createUserNickName={createUserNickName}
    />
  );
};
