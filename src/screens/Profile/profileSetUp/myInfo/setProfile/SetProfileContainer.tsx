import React, {useState, useEffect, useContext} from 'react';
import SetProfilePresenter from './SetProfilePresenter';
import {userApi} from '../../../../../module/api';
import UserContext from '../../../../../module/context/UserContext';
import AlertContext from '../../../../../module/context/AlertContext';
import CheckAlert from '../../../../../components/CheckAlert';
import ImagePicker from 'react-native-image-picker';
import {Platform} from 'react-native';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {getUserId, changeProfileImage, changeProfileData}: any = useContext(UserContext);
  const {setAlertVisible}: any = useContext(AlertContext);
  const clearAlert = () => {
    setAlertVisible();
  };

  const [isActive, setIsActive] = useState(true);
  const [profileData, setProfileData] = useState({
    nickName: '',
    description: '',
    activeFlag: 0,
  });

  const onChangeProfile = (e) => {
    const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name;
    const value = e.nativeEvent.text;
    setProfileData({
      ...profileData,
      [name]: value,
      activeFlag: profileData.nickName.length,
    });
    if (name === 'nickName') {
      setIsActive(false);
    }
  };

  const getProfileInfo = async () => {
    const id = await getUserId();
    const {data} = await userApi.getProfile(id);
    setProfileData({
      ...profileData,
      nickName: data.user.nickName ? data.user.nickName : '',
      description: data.user.description ? data.user.description : '',
    });
  };

  const hasNickName = async () => {
    if (profileData.nickName.length <= 0 || profileData.nickName.indexOf(' ') === 0) {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '사용하실 수 없는 닉네임입니다.',
            description: '다른 닉네임을 사용하세요!',
          }}
          checked={() => {
            clearAlert();
          }}
        />,
      );
    }
    const {message, statusCode} = await userApi.hasNickName(profileData.nickName);
    if (statusCode === 200) {
      setIsActive(true);
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'check',
            title: message,
            description: '계속 진행하세요.',
          }}
          checked={() => {
            clearAlert();
          }}
        />,
      );
    } else {
      setIsActive(false);
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: message,
            description: '다른 닉네임을 사용하세요.',
          }}
          checked={() => {
            clearAlert();
          }}
        />,
      );
    }
  };

  const profileInfoChange = async () => {
    const requestData = {
      nickName: profileData.nickName,
      description: profileData.description,
    };

    const {message, statusCode} = await userApi.putProfile(requestData);
    if (statusCode !== 201) {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: message,
            description: '다른 닉네임을 사용하세요.',
          }}
          checked={() => {
            clearAlert();
          }}
        />,
      );
    } else {
      changeProfileData(profileData.nickName, profileData.description);
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'check',
            title: message,
            description: '',
          }}
          checked={() => {
            clearAlert();
            navigation.navigate('profileActiveMain');
          }}
        />,
      );
    }
  };

  const showPicker = () => {
    const options = {storageOptions: {skipBackup: true, path: 'image'}};
    ImagePicker.launchImageLibrary(options, async ({uri, type, fileName, didCancel, error}) => {
      if (didCancel) {
        // console.log('사용자가 취소하였습니다.');
        return;
      } else if (error) {
        // console.log('ImagePicker Error:', error);
        return;
      }
      const imgFormData = new FormData();
      imgFormData.append('image', {
        name: fileName ? fileName : 'profile.jpeg',
        type: type,
        uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
      });
      // 이미지 업로드
      const {data, statusCode} = await userApi.userImage(imgFormData);
      if (statusCode !== 201) {
      } else {
        changeProfileImage(data.image);
      }
    });
  };

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
      showPicker={showPicker}
    />
  );
};
