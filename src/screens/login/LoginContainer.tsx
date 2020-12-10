import React, {useState} from 'react';
import LoginPresenter from './LoginPresenter';
import {userApi} from '../../module/api';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });

  const login = async () => {
    try {
      const loginData = await userApi(loginState);
      if (loginData.status !== 201) {
        return;
      }
      console.log('로그인 성공');

      setLoginState({...loginState, email: '', password: ''});
    } catch (e) {
      console.log('로그인 실패');
    }
  };

  const onChangeLogin = (e) => {
    const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name;
    const value = e.nativeEvent.text;
    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  return (
    <LoginPresenter
      navigation={navigation}
      login={login}
      loginState={loginState}
      onChangeLogin={onChangeLogin}
    />
  );
};
