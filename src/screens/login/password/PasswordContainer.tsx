import React, {useState, useEffect, useContext} from 'react';
import PasswordPresenter from './PasswordPresenter';
import {userApi} from '../../../module/api';
import UserContext from '../../../module/context/UserContext';
import AlertContext from '../../../module/context/AlertContext';
import CheckAlert from '../../../components/CheckAlert';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {createUser}: any = useContext(UserContext);
  const {setAlertVisible}: any = useContext(AlertContext);

  const [isActive, setIsActive] = useState(false);
  const [userEmail, setUserEmail] = useState({
    data: '',
    activeFlag: 0,
  });

  const userEmailChange = (e) => {
    const value = e.nativeEvent.text;
    setUserEmail({
      ...userEmail,
      data: value,
      activeFlag: value.length,
    });
  };

  const userEmailValidation = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.data)) {
      setUserEmail({...userEmail, activeFlag: -1});
      return false;
    }
    return true;
  };

  const passwordInfoMail = async () => {
    const emailRequest = {
      email: userEmail.data,
    };
    const {statusCode, message} = await userApi.passwordForget(emailRequest);
    if (statusCode !== 201) {
      setIsActive(true);
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: message,
            description: '다시 입력하세요.',
          }}
          checked={() => {}}
        />,
      );
    } else {
      setIsActive(false);
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'check',
            title: message,
            description: '로그인페이지로 이동합니다.',
          }}
          checked={() => {
            navigation.navigate('login');
          }}
        />,
      );
    }
  };

  useEffect(() => {
    setIsActive(userEmail.data.length > 0);
  }, [userEmail]);

  useEffect(() => {
    setUserEmail({
      ...userEmail,
      data: createUser.email,
    });
  }, []);

  return (
    <PasswordPresenter
      navigation={navigation}
      userEmailChange={userEmailChange}
      userEmailValidation={userEmailValidation}
      userEmail={userEmail}
      isActive={isActive}
      passwordInfoMail={passwordInfoMail}
    />
  );
};
