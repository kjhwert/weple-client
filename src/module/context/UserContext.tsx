import React, {createContext, ReactNode, useState, useEffect} from 'react';
import {IUser} from '../../module/type/user';
import {userApi} from '../../module/api';
import AsyncStorage from '@react-native-community/async-storage';

const UserContext = createContext({});

interface IProps {
  children: ReactNode;
}

export const UserContextProvider = ({children}: IProps) => {
  ////////////////////////////////////////////////////////////////
  // LOGIN CONTEXT
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
      showAlertFrame(loginData.message);
      return false;
    }
    console.log('로그인 성공');
    setLoginUserData(loginData);

    setLoginState({...loginState, email: '', password: ''});
    setLoading(false);
    return true;
  };

  const socialLogin = async (Email: string, Uid: string) => {
    // setLoading(true);
    const socialRequest = {
      email: Email,
      socialUid: Uid,
    };
    console.log('socialRequest:', socialRequest);

    const socialLoginData = await userApi.socialLogin(socialRequest);
    console.log('socialLoginData:', socialLoginData);

    if (socialLoginData.statusCode !== 201) {
      console.log('소셜로그인 실패');
      showAlertFrame(socialLoginData.message);
      return false;
    }
    console.log('소셜 로그인 성공');
    setSocialLoginUserData(socialLoginData);

    // setLoading(false);
    return true;
  };

  // 자동로그인을 위한 userData
  const setLoginUserData = (loginData: any) => {
    setLoginUser(loginData);
    setAsyncStorage('@user', JSON.stringify(loginData));
  };

  const setSocialLoginUserData = (socialLoginData: any) => {
    setLoginUser(socialLoginData);
    setAsyncStorage('@user', JSON.stringify(socialLoginData));
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
    setLoginUser({
      access_token: '',
      id: 0,
      image: '',
      name: '',
      nickName: '',
      email: '',
      password: '',
      description: '',
    });
  };

  ////////////////////////////////////////////////////////////////
  // CREAT USER CONTEXT
  const [createUser, setCreateUser] = useState({
    email: '',
    password: '',
    nickName: '',
    name: '',
    socialUid: '',
    isSocialLogin: true,
    activityCategories: [0],
  });

  const createUserData = (name: string, signUpData: any) => {
    setCreateUser({
      ...createUser,
      [name]: signUpData,
    });
  };

  const emailUserData = (emailData, isSocial) => {
    setCreateUser({
      ...createUser,
      email: emailData,
      isSocialLogin: isSocial,
    });
  };

  const snsUserData = (emailData, nickNameData, nameData, UidData) => {
    setCreateUser({
      ...createUser,
      email: emailData,
      name: nameData,
      nickName: nickNameData,
      socialUid: UidData,
    });
  };

  const join = async () => {
    console.log('joinMembership request', createUser);

    const joinData = await userApi.create(createUser);
    console.log('joinMembership response', joinData);

    if (joinData.statusCode !== 201) {
      console.log('회원가입 실패');
      showAlertFrame(joinData.message);
      return false;
    }
    console.log('회원가입 성공');
    await setLoginUserData(createUser);
    return true;
  };

  ////////////////////////////////////////////////////////////////
  // COMMON CONTEXT
  const [alertFrame, setAlertFrame] = useState({
    showAlert: false,
    message: '',
  });

  const showAlertFrame = (alertMessage: string) => {
    setAlertFrame({
      ...alertFrame,
      showAlert: true,
      message: alertMessage,
    });
  };

  const clearAlertFrame = () => {
    setAlertFrame({
      ...alertFrame,
      showAlert: false,
      message: '',
    });
  };

  const setAsyncStorage = (name, data) => {
    AsyncStorage.setItem(name, data, () => {
      console.log('user정보 저장완료');
    });
  };

  const getAccess_token = async () => {
    const result = await AsyncStorage.getItem('@user');
    return JSON.parse(result);
  };

  useEffect(() => {
    setIsLoginBtnActive(
      loginState.email.length > 0 && loginState.password.length > 0,
    );
  }, [loginState]);

  return (
    <UserContext.Provider
      value={{
        loading,
        isLoginBtnActive,
        loginUser,
        onChangeLogin,
        login,
        socialLogin,
        setLoginUserData,
        setSocialLoginUserData,
        autoLogin,
        userLogout,
        createUser,
        createUserData,
        emailUserData,
        snsUserData,
        join,
        alertFrame,
        clearAlertFrame,
        getAccess_token,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
