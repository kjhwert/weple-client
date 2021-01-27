import React, {createContext, ReactNode, useState, useEffect} from 'react';
import {userApi} from '../../module/api';
import AsyncStorage from '@react-native-community/async-storage';
import {BASE_URL} from '../../module/common';

const UserContext = createContext({});

interface IProps {
  children: ReactNode;
}

export const UserContextProvider = ({children}: IProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoginActive, setIsLoginActive] = useState({
    emailFlag: false,
    passwordFlag: false,
  });
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

  const onChangeLogin = (e) => {
    const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name;
    const value = e.nativeEvent.text;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  const login = async () => {
    setLoading(true);
    if (loginUser.email.length <= 0 || loginUser.password.length <= 0) {
      showAlertFrame('이메일 또는 비밀번호를');
      return false;
    }

    const requstLogin = {
      email: loginUser.email,
      password: loginUser.password,
    };
    const responseLogin = await userApi.login(requstLogin);
    if (responseLogin.statusCode !== 201) {
      showAlertFrame(responseLogin.message);
      return false;
    } else {
      setLoginUserData(responseLogin);
      setLoading(false);
      return true;
    }
  };

  const paramLogin = async (email: string, password: string) => {
    setLoading(true);
    if (email.length <= 0 || password.length <= 0) {
      showAlertFrame('이메일 또는 비밀번호를');
      return false;
    }

    const requstLogin = {
      email: email,
      password: password,
    };
    const responseLogin = await userApi.login(requstLogin);
    if (responseLogin.statusCode !== 201) {
      showAlertFrame(responseLogin.message);
      return false;
    } else {
      setLoginUserData(responseLogin);
      setLoading(false);
      return true;
    }
  };

  const socialLogin = async (Email: string, Uid: string) => {
    setLoading(true);
    const requestSocial = {
      email: Email,
      socialUid: Uid,
    };

    const responseSocial = await userApi.socialLogin(requestSocial);

    if (responseSocial.statusCode !== 201) {
      showAlertFrame(responseSocial.message);
      return false;
    } else {
      setLoginUserData(responseSocial);
      setLoading(false);
      return true;
    }
  };

  const setLoginUserData = (loginData: any) => {
    setLoginUser(Object.assign(loginUser, loginData));
    setAsyncStorage('@user', JSON.stringify(Object.assign(loginUser, loginData)));
  };

  const autoLogin = async () => {
    setLoading(true);
    const autoLoginData = await getAsyncStorage();
    if (autoLoginData) {
      setLoginUser(autoLoginData);
      setLoading(false);
      return true;
    } else {
      setLoading(false);
      return false;
    }
  };

  const userLogout = async () => {
    await delAsyncStorage('@user');
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

  const emailUserData = (emailData: string, isSocial: boolean) => {
    setCreateUser({
      ...createUser,
      email: emailData,
      isSocialLogin: isSocial,
    });
  };

  const snsUserData = (emailData: string, nickNameData: string, nameData: string, UidData: string) => {
    setCreateUser({
      ...createUser,
      email: emailData,
      name: nameData,
      nickName: nickNameData,
      socialUid: UidData,
    });
  };

  const join = async () => {
    const requestCreate = {
      email: createUser.email,
      password: createUser.password,
      nickName: createUser.nickName,
      name: createUser.name,
      socialUid: createUser.socialUid,
      isSocialLogin: createUser.isSocialLogin,
      activityCategories: createUser.activityCategories,
    };

    const responseCreat = await userApi.create(requestCreate);
    if (responseCreat.statusCode !== 201) {
      showAlertFrame(responseCreat.message);
      return false;
    } else {
      if (createUser.isSocialLogin) {
        return await socialLogin(requestCreate.email, requestCreate.socialUid);
      } else {
        return await paramLogin(requestCreate.email, requestCreate.password);
      }
    }
  };

  const getUserId = async () => {
    const user = await AsyncStorage.getItem('@user');
    if (user) {
      const {id} = JSON.parse(user);
      return id;
    }
  };

  const changeProfileImage = (imageData) => {
    const changeData = {
      ...loginUser,
      image: imageData,
    };
    setLoginUser(changeData);
    setAsyncStorage('@user', JSON.stringify(changeData));
  };

  const changeProfileData = (nickName: string, description: string) => {
    const changeData = {
      ...loginUser,
      nickName: nickName,
      description: description,
    };
    setLoginUser(changeData);
    setAsyncStorage('@user', JSON.stringify(changeData));
  };

  const getProfileUri = () => {
    if (loginUser.image) {
      return {uri: BASE_URL + '/' + loginUser.image};
    } else {
      return require('../../assets/bottomTab_profile.png');
    }
  };

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

  const setAsyncStorage = async (name: string, data: any) => {
    await AsyncStorage.setItem(name, data, () => {});
  };

  const getAsyncStorage = async () => {
    const result = await AsyncStorage.getItem('@user');
    return JSON.parse(result);
  };

  const delAsyncStorage = async (name: string) => {
    await AsyncStorage.removeItem(name);
  };

  useEffect(() => {
    setIsLoginActive({emailFlag: loginUser.email?.length > 0, passwordFlag: loginUser.password?.length > 0});
  }, [loginUser]);

  useEffect(() => {
    setIsLoginBtnActive(loginUser.email?.length > 0 && loginUser.password?.length > 0);
  }, [loginUser]);

  return (
    <UserContext.Provider
      value={{
        loading,
        isLoginActive,
        isLoginBtnActive,
        loginUser,
        onChangeLogin,
        login,
        socialLogin,
        setLoginUserData,
        autoLogin,
        userLogout,
        createUser,
        createUserData,
        emailUserData,
        snsUserData,
        join,
        getUserId,
        changeProfileImage,
        changeProfileData,
        getProfileUri,
        alertFrame,
        clearAlertFrame,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
