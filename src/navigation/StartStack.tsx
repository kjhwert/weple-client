import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartContainer from '../screens/Start/StartContainer';
import CreateAccountContainer from '../screens//Start/CreateAccount/CreateAccountContainer';
import LoginContainer from '../screens/login/LoginContainer';
import BottomTab from './BottomTab';
import PasswordContainer from '../screens/login/password/PasswordContainer';
import SignInContainer from '../screens/Start/SignIn/SignInContainer';
import CategoryContainer from '../screens/Start/SignIn/Category/CategoryContainer';
import PersonalDataContainer from '../screens/Start/SignIn/PersonalData/PersonalDataContainer';
import PersonalVideoContainer from '../screens/Start/SignIn/PersonalData/PersonalVideoContainer';
import PersonalCommunityContainer from '../screens/Start/SignIn/PersonalData/PersonalCommunityContainer';
import PersonalAlarmContainer from '../screens/Start/SignIn/PersonalData/PersonalAlarmContainer';
import WelcomeContainer from '../screens/Start/SignIn/Welcome/WelcomeContainer';
import AlarmSetContainer from '../screens/Start/SignIn/alarmSetting/AlarmSetContainer';

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
      <Stack.Screen name="signIn" component={SignInContainer} />
      <Stack.Screen name="category" component={CategoryContainer} />
      <Stack.Screen name="personalData" component={PersonalDataContainer} />
      <Stack.Screen name="personalVideo" component={PersonalVideoContainer} />
      <Stack.Screen
        name="personalCommunity"
        component={PersonalCommunityContainer}
      />
      <Stack.Screen name="personalAlarm" component={PersonalAlarmContainer} />
      <Stack.Screen name="alarmSet" component={AlarmSetContainer} />
      <Stack.Screen name="welcome" component={WelcomeContainer} />
      <Stack.Screen
        options={{headerShown: false}}
        name="bottomTab"
        component={BottomTab}
      />
    </Stack.Navigator>
  );
};
