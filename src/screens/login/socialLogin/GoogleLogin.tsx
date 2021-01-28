import React, {useEffect, useContext} from 'react';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import UserContext from '../../../module/context/UserContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {socialLogin}: any = useContext(UserContext);

  const initGoogleLogin = () => {
    GoogleSignin.configure({
      webClientId: '615602388074-uod12neekqb0k08g17ahl6e4duoorgml.apps.googleusercontent.com',
      iosClientId: '615602388074-732v1212hnvo5ni2uc6qvobm628tclsk.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      (await socialLogin(userInfo.user.email, userInfo.user.id))
        ? navigation.navigate('bottomTab')
        : navigation.navigate('login');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
      navigation.navigate('login');
    }
  };

  useEffect(() => {
    initGoogleLogin();
    signIn();
  }, []);

  return <></>;
};
