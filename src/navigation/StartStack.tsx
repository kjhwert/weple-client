import React, {useEffect} from 'react';
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
import SocialNicknameContainer from '../screens/Start/SignUp/SocialNicknameContainer';
import FacebookCreate from '../screens/Start/socialCreate/FacebookCreate';
import GoogleCreate from '../screens/Start/socialCreate/GoogleCreate';
import KakaoCreate from '../screens/Start/socialCreate/KakaoCreate';
import {Text, View} from 'react-native';
import UserAdditionalContainer from '../screens/Start/UserAdditionalContainer';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerLeft: () => <BackBtn navigation={navigation} />,
        headerRight: () => <View />,
      })}>
      <Stack.Screen options={{headerShown: false}} name="start" component={StartContainer} />
      <Stack.Screen
        options={{
          headerTitle: '',
        }}
        name="createAccount"
        component={CreateAccountContainer}
      />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerTitle: '',
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
          headerTitle: () => <Text style={{textAlign: 'center'}}>???????????? ??????</Text>,
        }}
        name="password"
        component={PasswordContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <Text style={{textAlign: 'center'}}>???????????? ????????????</Text>,
        }}
        name="signUpEmail"
        component={SignUpEmailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <Text style={{textAlign: 'center'}}>???????????? ????????????</Text>,
        }}
        name="signUpPassword"
        component={SignUpPasswordContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <Text style={{textAlign: 'center'}}>????????? ????????????</Text>,
        }}
        name="signUpNickname"
        component={SignUpNicknameContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <Text style={{textAlign: 'center'}}>?????? ????????????</Text>,
        }}
        name="signUpName"
        component={SignUpNameContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <Text style={{textAlign: 'center'}}>?????? ??????</Text>,
        }}
        name="additional"
        component={UserAdditionalContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <Text style={{textAlign: 'center'}}>?????? ????????????</Text>,
        }}
        name="startCategory"
        component={StartCategoryContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <Text style={{textAlign: 'center'}}>???????????? ????????????</Text>,
        }}
        name="personalData"
        component={PersonalDataContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <Text style={{textAlign: 'center'}}>?????? ??????</Text>,
        }}
        name="startAlarmSet"
        component={StartAlarmSetContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <Text style={{textAlign: 'center'}}>????????????</Text>,
        }}
        name="welcome"
        component={WelcomeContainer}
      />
      <Stack.Screen options={{headerShown: false}} name="bottomTab" component={BottomTab} />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerTitle: () => <Text style={{textAlign: 'center'}}>????????? ????????????</Text>,
          headerLeft: () => <SocialBackBtn navigation={navigation} route={route} />,
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
  );
};
