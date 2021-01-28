import React, {useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import UserContext from '../../../module/context/UserContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {snsUserData}: any = useContext(UserContext);

  const handleFacebookButtonPress = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        navigation.navigate('createAccount');
        return;
      }

      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        navigation.navigate('createAccount');
        return;
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      const {user} = await auth().signInWithCredential(facebookCredential);
      snsUserData(user.email, user.displayName, user.displayName, user.uid);
      navigation.navigate('socialNickname');
    } catch (error) {
      console.error(error);
      navigation.navigate('createAccount');
    }
  };

  useEffect(() => {
    handleFacebookButtonPress();
  }, []);

  return <></>;
};
