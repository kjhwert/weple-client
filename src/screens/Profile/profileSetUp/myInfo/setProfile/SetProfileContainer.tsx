import React, {useState, useEffect} from 'react';
import SetProfilePresenter from './SetProfilePresenter';
import {userApi} from '../../../../../module/api';
import AsyncStorage from '@react-native-community/async-storage';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [isActive, setIsActive] = useState(false);

  const [profileData, setProfileData] = useState({
    nickName: '',
    description: '',
    activeFlag: 0,
  });

  const [alertFrame, setAlertFrame] = useState({
    showAlert: false,
    usable: false,
  });

  const clearAlertFrame = () => {
    setAlertFrame({
      ...alertFrame,
      showAlert: false,
    });
  };

  const onChangeProfile = (e) => {
    const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name;
    const value = e.nativeEvent.text;
    setProfileData({
      ...profileData,
      [name]: value,
      activeFlag: profileData.nickName.length,
    });
  };

  const getUserId = async () => {
    const user = await AsyncStorage.getItem('@user');
    if (user) {
      const {id} = JSON.parse(user);
      console.log(id);
      return id;
    }
  };

  const getProfileInfo = async () => {
    const id = await getUserId();
    const profileInfoData = await userApi.getProfile(id);
    setProfileData({
      ...profileData,
      nickName: profileInfoData.data.user.nickName,
      description: profileInfoData.data.user.description,
    });
  };

  const hasNickName = async () => {
    if (profileData.nickName.length <= 0) {
      setAlertFrame({showAlert: true, usable: false});
      return;
    }
    const data = await userApi.hasNickName(profileData.nickName);
    if (data.statusCode === 200) {
      setAlertFrame({showAlert: true, usable: true});
      setIsActive(true);
      return;
    } else {
      setAlertFrame({showAlert: true, usable: false});
      setIsActive(false);
      return;
    }
  };

  const profileInfoChange = async () => {
    const requestData = {
      nickName: profileData.nickName,
      description: profileData.description,
    };
    const profileInfoData = await userApi.putProfile(requestData);
    if (profileInfoData.statusCode !== 201) {
      console.log('변경 실패');
      return false;
    } else {
      console.log('변경 완료');
      return true;
    }
  };

  useEffect(() => {
    setIsActive(
      profileData.nickName.length > 0 && profileData.description.length >= 0,
    );
  }, [profileData]);

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <SetProfilePresenter
      navigation={navigation}
      profileData={profileData}
      onChangeProfile={onChangeProfile}
      profileInfoChange={profileInfoChange}
      isActive={isActive}
      hasNickName={hasNickName}
      alertFrame={alertFrame}
      clearAlertFrame={clearAlertFrame}
    />
  );
};
