import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartContainer from '../screens/Start/StartContainer';
import CreateAccountContainer from '../screens//Start/CreateAccount/CreateAccountContainer';
import LoginContainer from '../screens/Login/LoginContainer';
import BottomTab from './BottomTab';
import PasswordContainer from '../screens/Login/password/PasswordContainer';
import SignUpEmailContainer from '../screens/Start/SignUp/SignUpEmailContainer';
import SignUpPasswordContainer from '../screens/Start/SignUp/SignUpPasswordContainer';
import SignUpNicknameContainer from '../screens/Start/SignUp/SignUpNicknameContainer';
import SignUpNameContainer from '../screens/Start/SignUp/SignUpNameContainer';
import StartCategoryContainer from '../screens/Start/startCategory/StartCategoryContainer';
import PersonalDataContainer from '../screens/Start/PersonalData/PersonalDataContainer';
import PersonalVideoContainer from '../screens/Start/PersonalData/PersonalVideoContainer';
import PersonalCommunityContainer from '../screens/Start/PersonalData/PersonalCommunityContainer';
import PersonalAlarmContainer from '../screens/Start/PersonalData/PersonalAlarmContainer';
import WelcomeContainer from '../screens/Start/Welcome/WelcomeContainer';
import StartAlarmSetContainer from '../screens/Start/startAlarmSet/StartAlarmSetContainer';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="start"
        component={StartContainer}
      />
      <Stack.Screen name="createAccount" component={CreateAccountContainer} />
      <Stack.Screen name="login" component={LoginContainer} />
      <Stack.Screen name="password" component={PasswordContainer} />
      <Stack.Screen name="signUpEmail" component={SignUpEmailContainer} />
      <Stack.Screen name="signUpPassword" component={SignUpPasswordContainer} />
      <Stack.Screen name="signUpNickname" component={SignUpNicknameContainer} />
      <Stack.Screen name="signUpName" component={SignUpNameContainer} />
      <Stack.Screen name="startCategory" component={StartCategoryContainer} />
      <Stack.Screen name="personalData" component={PersonalDataContainer} />
      <Stack.Screen name="personalVideo" component={PersonalVideoContainer} />
      <Stack.Screen
        name="personalCommunity"
        component={PersonalCommunityContainer}
      />
      <Stack.Screen name="personalAlarm" component={PersonalAlarmContainer} />
      <Stack.Screen name="startAlarmSet" component={StartAlarmSetContainer} />
      <Stack.Screen name="welcome" component={WelcomeContainer} />
      <Stack.Screen
        options={{headerShown: false}}
        name="bottomTab"
        component={BottomTab}
      />
    </Stack.Navigator>
  );
};
