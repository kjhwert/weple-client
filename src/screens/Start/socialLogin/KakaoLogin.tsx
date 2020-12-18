import React, {useState, useEffect} from 'react';
import KakaoLogins, {KAKAO_AUTH_TYPES} from '@react-native-seoul/kakao-login';

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
  const [loginLoading, setLoginLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
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
        console.log('kakao accessToken:', result.accessToken);
        console.log('kakao scopes:', result.scopes);
        console.log('kakao refreshToken:', result.refreshToken);

        getProfile();
        logCallback(
          `Login Finished:${JSON.stringify(result)}`,
          setLoginLoading(false),
        );
        getProfile();

        navigation.navigate('signUpNickname');
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
          navigation.goBack();
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
        logCallback(
          `Get Profile Finished:${JSON.stringify(result)}`,
          setProfileLoading(false),
        );
      })
      .catch((err) => {
        logCallback(
          `Get Profile Failed:${err.code} ${err.message}`,
          setProfileLoading(false),
        );
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
