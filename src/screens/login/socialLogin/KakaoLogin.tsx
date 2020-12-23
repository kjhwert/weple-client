import React, {useState, useEffect, useContext} from 'react';
import KakaoLogins, {KAKAO_AUTH_TYPES} from '@react-native-seoul/kakao-login';
import UserContext from '../../../module/context/UserContext';

if (!KakaoLogins) {
  console.error('Module is Not Linked');
}

const logCallback = (log, callback) => {
  console.log(log);
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
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [unlinkLoading, setUnlinkLoading] = useState(false);
  const [token, setToken] = useState(TOKEN_EMPTY);
  const [profile, setProfile] = useState(PROFILE_EMPTY);

  const kakaoLogin = () => {
    logCallback('Login Start', setLoginLoading(true));

    KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account])
      .then((result) => {
        setToken(result.accessToken);

        console.log(KAKAO_AUTH_TYPES.Talk);
        console.log('kakao result:', result);

        logCallback(
          `Login Finished:${JSON.stringify(result)}`,
          setLoginLoading(false),
        );
        getProfile();
      })

      .catch((err) => {
        if (err.code === 'E_CANCELLED_OPERATION') {
          logCallback(`Login Cancelled:${err.message}`, setLoginLoading(false));
          navigation.goBack();
        } else {
          logCallback(
            `Login Failed:${err.code} ${err.message}`,
            setLoginLoading(false),
          );
          navigation.navigate('login');
        }
      });
  };

  const kakaoLogout = () => {
    logCallback('Logout Start', setLogoutLoading(true));

    KakaoLogins.logout()
      .then((result) => {
        setToken(TOKEN_EMPTY);
        setProfile(PROFILE_EMPTY);
        logCallback(`Logout Finished:${result}`, setLogoutLoading(false));
      })
      .catch((err) => {
        logCallback(
          `Logout Failed:${err.code} ${err.message}`,
          setLogoutLoading(false),
        );
      });
  };

  const getProfile = () => {
    logCallback('Get Profile Start', setProfileLoading(true));

    KakaoLogins.getProfile()
      .then((result) => {
        setProfile(result);

        if (result.email == null || result.email.length <= 0) {
          // throw 'Cannot get User Email.';
          navigation.navigate('createAccount');
          return;
        }

        logCallback(
          `Get Profile Finished:${JSON.stringify(result)}`,
          setProfileLoading(false),
        );

        socialLogin(result.email, result.id)
          ? navigation.navigate('bottomTab')
          : navigation.navigate('login');
      })
      .catch((err) => {
        logCallback(
          `Get Profile Failed:${err.code} ${err.message}`,
          setProfileLoading(false),
        );
        navigation.navigate('login');
      });
  };

  const unlinkKakao = () => {
    logCallback('Unlink Start', setUnlinkLoading(true));

    KakaoLogins.unlink()
      .then((result) => {
        setToken(TOKEN_EMPTY);
        setProfile(PROFILE_EMPTY);
        logCallback(`Unlink Finished:${result}`, setUnlinkLoading(false));
      })
      .catch((err) => {
        logCallback(
          `Unlink Failed:${err.code} ${err.message}`,
          setUnlinkLoading(false),
        );
      });
  };

  const {id, email, profile_image_url: photo, nickname} = profile;

  useEffect(() => {
    kakaoLogin();
  }, []);

  return <></>;
};
