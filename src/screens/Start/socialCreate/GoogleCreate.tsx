import React, {useEffect, useContext} from 'react';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import UserContext from '../../../module/context/UserContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {snsUserData}: any = useContext(UserContext);

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
      // console.log('google user:', userInfo.user);

      snsUserData(userInfo.user.email, userInfo.user.name, userInfo.user.name, userInfo.user.id);
      navigation.navigate('socialNickname');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      navigation.navigate('createAccount');
    }
  };

  useEffect(() => {
    initGoogleLogin();
    signIn();
  }, []);

  return <></>;
};
