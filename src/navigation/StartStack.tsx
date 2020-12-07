import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from '../screens/login/LoginContainer';
import SignUpEmailContainer from '../screens/Start/SignUp/SignUpEmailContainer';
import PersonalDataContainer from '../screens/Start/PersonalData/PersonalDataContainer';
import WelcomeContainer from '../screens/Start/Welcome/WelcomeContainer';
import SignUpNicknameContainer from '../screens/Start/SignUp/SignUpNicknameContainer';
import StartAlarmSetContainer from '../screens/Start/startAlarmSet/StartAlarmSetContainer';
import PasswordContainer from '../screens/login/password/PasswordContainer';
import SignUpPasswordContainer from '../screens/Start/SignUp/SignUpPasswordContainer';
import PersonalCommunityContainer from '../screens/Start/PersonalData/PersonalCommunityContainer';
import BottomTab from './BottomTab';
import StartContainer from '../screens/Start/StartContainer';
import PersonalAlarmContainer from '../screens/Start/PersonalData/PersonalAlarmContainer';
import SignUpNameContainer from '../screens/Start/SignUp/SignUpNameContainer';
import PersonalVideoContainer from '../screens/Start/PersonalData/PersonalVideoContainer';
import StartCategoryContainer from '../screens/Start/startCategory/StartCategoryContainer';
import CreateAccountContainer from '../screens/Start/CreateAccount/CreateAccountContainer';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}>
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
        options={{
          headerTitle: '땀나 로그인하기',
        }}
        name="login"
        component={LoginContainer}
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
          headerTitle: '개인정보 수집동의',
        }}
        name="personalVideo"
        component={PersonalVideoContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '개인정보 수집동의',
        }}
        name="personalCommunity"
        component={PersonalCommunityContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '개인정보 수집동의',
        }}
        name="personalAlarm"
        component={PersonalAlarmContainer}
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
    </Stack.Navigator>
  );
};
