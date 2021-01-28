import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedStack from '../navigation/FeedStack';
import TogetherStack from '../navigation/TogetherStack';
import RecordStack from '../navigation/RecordStack';
import ProfileStack from '../navigation/ProfileStack';
import {Image} from 'react-native';
import RecordContext from '../module/context/RecordContext';
import {FeedContextProvider} from '../module/context/FeedContext';

const Tab = createBottomTabNavigator();
const tabActiveColor = '#007bf1';
const tabInActiveColor = '#000';

export default () => {
  const {tabBarVisible}: any = useContext(RecordContext);
  return (
    <FeedContextProvider>
      <Tab.Navigator
        initialRouteName="feed"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            const tabIcon = () => {
              if (route.name === 'feed') {
                return require('../assets/bottomTab_feed.png');
              } else if (route.name === 'together') {
                return require('../assets/bottomTab_together.png');
              } else if (route.name === 'record') {
                return require('../assets/bottomTab_record.png');
              } else if (route.name === 'profile') {
                return require('../assets/bottomTab_profile.png');
              }
            };
            return (
              <Image
                source={tabIcon()}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  marginBottom: 5,
                  tintColor: focused ? tabActiveColor : tabInActiveColor,
                }}
              />
            );
          },
        })}
        tabBarOptions={{
          style: {zIndex: 110},
          inactiveTintColor: '#000',
          activeTintColor: '#007bf1',
          tabStyle: {
            margin: 5,
          },
          labelStyle: {fontSize: 11, fontWeight: '600'},
        }}>
        <Tab.Screen
          options={{
            tabBarLabel: '피드',
          }}
          name="feed"
          component={FeedStack}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '모임',
          }}
          name="together"
          component={TogetherStack}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '기록',
            tabBarVisible: tabBarVisible,
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
    </FeedContextProvider>
  );
};
