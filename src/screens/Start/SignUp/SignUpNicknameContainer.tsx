import React, {useState, useEffect} from 'react';
import SignUpNicknamePresenter from './SignUpNicknamePresenter';
import {userApi} from '../../../module/api';
import {IUser} from '../../../module/type/user';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [isActive, setIsActive] = useState(false);
  const [userNick, setUserNick] = useState({
    data: '',
    activeFlag: 0,
  });

  const [alertFrame, setAlertFrame] = useState({
    showAlert: false,
    usable: false,
  });

  const [nickNameState, setNickNameState] = useState<IUser>({
    nickName: '',
  });

  const userNickChange = (e) => {
    const value = e.nativeEvent.text;
    setUserNick({
      ...userNick,
      data: value,
      activeFlag: value.length,
    });

    setNickNameState({
      ...nickNameState,
      nickName: value,
    });
  };

  const clearAlertFrame = () => {
    setAlertFrame({
      ...alertFrame,
      showAlert: false,
    });
  };

  const hasNickName = async () => {
    const data = await userApi.hasNickName(nickNameState.nickName);
    if (data.statusCode === 200) {
      console.log('닉네임 사용가능');
      setAlertFrame({showAlert: true, usable: true});
      return;
    } else {
      console.log('닉네임 중복');
      setAlertFrame({showAlert: true, usable: false});
      return;
    }
  };

  useEffect(() => {
    setIsActive(userNick.data.length > 0);
  });

  return (
    <SignUpNicknamePresenter
      navigation={navigation}
      userNickChange={userNickChange}
      userNick={userNick}
      isActive={isActive}
      alertFrame={alertFrame}
      clearAlertFrame={clearAlertFrame}
      nickNameState={nickNameState}
      hasNickName={hasNickName}
    />
  );
};
