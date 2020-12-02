import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedStack from '../navigation/FeedStack';
import TogetherStack from '../navigation/TogetherStack';
import RecordStack from '../navigation/RecordStack';
import ProfileStack from '../navigation/ProfileStack';

const Tab = createBottomTabNavigator();

export default ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: '피드',
        }}
        name="feed"
        component={FeedStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '함께',
        }}
        name="together"
        component={TogetherStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '기록',
        }}
        name="record"
        component={RecordStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '프로필',
        }}
        name="profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};
