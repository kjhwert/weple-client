import React, {useState, useEffect, useContext} from 'react';
import SetPasswordPresenter from './SetPasswordPresenter';
import {userApi} from '../../../../../module/api';
import AlertContext from '../../../../../module/context/AlertContext';
import CheckAlert from '../../../../../components/CheckAlert';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);
  const clearAlert = () => {
    setAlertVisible();
  };
  const [isActive, setIsActive] = useState(false);
  const [userPassword, setUserPassword] = useState({
    oldPassword: '',
    newPassword1: '',
    newPassword2: '',
    activeFlag1: 0,
    activeFlag2: 0,
    activeFlag3: 0,
  });

  const passwordChange = async () => {
    if (userPassword.oldPassword === userPassword.newPassword1) {
      setUserPassword({
        ...userPassword,
        activeFlag1: -1,
        activeFlag2: -1,
        activeFlag3: -1,
      });
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '패스워드 변경실패',
            description: '기존 비밀번호와 새 비밀번호가 같습니다.',
          }}
          checked={() => {
            clearAlert();
          }}
        />,
      );
    }

    if (userPassword.newPassword1 !== userPassword.newPassword2) {
      setUserPassword({
        ...userPassword,
        activeFlag2: -1,
        activeFlag3: -1,
      });
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '패스워드 변경실패',
            description: '신규 비밀번호가 일치하지 않습니다.',
          }}
          checked={() => {
            clearAlert();
          }}
        />,
      );
    }

    const passwordRequest = {
      oldPassword: userPassword.oldPassword,
      newPassword: userPassword.newPassword1,
    };

    const {message, statusCode} = await userApi.passwordChange(passwordRequest);
    if (statusCode !== 201) {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '패스워드 변경실패',
            description: message,
          }}
          checked={() => {
            clearAlert();
          }}
        />,
      );
    } else {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'check',
            title: '패스워드 변경성공',
            description: message,
          }}
          checked={() => {
            clearAlert();
            navigation.navigate('profileSetting');
          }}
        />,
      );
    }
  };

  const oldPasswordChange = (e) => {
    const value = e.nativeEvent.text;
    setUserPassword({
      ...userPassword,
      oldPassword: value,
      activeFlag1: value.length,
    });
  };

  const newPasswordChange1 = (e) => {
    const value = e.nativeEvent.text;
    setUserPassword({
      ...userPassword,
      newPassword1: value,
      activeFlag2: value.length,
    });
  };

  const newPasswordChange2 = (e) => {
    const value = e.nativeEvent.text;
    setUserPassword({
      ...userPassword,
      newPassword2: value,
      activeFlag3: value.length,
    });
  };

  useEffect(() => {
    setIsActive(
      userPassword.oldPassword.length > 0 &&
        userPassword.newPassword1.length > 0 &&
        userPassword.newPassword2.length > 0,
    );
  }, [userPassword]);

  return (
    <SetPasswordPresenter
      navigation={navigation}
      userPassword={userPassword}
      isActive={isActive}
      oldPasswordChange={oldPasswordChange}
      newPasswordChange1={newPasswordChange1}
      newPasswordChange2={newPasswordChange2}
      passwordChange={passwordChange}
    />
  );
};
