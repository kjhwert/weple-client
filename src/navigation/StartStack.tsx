import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from '../screens/login/LoginContainer';
import FacebookLogin from '../screens/login/socialLogin/FacebookLogin';
import GoogleLogin from '../screens/login/socialLogin/GoogleLogin';
import KakaoLogin from '../screens/login/socialLogin/KakaoLogin';
import SignUpEmailContainer from '../screens/Start/SignUp/SignUpEmailContainer';
import PersonalDataContainer from '../screens/Start/PersonalData/PersonalDataContainer';
import WelcomeContainer from '../screens/Start/Welcome/WelcomeContainer';
import SignUpNicknameContainer from '../screens/Start/SignUp/SignUpNicknameContainer';
import StartAlarmSetContainer from '../screens/Start/startAlarmSet/StartAlarmSetContainer';
import PasswordContainer from '../screens/login/password/PasswordContainer';
import SignUpPasswordContainer from '../screens/Start/SignUp/SignUpPasswordContainer';
import BottomTab from './BottomTab';
import BackBtn from '../components/BackBtn';
import SocialBackBtn from '../components/SocialBackBtn';
import StartContainer from '../screens/Start/StartContainer';
import SignUpNameContainer from '../screens/Start/SignUp/SignUpNameContainer';
import StartCategoryContainer from '../screens/Start/startCategory/StartCategoryContainer';
import CreateAccountContainer from '../screens/Start/CreateAccount/CreateAccountContainer';
import {RecordContextProvider} from '../module/context/RecordContext';
import SocialNicknameContainer from '../screens/Start/SignUp/SocialNicknameContainer';
import FacebookCreate from '../screens/Start/socialCreate/FacebookCreate';
import GoogleCreate from '../screens/Start/socialCreate/GoogleCreate';
import KakaoCreate from '../screens/Start/socialCreate/KakaoCreate';
import RecordFinishContainer from '../screens/Record/RecordFinishContainer';

const Stack = createStackNavigator();

export default () => {
  return (
    <RecordContextProvider>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          headerLeft: () => <BackBtn navigation={navigation} />,
        })}>
        <Stack.Screen
          options={{headerShown: false}}
          name="start"
          component={StartContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="createAccount"
          component={CreateAccountContainer}
        />
        <Stack.Screen
          options={({route, navigation}) => ({
            headerTitle: '땀나 로그인하기',
            headerLeft: () => <BackBtn navigation={navigation} route={route} />,
          })}
          name="login"
          component={LoginContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="facebookLogin"
          component={FacebookLogin}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="googleLogin"
          component={GoogleLogin}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="kakaoLogin"
          component={KakaoLogin}
        />
        <Stack.Screen
          options={{
            headerTitle: '비밀번호 찾기',
          }}
          name="password"
          component={PasswordContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '이메일로 가입하기',
          }}
          name="signUpEmail"
          component={SignUpEmailContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '비밀번호 설정하기',
          }}
          name="signUpPassword"
          component={SignUpPasswordContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '닉네임 설정하기',
          }}
          name="signUpNickname"
          component={SignUpNicknameContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '이름 입력하기',
          }}
          name="signUpName"
          component={SignUpNameContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '관심 카테고리',
          }}
          name="startCategory"
          component={StartCategoryContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '개인정보 수집동의',
          }}
          name="personalData"
          component={PersonalDataContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '알림 선택',
          }}
          name="startAlarmSet"
          component={StartAlarmSetContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '시작하기',
          }}
          name="welcome"
          component={WelcomeContainer}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="bottomTab"
          component={BottomTab}
        />
        <Stack.Screen
          options={({route, navigation}) => ({
            headerTitle: '닉네임 설정하기',
            headerLeft: () => (
              <SocialBackBtn navigation={navigation} route={route} />
            ),
          })}
          name="socialNickname"
          component={SocialNicknameContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="signUpFacebook"
          component={FacebookCreate}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="signUpGoogle"
          component={GoogleCreate}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
          }}
          name="signUpKakao"
          component={KakaoCreate}
        />
      </Stack.Navigator>
    </RecordContextProvider>
  );
};
