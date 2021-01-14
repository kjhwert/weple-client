import React, {useState, useEffect, useContext} from 'react';
import SignUpPasswordPresenter from './SignUpPasswordPresenter';
import UserContext from '../../../module/context/UserContext';
import AlertContext from '../../../module/context/AlertContext';
import CheckAlert from '../../../components/CheckAlert';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);
  const clearAlert = () => {
    setAlertVisible();
  };
  const {createUser, createUserData}: any = useContext(UserContext);

  const [isActive, setIsActive] = useState(false);
  const [userPassword, setUserPassword] = useState({
    password1: '',
    password2: '',
    activeFlag1: 0,
    activeFlag2: 0,
  });

  const userPasswordChange1 = (e) => {
    const value = e.nativeEvent.text;
    setUserPassword({
      ...userPassword,
      password1: value,
      activeFlag1: value.length,
    });
  };

  const userPasswordChange2 = (e) => {
    const value = e.nativeEvent.text;
    setUserPassword({
      ...userPassword,
      password2: value,
      activeFlag2: value.length,
    });
  };

  const userPasswordValidation = () => {
    if (userPassword.password1.length <= 0 || userPassword.password2.length <= 0) {
      setUserPassword({...userPassword, activeFlag1: -1, activeFlag2: -1});
      return false;
    }
    if (userPassword.password1 !== userPassword.password2) {
      setUserPassword({...userPassword, activeFlag1: -1, activeFlag2: -1});
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '입력하신 비밀번호가 다릅니다.',
            description: '다시 입력해주세요.',
          }}
          checked={() => {
            clearAlert();
          }}
        />,
      );
    }

    if (/\s/g.test(userPassword.password1)) {
      setUserPassword({...userPassword, activeFlag1: -1, activeFlag2: -1});
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '비밀번호는 빈칸없이 입력해주세요.',
            description: '다시 입력해주세요.',
          }}
          checked={() => {
            clearAlert();
          }}
        />,
      );
    }
    return true;
  };

  const createUserPassword = () => {
    createUserData('password', userPassword.password1);
  };

  useEffect(() => {
    setIsActive(userPassword.password1.length > 0 && userPassword.password2.length > 0);
  }, [userPassword]);

  useEffect(() => {
    setUserPassword({
      ...userPassword,
      password1: createUser.password,
      password2: createUser.password,
    });
  }, []);

  return (
    <SignUpPasswordPresenter
      navigation={navigation}
      userPassword={userPassword}
      userPasswordChange1={userPasswordChange1}
      userPasswordChange2={userPasswordChange2}
      userPasswordValidation={userPasswordValidation}
      isActive={isActive}
      createUserPassword={createUserPassword}
    />
  );
};
