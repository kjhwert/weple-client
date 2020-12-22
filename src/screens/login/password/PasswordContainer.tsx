import React, {useState, useEffect, useContext} from 'react';
import PasswordPresenter from './PasswordPresenter';
import UserContext from '../../../module/context/UserContext';
import {userApi} from '../../../module/api';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {createUser}: any = useContext(UserContext);

  const [isActive, setIsActive] = useState(false);
  const [userEmail, setUserEmail] = useState({
    data: '',
    activeFlag: 0,
  });

  const [showAlert, setShowAlert] = useState(false);

  const alertFrame = (showFlag) => {
    setShowAlert(showFlag);
  };

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
    const passwordInfoData = await userApi.passwordForget(emailRequest);
    console.log('passwordInfoData:', passwordInfoData);
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
      showAlert={showAlert}
      alertFrame={alertFrame}
      passwordInfoMail={passwordInfoMail}
    />
  );
};
