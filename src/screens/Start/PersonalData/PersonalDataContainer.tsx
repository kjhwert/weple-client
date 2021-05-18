import React, {useEffect} from 'react';
import PersonalDataPresenter from './PersonalDataPresenter';
import {Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import {checkPermission, configure, requestPermission} from 'react-native-location';

const slideData = [
  {
    key: '1',
    title: '개인정보에 대해서 (필수)',
    text:
      '개인정보는 위플(weple)의 주요 관심사 중 하나입니다.\n만약 개인정보가 당신에게 중요하다면\n개인정보 정책 조건에 동의하기 전에\n위플이 어떻게 당신의 데이터를 보호하는지 확인하실\n수 있습니다.',
    number: '01',
    image: require('../../../assets/personal_shield.png'),
  },
  {
    key: '2',
    title: '개인 동영상 등등 (필수)',
    text: '당신의 모험을 땀나게 하기 위하여, 경로 및\n사진과 같은 귀하의 개인 데이터를 처리 해야\n합니다.',
    number: '02',
    image: require('../../../assets/personal_camera.png'),
  },
  {
    key: '3',
    title: '경험을 향상하기 (필수)',
    text:
      '우리는 귀하의 익명의 데이터를 이용하여\n귀하의 야외 활동 커뮤니티를 활용하는데 대한\n새로운 혁신을 구축하는 것을 좋아합니다.',
    number: '03',
    image: require('../../../assets/personal_paper.png'),
  },
  {
    key: '4',
    title: '무슨 일이 일어나는지 알기 (필수)',
    text:
      '우리는 중요한 업데이트(새로운 동영상과\n같은)나 나누고 싶은 놀랄 만한 무언가가\n있을 때는 알려드립니다.\n계정 설정에서 알림을 관리할 수 있습니다.',
    number: '04',
    image: require('../../../assets/personal_alarm.png'),
  },
];
interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const confirmCameraAccess = async () => {
    if (Platform.OS === 'ios') {
      await request(PERMISSIONS.IOS.CAMERA).then((result) => {
        if (result === 'granted') {
        }
      });
    }

    if (Platform.OS === 'android') {
      await request(PERMISSIONS.ANDROID.CAMERA).then((result) => {
        if (result === 'granted') {
        }
      });
    }
  };

  const confirmUserLocation = async () => {
    const checkPermissionResult = await checkPermission({
      ios: 'whenInUse',
      android: {detail: 'coarse'},
    });
    if (!checkPermissionResult) {
      const result = await requestPermission({
        android: {
          detail: 'coarse',
        },
        ios: 'whenInUse',
      });
    } else {
      await configure({
        distanceFilter: 0, // Meters
        desiredAccuracy: {
          ios: 'best',
          android: 'highAccuracy',
        },
        // Android only
        androidProvider: 'auto',
        interval: 5000, // Milliseconds
        fastestInterval: 5000, // Milliseconds
        maxWaitTime: 5000, // Milliseconds
        // iOS Only
        activityType: 'other',
        allowsBackgroundLocationUpdates: false,
        headingFilter: 1, // Degrees
        headingOrientation: 'portrait',
        pausesLocationUpdatesAutomatically: false,
        showsBackgroundLocationIndicator: false,
      });
    }
  };

  return (
    <PersonalDataPresenter
      navigation={navigation}
      slideData={slideData}
      confirmCameraAccess={confirmCameraAccess}
      confirmUserLocation={confirmUserLocation}
    />
  );
};
