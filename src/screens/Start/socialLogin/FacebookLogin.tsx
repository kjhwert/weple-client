import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const handleFacebookButtonPress = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        // throw 'User cancelled the login process';
      }

      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
        data.refreshToken,
      );
      console.log('facebook Data:', data);
      // console.log('facebook accessToken:', data.accessToken);

      const {user} = await auth().signInWithCredential(facebookCredential);
      console.log('facebook userData:', user);

      navigation.navigate('signUpNickname');
    } catch (error) {
      console.error(error);
    }
    navigation.goBack();
  };

  useEffect(() => {
    handleFacebookButtonPress();
  }, []);

  return <></>;
};
