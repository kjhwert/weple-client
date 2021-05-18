import React, {useState, useContext, useEffect} from 'react';
import SignUpNicknamePresenter from './SignUpNicknamePresenter';
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

  const clearAlertFrame = () => {
    setAlertFrame({
      ...alertFrame,
      showAlert: false,
    });
  };

  const userNickChange = (e) => {
    const value = e.nativeEvent.text;
    setUserNick({
      ...userNick,
      data: value,
      activeFlag: value.length,
    });
    setIsActive(false);
  };

  const hasNickName = async () => {
    const limitLength = userNick.data.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, '$&$1$2').length;
    if (limitLength > 30) {
      setAlertFrame({showAlert: true, usable: false});
      return;
    }
    if (userNick.data.length <= 0 || userNick.data.indexOf(' ') === 0) {
      setAlertFrame({showAlert: true, usable: false});
      return;
    }

    const data = await userApi.hasNickName(userNick.data);
    if (data.statusCode === 200) {
      setAlertFrame({showAlert: true, usable: true});
      setIsActive(true);
      return;
    } else {
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
    <SignUpNicknamePresenter
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
