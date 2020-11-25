import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Alarm from '../components/Alarm';
import BackBtn from '../components/BackBtn';
import ProfileContainer from '../screens/Profile/ProfileContainer';

const Stack = createStackNavigator();

export default ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerLeft: () => <BackBtn navigation={navigation} />,
        headerRight: () => <Alarm navigation={navigation} />,
        cardStyle: {backgroundColor: '#f4f5fa'},
      }}>
      <Stack.Screen name="profileMain" component={ProfileContainer} />
    </Stack.Navigator>
  );
};
