import React, {useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedStack from '../navigation/FeedStack';
import TogetherStack from '../navigation/TogetherStack';
import RecordStack from '../navigation/RecordStack';
import ProfileStack from '../navigation/ProfileStack';
import {Image, Linking} from 'react-native';
import FeedContext from '../module/context/FeedContext';
import RecordContext2, {IRecordContext2} from '../module/context/RecordContext2';

const Tab = createBottomTabNavigator();
const tabActiveColor = '#007bf1';
const tabInActiveColor = '#000';

export default ({navigation}: any) => {
  const {
    state: {
      settings: {tabBarVisible},
    },
  } = useContext(RecordContext2) as IRecordContext2;
  const {tabBarVisible: feedTabBar}: any = useContext(FeedContext);

  useEffect(() => {
    const getUrl = async () => {
      const initUrl = await Linking.getInitialURL();
      if (initUrl === null) {
        return;
      }

      if (initUrl.includes('together')) {
        const path = initUrl.split('/');
        navigation.navigate('together', {id: path[path.length - 1], name: 'togetherDetail'});
      }

      if (initUrl.includes('feed')) {
        const path = initUrl.split('/');
        navigation.navigate('feed', {id: path[path.length - 1], name: 'activeDetail'});
      }
    };

    getUrl();
  }, []);

  return (
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
          tabBarLabel: '??????',
          tabBarVisible: feedTabBar,
        }}
        name="feed"
        component={FeedStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '??????',
        }}
        name="together"
        component={TogetherStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '??????',
          tabBarVisible,
        }}
        name="record"
        component={RecordStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '?????????',
        }}
        name="profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};
