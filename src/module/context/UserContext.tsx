import React, {createContext, useState, useEffect} from 'react';
import {IUser} from '../../module/type/user';
import {userApi} from '../../module/api';
import AsyncStorage from '@react-native-community/async-storage';

const UserContext = createContext({});

export const UserContextProvider = ({children}: IProps) => {
  const [loading, setLoading] = useState<boolean>(true);

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
    setLoading(true);
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
    setLoading(false);
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
    setLoading(true);
    const autoLoginData = await getAccess_token();
    if (autoLoginData) {
      console.log('자동 로그인 성공');
      setLoginUser(autoLoginData);
      setLoading(false);
      return true;
    } else {
      console.log('자동 로그인 실패');
      setLoading(false);
      return false;
    }
  };

  const userLogout = async () => {
    await AsyncStorage.removeItem('@user');
    setLoginUser(null);
  };

  const createUserData = (name, signUpData) => {
    setCreateUser({
      ...createUser,
      [name]: signUpData,
    });
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
        createUserData,
        getAccess_token,
        autoLogin,
        userLogout,
        isLoginBtnActive,
        loading,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export interface IUserContext {
  createUser: IUser;
  loading: boolean;
}

export default UserContext;
