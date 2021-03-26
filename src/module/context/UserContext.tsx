import React, {createContext, ReactNode, useState, useEffect, useContext} from 'react';
import {userApi} from '../../module/api';
import AsyncStorage from '@react-native-community/async-storage';
import {BASE_URL} from '../../module/common';
import AlertContext from './AlertContext';
import {localNotificationService} from '../LocalNotificationService';
import {fcmServices} from '../FCMService';

const UserContext = createContext({});

interface IProps {
  children: ReactNode;
}

export const UserContextProvider = ({children}: IProps) => {
  const {setWarningAlertVisible}: any = useContext(AlertContext);
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

  const [deviceToken, setDeviceToken] = useState('');

  const onChangeEmail = (text: string) => {
    setLoginUser({...loginUser, email: text});
  };

  const onChangePassword = (text: string) => {
    setLoginUser({...loginUser, password: text});
  };

  const login = async (navigation: any) => {
    setLoading(true);
    if (loginUser.email.length <= 0 || loginUser.password.length <= 0) {
      return setWarningAlertVisible('로그인에 실패했습니다.', '아이디 혹은 비밀번호를 입력해주세요.');
    }

    const requestLogin = {
      email: loginUser.email,
      password: loginUser.password,
    };
    const result = await userApi.login(requestLogin);
    if (result.statusCode !== 201) {
      return setWarningAlertVisible('로그인에 실패했습니다.', result.message);
    }

    await setLoginUserData(result);
    setLoading(false);
    navigation.navigate('bottomTab');
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
      await setLoginUserData(responseLogin);
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
      await setLoginUserData(responseSocial);
      setLoading(false);
      return true;
    }
  };

  const setLoginUserData = async (loginData: any) => {
    setLoginUser(Object.assign(loginUser, loginData));
    await setAsyncStorage('@user', JSON.stringify(Object.assign(loginUser, loginData)));
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

  const snsUserData = (email: string, nickName: string, name: string, socialUid: string) => {
    setCreateUser({
      ...createUser,
      email,
      name,
      nickName,
      socialUid,
    });
  };

  const [gender, setGender] = useState<null | string>(null);
  const [age, setAge] = useState<null | number>(null);

  const changeGender = (value: string) => {
    setGender(value);
  };

  const changeAgeGroup = (value: number) => {
    setAge(value);
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
      deviceToken: deviceToken,
      gender,
      ageGroup: age,
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

  const changeProfileImage = async (imageData) => {
    const changeData = {
      ...loginUser,
      image: imageData,
    };
    setLoginUser(changeData);
    await setAsyncStorage('@user', JSON.stringify(changeData));
  };

  const changeProfileData = async (nickName: string, description: string) => {
    const changeData = {
      ...loginUser,
      nickName,
      description,
    };
    setLoginUser(changeData);
    await setAsyncStorage('@user', JSON.stringify(changeData));
  };

  const getProfileUri = () => {
    return {uri: `${BASE_URL}/${loginUser.image ? loginUser.image : 'public/user/no_profile.png'}`};
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

  const userFollow = async (userId: number) => {
    return await userApi.follow(userId);
  };

  const onRegister = async (token: string) => {
    setDeviceToken(token);
    if (loginUser.id !== 0) {
      return await userApi.registerUserToken(token);
    }
  };

  const onNotification = (notify) => {
    const options = {
      soundName: 'default',
      playSound: true,
    };

    localNotificationService.showNotification(0, notify.title, notify.body, notify, options);
  };

  const onOpenNotification = (notify) => {
    console.log('[App] onOpenNotification: ', notify);
  };

  useEffect(() => {
    setIsLoginActive({emailFlag: loginUser.email?.length > 0, passwordFlag: loginUser.password?.length > 0});
    setIsLoginBtnActive(loginUser.email?.length > 0 && loginUser.password?.length > 0);

    fcmServices.registerAppWithFCM();
    fcmServices.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);
    return () => {
      fcmServices.unRegister();
      localNotificationService.unregister();
    };
  }, [loginUser]);

  return (
    <UserContext.Provider
      value={{
        loading,
        isLoginActive,
        isLoginBtnActive,
        loginUser,
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
        userFollow,
        onChangeEmail,
        onChangePassword,
        changeGender,
        changeAgeGroup,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
