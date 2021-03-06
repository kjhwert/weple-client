import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
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
import SelectCategoryComponent from '../components/SelectCategoryComponent';

const Stack = createStackNavigator();

export default ({navigation, route}: any) => {
  useEffect(() => {
    console.log(route);
    if (route?.params?.name === 'togetherDetail') {
      navigation.navigate('togetherDetail', route.params);
    }
  }, []);
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
          headerTitle: '??????',
          headerLeft: () => <Search navigation={navigation} route={route} />,
          cardStyle: {backgroundColor: '#f4f5fa'},
        })}
        name="togetherMain"
        component={TogetherContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '?????? ????????????',
        }}
        name="togetherSearch"
        component={TogetherSearchContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '???????????? ??????',
        }}
        name="togetherSearchCategories"
        component={SelectCategoryComponent}
      />
      <Stack.Screen
        options={{
          headerTitle: '??????',
        }}
        name="togetherAlarmInfo"
        component={TogetherAlarmContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '??????',
        }}
        name="togetherMyTotalList"
        component={TogetherMyTotalListContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '??????',
        }}
        name="togetherDetail"
        component={TogetherDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '??????',
        }}
        name="togetherMyDetail"
        component={TogetherMyDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '??????',
        }}
        name="togetherModify"
        component={TogetherModifyContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '??????',
        }}
        name="togetherComment"
        component={TogetherCommentContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '?????? ????????????',
        }}
        name="togetherMember"
        component={TogetherMemberContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '????????????',
        }}
        name="togetherShare"
        component={TogetherShareContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '?????? ????????????',
        }}
        name="togetherPostSubject"
        component={TogetherPostSubjectContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '?????? ????????????',
        }}
        name="togetherPostIntroduce"
        component={TogetherPostIntroduceContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '?????? ????????????',
        }}
        name="togetherPostPlace"
        component={TogetherPostPlaceContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '?????? ????????????',
        }}
        name="togetherPostmethod"
        component={TogetherPostMethodContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '?????? ????????????',
        }}
        name="togetherPostActivity"
        component={TogetherPostActivityContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '?????? ????????????',
        }}
        name="togetherPost"
        component={TogetherPostContainer}
      />
    </Stack.Navigator>
  );
};
