import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BackBtn from '../components/BackBtn';
import RecordContainer from '../screens/Record/RecordContainer';
import RecordFinishContainer from '../screens/Record/RecordFinishContainer';
import RecordSetContainer from '../screens/Record/recordSetUp/RecordSetContainer';
import RecordActiveTypeContainer from '../screens/Record/recordSetUp/RecordActiveTypeContainer';
import RecordMapStyleContainer from '../screens/Record/recordStyle/RecordMapStyleContainer';
import RecordMusicContainer from '../screens/Record/recordStyle/RecordMusicContainer';
import RecordSetupBtn from '../components/RecordSetupBtn';
import {View} from 'react-native';
import {RecordContextProvider} from '../module/context/RecordContext';

const Stack = createStackNavigator();

export default () => {
  return (
    <RecordContextProvider>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          headerTitleStyle: {
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
          },
          headerLeft: () => <BackBtn navigation={navigation} />,
          headerRight: () => <RecordSetupBtn navigation={navigation} />,
          cardStyle: {backgroundColor: '#f4f5fa'},
        })}>
        <Stack.Screen
          name="recordMain"
          component={RecordContainer}
          options={{headerLeft: () => <View />, headerTitle: '기록하기'}}
        />
        <Stack.Screen
          options={{
            headerRight: () => <View />,
            headerTitle: '새로운 활동',
          }}
          name="recordFinish"
          component={RecordFinishContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '설정',
            headerRight: () => <View />,
          }}
          name="recordSet"
          component={RecordSetContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '활동 유형',
          }}
          name="recordActiveType"
          component={RecordActiveTypeContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '지도 선택',
          }}
          name="recordMapStyle"
          component={RecordMapStyleContainer}
        />
        <Stack.Screen
          options={{
            headerTitle: '음악 선택',
          }}
          name="recordMusic"
          component={RecordMusicContainer}
        />
      </Stack.Navigator>
    </RecordContextProvider>
  );
};
