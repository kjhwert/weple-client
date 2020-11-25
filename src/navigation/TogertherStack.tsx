import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Alarm from '../components/Alarm';
import Search from '../components/Search';
import TogetherContainer from '../screens/Together/TogetherContainer';
import TogetherSearchContainer from '../screens/Together/togetherSearch/TogetherSearchContainer';
import TogetherOpenContainer from '../screens/Together/togetherOpen/TogetherOpenContainer';
import TogetherDetailContainer from '../screens/Together/togetherDetail/TogetherDetailContainer';
import ParticipateContainer from '../screens/Together/togetherDetail/ParticipateContainer';
import TogetherModifyContainer from '../screens/Together/togetherDetail/TogetherModifyContainer';
import MemberContainer from '../screens/Together/togetherDetail/MemberContainer';
import SubjectContainer from '../screens/Together/togetherClubOpen/SubjectContainer';
import IntroduceContainer from '../screens/Together/togetherClubOpen/IntroduceContainer';
import PlaceContainer from '../screens/Together/togetherClubOpen/PlaceContainer';
import MethodContainer from '../screens/Together/togetherClubOpen/MethodContainer';
import ActivityContainer from '../screens/Together/togetherClubOpen/ActivityContainer';
import ClubOpenContainer from '../screens/Together/togetherClubOpen/ClubOpenContainer';

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
      <Stack.Screen name="participate" component={ParticipateContainer} />
      <Stack.Screen name="togetherModify" component={TogetherModifyContainer} />
      <Stack.Screen name="togetherMember" component={MemberContainer} />
      <Stack.Screen name="subject" component={SubjectContainer} />
      <Stack.Screen name="introduce" component={IntroduceContainer} />
      <Stack.Screen name="place" component={PlaceContainer} />
      <Stack.Screen name="method" component={MethodContainer} />
      <Stack.Screen name="clubActivity" component={ActivityContainer} />
      <Stack.Screen name="clubOpen" component={ClubOpenContainer} />
    </Stack.Navigator>
  );
};
