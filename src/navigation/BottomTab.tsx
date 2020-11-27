import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedStack from '../navigation/FeedStack';
import TogetherStack from '../navigation/TogetherStack';
import RecordStack from '../navigation/RecordStack';
import ProfileStack from '../navigation/ProfileStack';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="feed" component={FeedStack} />
      <Tab.Screen name="together" component={TogetherStack} />
      <Tab.Screen name="record" component={RecordStack} />
      <Tab.Screen name="profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};
