import React, {useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import UserContext from '../../../module/context/UserContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {socialLogin}: any = useContext(UserContext);

  const handleFacebookButtonPress = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        navigation.navigate('login');
        return;
      }

      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        navigation.navigate('login');
        return;
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      const {user} = await auth().signInWithCredential(facebookCredential);
      (await socialLogin(user.email, user.uid)) ? navigation.navigate('bottomTab') : navigation.navigate('login');
    } catch (error) {
      console.error(error);
      navigation.navigate('login');
    }
  };

  useEffect(() => {
    handleFacebookButtonPress();
  }, []);

  return <></>;
};
