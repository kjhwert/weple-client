import React, {useEffect} from 'react';
import RecordPresenter from './RecordPresenter';
import {checkPermission, configure, requestPermission} from 'react-native-location';

interface IProps {
  navigation: any;
}
export default ({navigation}: IProps) => {
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

  useEffect(() => {
    confirmUserLocation();
  }, []);

  return <RecordPresenter navigation={navigation} />;
};
