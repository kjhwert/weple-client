import React, {useState, useEffect, useContext} from 'react';
import KakaoLogins, {KAKAO_AUTH_TYPES} from '@react-native-seoul/kakao-login';
import UserContext from '../../../module/context/UserContext';

if (!KakaoLogins) {
  console.error('Module is Not Linked');
}

const logCallback = (log, callback) => {
  callback;
};

const TOKEN_EMPTY = 'token has not fetched';
const PROFILE_EMPTY = {
  id: 'profile has not fetched',
  email: 'profile has not fetched',
  profile_image_url: '',
  nickname: 'nickName has not fetched',
};
interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {socialLogin}: any = useContext(UserContext);

  const [loginLoading, setLoginLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [token, setToken] = useState(TOKEN_EMPTY);
  const [profile, setProfile] = useState(PROFILE_EMPTY);

  const kakaoLogin = () => {
    logCallback('Login Start', setLoginLoading(true));
    KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account])
      .then((result) => {
        setToken(result.accessToken);
        console.log(result);
        logCallback(`Login Finished:${JSON.stringify(result)}`, setLoginLoading(false));
        getProfile();
      })
      .catch((err) => {
        if (err.code === 'E_CANCELLED_OPERATION') {
          logCallback(`Login Cancelled:${err.message}`, setLoginLoading(false));
          navigation.goBack();
        } else {
          logCallback(`Login Failed:${err.code} ${err.message}`, setLoginLoading(false));
          navigation.navigate('login');
        }
      });
  };

  const getProfile = async () => {
    logCallback('Get Profile Start', setProfileLoading(true));
    try {
      const result = await KakaoLogins.getProfile();
      setProfile(result);
      if (result.email == null || result.email.length <= 0) {
        navigation.navigate('createAccount');
        return;
      }
      logCallback(`Get Profile Finished:${JSON.stringify(result)}`, setProfileLoading(false));
      (await socialLogin(result.email, result.id)) ? navigation.navigate('bottomTab') : navigation.navigate('login');
    } catch (err) {
      logCallback(`Get Profile Failed:${err.code} ${err.message}`, setProfileLoading(false));
      navigation.navigate('login');
    }
  };

  useEffect(() => {
    kakaoLogin();
  }, []);

  return <></>;
};
