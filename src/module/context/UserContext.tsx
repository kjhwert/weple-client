import React, {createContext, useState, useEffect} from 'react';
import {IUser} from '../../module/type/user';
import {userApi} from '../../module/api';
import AsyncStorage from '@react-native-community/async-storage';

const UserContext = createContext({});

export const UserContextProvider = ({children}: IProps) => {
  const [isLoginBtnActive, setIsLoginBtnActive] = useState(false);

  const [loginUser, setLoginUser] = useState({
    access_token: '',
    id: 0,
    image: '',
    name: '',
    nickName: '',
    email: '',
    password: '',
    description: '',
  });

  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });

  const [createUser, setCreateUser] = useState<IUser>({
    email: '',
    password: '',
    nickName: '',
    name: '',
    activityCategories: [0],
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
    setLoginUser(loginData);

    setAsyncStorage('@user', JSON.stringify(loginData));

    setLoginState({...loginState, email: '', password: ''});
    return true;
  };

  const setAsyncStorage = (name, data) => {
    AsyncStorage.setItem(name, data, () => {
      console.log('유저 닉네임 저장 완료');
    });
  };

  const getAccess_token = async () => {
    const result = await AsyncStorage.getItem('@user');
    return JSON.parse(result);
  };

  const autoLogin = async () => {
    const autoLoginData = await getAccess_token();
    if (autoLoginData) {
      console.log('자동 로그인 성공');
      setLoginUser(autoLoginData);
      return true;
    } else {
      console.log('자동 로그인 실패');
      return false;
    }
  };
  // console.log('loginUser:', loginUser);

  const userLogout = async () => {
    await AsyncStorage.removeItem('@user');
    setLoginUser(null);
  };

  useEffect(() => {
    setIsLoginBtnActive(
      loginState.email.length > 0 && loginState.password.length > 0,
    );
  }, [loginState]);

  return (
    <UserContext.Provider
      value={{
        loginUser,
        onChangeLogin,
        login,
        createUser,
        setCreateUser,
        getAccess_token,
        autoLogin,
        userLogout,
        isLoginBtnActive,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export interface IUserContext {
  createUser: IUser;
}

export default UserContext;
