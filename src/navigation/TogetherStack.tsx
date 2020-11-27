import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Alarm from '../components/Alarm';
import Search from '../components/Search';
import BackBtn from '../components/BackBtn';
import TogetherContainer from '../screens/Together/TogetherContainer';
import TogetherSearchContainer from '../screens/Together/togetherSearch/TogetherSearchContainer';
import TogetherOpenContainer from '../screens/Together/togetherOpen/TogetherOpenContainer';
import TogetherDetailContainer from '../screens/Together/togetherDetail/TogetherDetailContainer';
import TogetherParticipateContainer from '../screens/Together/togetherDetail/TogetherParticipateContainer';
import TogetherModifyContainer from '../screens/Together/togetherDetail/TogetherModifyContainer';
import TogetherDeleteContainer from '../screens/Together/togetherDetail/TogetherDeleteContainer';
import TogetherMemberContainer from '../screens/Together/togetherDetail/TogetherMemberContainer';
import TogetherPostSubjectContainer from '../screens/Together/togetherPost/TogetherPostSubjectContainer';
import TogetherPostIntroduceContainer from '../screens/Together/togetherPost/TogetherPostIntroduceContainer';
import TogetherPostPlaceContainer from '../screens/Together/togetherPost/TogetherPostPlaceContainer';
import TogetherPostMethodContainer from '../screens/Together/togetherPost/TogetherPostMethodContainer';
import TogetherPostActivityContainer from '../screens/Together/togetherPost/TogetherPostActivityContainer';
import TogetherPostContainer from '../screens/Together/togetherPost/TogetherPostContainer';

const Stack = createStackNavigator();

export default ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerLeft: () => <BackBtn navigation={navigation} />,
        headerRight: () => <Alarm navigation={navigation} />,
        cardStyle: {backgroundColor: '#f4f5fa'},
      }}>
      <Stack.Screen
        options={{
          headerLeft: () => <Search navigation={navigation} />,
          cardStyle: {backgroundColor: '#f4f5fa'},
        }}
        name="togetherMain"
        component={TogetherContainer}
      />
      <Stack.Screen name="togetherSearch" component={TogetherSearchContainer} />
      <Stack.Screen name="togetherOpen" component={TogetherOpenContainer} />
      <Stack.Screen name="togetherDetail" component={TogetherDetailContainer} />
      <Stack.Screen
        name="togetherParticipate"
        component={TogetherParticipateContainer}
      />
      <Stack.Screen name="togetherModify" component={TogetherModifyContainer} />
      <Stack.Screen name="togetherDelete" component={TogetherDeleteContainer} />
      <Stack.Screen name="togetherMember" component={TogetherMemberContainer} />
      <Stack.Screen
        name="togetherPostSubject"
        component={TogetherPostSubjectContainer}
      />
      <Stack.Screen
        name="togetherPostIntroduce"
        component={TogetherPostIntroduceContainer}
      />
      <Stack.Screen
        name="togetherPostPlace"
        component={TogetherPostPlaceContainer}
      />
      <Stack.Screen
        name="togetherPostmethod"
        component={TogetherPostMethodContainer}
      />
      <Stack.Screen
        name="togetherPostActivity"
        component={TogetherPostActivityContainer}
      />
      <Stack.Screen name="togetherPost" component={TogetherPostContainer} />
    </Stack.Navigator>
  );
};
