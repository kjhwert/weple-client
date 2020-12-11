import React, {createContext, useState} from 'react';
import {IUser} from '../../module/type/user';
import {userApi} from '../../module/api';
import AsyncStorage from '@react-native-community/async-storage';

const UserContext = createContext({});

export const UserContextProvider = ({children}: IProps) => {
  const [loginUser, setLoginUser] = useState({
    access_token: '',
    id: 0,
    image: '',
    name: '',
    nickName: '',
    email: '',
    password: '',
  });

  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });

  const onChangeLogin = (e) => {
    const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name;
    const value = e.nativeEvent.text;
    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const login = async () => {
    const loginData = await userApi.login(loginState);
    console.log('loginContext:', loginData);
    if (loginData.statusCode !== 201) {
      console.log('로그인 실패');
      return false;
    }
    console.log('로그인 성공');
    setLoginUserInfo(loginData);

    setLoginState({...loginState, email: '', password: ''});
    return true;
  };

  const setLoginUserInfo = (loginData) => {
    setLoginUser(loginData);
  };

  return (
    <UserContext.Provider
      value={{loginUser, onChangeLogin, login, setLoginUserInfo}}>
      {children}
    </UserContext.Provider>
  );
};

export interface IUserContext {
  createUser: IUser;
}

export default UserContext;
