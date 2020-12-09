import React, {useEffect} from 'react';
import PersonalDataPresenter from './PersonalDataPresenter';
import {Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const confirmPermission = async () => {
    if (Platform.OS === 'ios') {
      await request(PERMISSIONS.IOS.LOCATION_ALWAYS).then((result) => {
        if (result === 'granted') {
        }
      });
    }

    if (Platform.OS === 'android') {
      await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
        if (result === 'granted') {
        }
      });
    }
  };

  useEffect(() => {
    confirmPermission();
  }, []);
  return <PersonalDataPresenter navigation={navigation} />;
};
