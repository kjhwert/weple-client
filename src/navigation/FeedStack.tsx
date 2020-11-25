import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Alarm from '../components/Alarm';
import Search from '../components/Search';
import BackBtn from '../components/BackBtn';
import FeedContainer from '../screens/Feed/FeedContainer';
import FeedSearchContainer from '../screens/Feed/feedSearch/FeedSearchContainer';
import AlarmContainer from '../screens/Feed/Alarm/AlarmContainer';
import EventContainer from '../screens/Feed/EventSlide/EventContainer';
import EventDetailContainer from '../screens/Feed/EventSlide/EventDetailContainer';

const Stack = createStackNavigator();

export default ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerLeft: () => <Search navigation={navigation} />,
        headerRight: () => <Alarm navigation={navigation} />,
        cardStyle: {backgroundColor: '#f4f5fa'},
      }}>
      <Stack.Screen name="feedMain" component={FeedContainer} />
      <Stack.Screen name="feedSearch" component={FeedSearchContainer} />
      <Stack.Screen name="alarmInfo" component={AlarmContainer} />
      <Stack.Screen name="eventAll" component={EventContainer} />
      <Stack.Screen name="eventDetail" component={EventDetailContainer} />
    </Stack.Navigator>
  );
};
