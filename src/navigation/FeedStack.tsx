import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Alarm from '../components/Alarm';
import Search from '../components/Search';
import BackBtn from '../components/BackBtn';
import FeedContainer from '../screens/Feed/FeedContainer';
import FeedSearchContainer from '../screens/Feed/FeedSearch/FeedSearchContainer';
import AlarmContainer from '../screens/Feed/Alarm/AlarmContainer';
import FeedEventContainer from '../screens/Feed/FeedEvent/FeedEventContainer';
import FeedEventDetailContainer from '../screens/Feed/FeedEvent/FeedEventDetailContainer';

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
      <Stack.Screen
        options={{
          headerLeft: () => <Search navigation={navigation} />,
          cardStyle: {backgroundColor: '#f4f5fa'},
        }}
        name="feedMain"
        component={FeedContainer}
      />
      <Stack.Screen name="feedSearch" component={FeedSearchContainer} />
      <Stack.Screen name="alarmInfo" component={AlarmContainer} />
      <Stack.Screen name="feedEvent" component={FeedEventContainer} />
      <Stack.Screen
        name="feedEventDetail"
        component={FeedEventDetailContainer}
      />
    </Stack.Navigator>
  );
};
