import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
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
import TogetherAlarmContainer from '../screens/Together/togetherAlarm/TogetherAlarmContainer';
import Search from '../components/Search';
import TogetherContainer from '../screens/Together/TogetherContainer';
import TogetherModifyContainer from '../screens/Together/TogetherDetail/TogetherModifyContainer';
import TogetherCommentContainer from '../screens/Together/TogetherDetail/TogetherCommentContainer';
import TogetherPostActivityContainer from '../screens/Together/togetherPost/TogetherPostActivityContainer';
import TogetherMyDetailContainer from '../screens/Together/TogetherDetail/TogetherMyDetailContainer';
import TogetherDetailContainer from '../screens/Together/TogetherDetail/TogetherDetailContainer';
import TogetherMyTotalListContainer from '../screens/Together/TogetherDetail/TogetherMyTotalListContainer';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation, route}) => ({
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitleStyle: {
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerLeft: () => <BackBtn navigation={navigation} route={route} />,
        headerRight: () => <Notification navigation={navigation} route={route} />,
        cardStyle: {backgroundColor: '#f4f5fa'},
      })}>
      <Stack.Screen
        options={({navigation, route}) => ({
          headerTitle: '모임',
          headerLeft: () => <Search navigation={navigation} route={route} />,
          cardStyle: {backgroundColor: '#f4f5fa'},
        })}
        name="togetherMain"
        component={TogetherContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '모임 검색결과',
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
          headerTitle: '모임',
        }}
        name="togetherMyTotalList"
        component={TogetherMyTotalListContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '모임',
        }}
        name="togetherDetail"
        component={TogetherDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '모임',
        }}
        name="togetherParticipate"
        component={TogetherParticipateContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '모임',
        }}
        name="togetherMyDetail"
        component={TogetherMyDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '모임',
        }}
        name="togetherModify"
        component={TogetherModifyContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '댓글',
        }}
        name="togetherComment"
        component={TogetherCommentContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '모임 참가인원',
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
          headerTitle: '모임 개설하기',
        }}
        name="togetherPostSubject"
        component={TogetherPostSubjectContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '모임 개설하기',
        }}
        name="togetherPostIntroduce"
        component={TogetherPostIntroduceContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '모임 개설하기',
        }}
        name="togetherPostPlace"
        component={TogetherPostPlaceContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '모임 개설하기',
        }}
        name="togetherPostmethod"
        component={TogetherPostMethodContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '모임 개설하기',
        }}
        name="togetherPostActivity"
        component={TogetherPostActivityContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '모임 개설하기',
        }}
        name="togetherPost"
        component={TogetherPostContainer}
      />
    </Stack.Navigator>
  );
};
