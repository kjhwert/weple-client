import React, {useState, useEffect} from 'react';
import SignUpPasswordPresenter from './SignUpPasswordPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
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
    if (
      userPassword.password1.length <= 0 ||
      userPassword.password2.length <= 0
    ) {
      setUserPassword({...userPassword, activeFlag1: -1, activeFlag2: -1});
      return false;
    }
    if (userPassword.password1 !== userPassword.password2) {
      setUserPassword({...userPassword, activeFlag1: -1, activeFlag2: -1});
      return false;
    }
    return true;
  };

  useEffect(() => {
    setIsActive(
      userPassword.password1.length > 0 && userPassword.password2.length > 0,
    );
  });

  return (
    <SignUpPasswordPresenter
      navigation={navigation}
      userPassword={userPassword}
      userPasswordChange1={userPasswordChange1}
      userPasswordChange2={userPasswordChange2}
      userPasswordValidation={userPasswordValidation}
      isActive={isActive}
    />
  );
};
