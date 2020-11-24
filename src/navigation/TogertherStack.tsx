import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Alarm from '../components/Alarm';
import Search from '../components/Search';
import TogetherContainer from '../screens/Together/TogetherContainer';
import TogetherSearchContainer from '../screens/Together/togetherSearch/TogetherSearchContainer';
import TogetherOpenContainer from '../screens/Together/togetherOpen/TogetherOpenContainer';
import TogetherDetailContainer from '../screens/Together/TogetherDetail/TogetherDetailContainer';

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
      <Stack.Screen name="togetherMain" component={TogetherContainer} />
      <Stack.Screen name="togetherSearch" component={TogetherSearchContainer} />
      <Stack.Screen name="togetherOpen" component={TogetherOpenContainer} />
      <Stack.Screen name="togetherDetail" component={TogetherDetailContainer} />
    </Stack.Navigator>
  );
};
