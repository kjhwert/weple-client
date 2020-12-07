import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SetUpBtn from '../components/SetUpBtn';
import BackBtn from '../components/BackBtn';
import RecordContainer from '../screens/Record/RecordContainer';
import RecordStopContainer from '../screens/Record/RecordStopContainer';
import RecordResumeContainer from '../screens/Record/RecordResumeContainer';
import RecordFinishContainer from '../screens/Record/RecordFinishContainer';
import RecordSetContainer from '../screens/Record/recordSetUp/RecordSetContainer';
import RecordActiveTypeContainer from '../screens/Record/recordSetUp/RecordActiveTypeContainer';
import RecordMapStyleContainer from '../screens/Record/recordStyle/RecordMapStyleContainer';
import RecordMusicContainer from '../screens/Record/recordStyle/RecordMusicContainer';

const Stack = createStackNavigator();

export default ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitleStyle: {
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerLeft: () => <BackBtn navigation={navigation} />,
        headerRight: () => <SetUpBtn navigation={navigation} />,
        cardStyle: {backgroundColor: '#f4f5fa'},
      }}>
      <Stack.Screen name="recordMain" component={RecordContainer} />
      <Stack.Screen name="recordStop" component={RecordStopContainer} />
      <Stack.Screen name="recordResume" component={RecordResumeContainer} />
      <Stack.Screen
        options={{
          headerTitle: '새로운 활동',
        }}
        name="recordFinish"
        component={RecordFinishContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '설정',
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
  );
};
