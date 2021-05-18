import React, {useContext, useEffect} from 'react';
import RecordPresenter from './RecordPresenter';
import {checkPermission, configure, requestPermission} from 'react-native-location';
import AsyncStorage from '@react-native-community/async-storage';
import RecordContext2, {IRecordContext2} from '../../module/context/RecordContext2';

interface IProps {
  navigation: any;
}
export default ({navigation}: IProps) => {
  const {onChangeSettingActivity} = useContext(RecordContext2) as IRecordContext2;
  const confirmUserLocation = async () => {
    const checkPermissionResult = await checkPermission({
      ios: 'always',
      android: {detail: 'fine'},
    });
    if (!checkPermissionResult) {
      const result = await requestPermission({
        android: {
          detail: 'fine',
        },
        ios: 'always',
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
        interval: 1000, // Milliseconds
        fastestInterval: 5000, // Milliseconds
        maxWaitTime: 1000, // Milliseconds
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

  const initActivity = async () => {
    const activity = await AsyncStorage.getItem('@activity');
    if (activity) {
      onChangeSettingActivity(JSON.parse(activity));
    }
  };

  useEffect(() => {
    confirmUserLocation();
    const unsubscribe = navigation.addListener('focus', () => {
      initActivity();
    });

    return unsubscribe;
  }, []);

  return <RecordPresenter navigation={navigation} />;
};
