import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TogetherParticipateContainer from '../screens/Together/TogetherDetail/TogetherParticipateContainer';
import TogetherShareContainer from '../screens/Together/TogetherDetail/TogetherShareContainer';
import TogetherPostIntroduceContainer from '../screens/Together/togetherPost/TogetherPostIntroduceContainer';
import TogetherSearchContainer from '../screens/Together/togetherSearch/TogetherSearchContainer';
import TogetherMemberContainer from '../screens/Together/TogetherDetail/TogetherMemberContainer';
import TogetherPostSubjectContainer from '../screens/Together/togetherPost/TogetherPostSubjectContainer';
import TogetherPostPlaceContainer from '../screens/Together/togetherPost/TogetherPostPlaceContainer';
import Notification from '../components/Notification';
import TogetherPostMethodContainer from '../screens/Together/togetherPost/TogetherPostMethodContainer';
import TogetherPostContainer from '../screens/Together/togetherPost/TogetherPostContainer';
import BackBtn from '../components/BackBtn';
import TogetherOpenContainer from '../screens/Together/togetherOpen/TogetherOpenContainer';
import Search from '../components/Search';
import TogetherContainer from '../screens/Together/TogetherContainer';
import TogetherDeleteContainer from '../screens/Together/TogetherDetail/TogetherDeleteContainer';
import TogetherPostActivityContainer from '../screens/Together/togetherPost/TogetherPostActivityContainer';
import TogetherModifyContainer from '../screens/Together/TogetherDetail/TogetherModifyContainer';
import TogetherDetailContainer from '../screens/Together/TogetherDetail/TogetherDetailContainer';
import TogetherAlarmContainer from '../screens/Together/togetherAlarm/TogetherAlarmContainer';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitleStyle: {
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerLeft: () => <BackBtn navigation={navigation} />,
        headerRight: () => (
          <Notification navigation={navigation} route={route} />
        ),
        cardStyle: { backgroundColor: '#f4f5fa' },
      })}>
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerTitle: '함께',
          headerLeft: () => <Search navigation={navigation} route={route} />,
          cardStyle: { backgroundColor: '#f4f5fa' },
        })}
        name="togetherMain"
        component={TogetherContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '함께 검색결과',
        }}
        name="togetherSearch"
        component={TogetherSearchContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '알림',
        }}
        name="togetherAlarmInfo"
        component={TogetherAlarmContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '함께',
        }}
        name="togetherOpen"
        component={TogetherOpenContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '함께하기',
        }}
        name="togetherDetail"
        component={TogetherDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '함께하기',
        }}
        name="togetherParticipate"
        component={TogetherParticipateContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '함께하기',
        }}
        name="togetherModify"
        component={TogetherModifyContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '함께하기',
        }}
        name="togetherDelete"
        component={TogetherDeleteContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '함께하기 참가인원',
        }}
        name="togetherMember"
        component={TogetherMemberContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '공유하기',
        }}
        name="togetherShare"
        component={TogetherShareContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '함께 개설하기',
        }}
        name="togetherPostSubject"
        component={TogetherPostSubjectContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '함께 개설하기',
        }}
        name="togetherPostIntroduce"
        component={TogetherPostIntroduceContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '함께 개설하기',
        }}
        name="togetherPostPlace"
        component={TogetherPostPlaceContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '함께 개설하기',
        }}
        name="togetherPostmethod"
        component={TogetherPostMethodContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '함께 개설하기',
        }}
        name="togetherPostActivity"
        component={TogetherPostActivityContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '함께하기',
        }}
        name="togetherPost"
        component={TogetherPostContainer}
      />
    </Stack.Navigator>
  );
};
