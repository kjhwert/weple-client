import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SetBtn from '../components/SetBtn';
import BackBtn from '../components/BackBtn';
import ProfileActiveContainer from '../screens/Profile/ProfileActiveContainer';
import ProfileActiveJoinContainer from '../screens/Profile/ProfileActiveJoinContainer';
import FollowerMemberContainer from '../screens/Profile/snsMember/FollowerMemberContainer';
import FollowingMemberContainer from '../screens/Profile/snsMember/FollowingMemberContainer';
import NiceMemberContainer from '../screens/Profile/snsMember/NiceMemberContainer';
import CommentMemberContainer from '../screens/Profile/snsMember/CommentMemberContainer';

const Stack = createStackNavigator();

export default ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerLeft: () => <BackBtn navigation={navigation} />,
        headerRight: () => <SetBtn navigation={navigation} />,
        cardStyle: {backgroundColor: '#f4f5fa'},
      }}>
      <Stack.Screen
        name="profileActiveMain"
        component={ProfileActiveContainer}
      />
      <Stack.Screen
        name="profileActiveJoin"
        component={ProfileActiveJoinContainer}
      />
      <Stack.Screen name="followerMember" component={FollowerMemberContainer} />
      <Stack.Screen
        name="followingMember"
        component={FollowingMemberContainer}
      />
      <Stack.Screen name="niceMember" component={NiceMemberContainer} />
      <Stack.Screen name="commentMember" component={CommentMemberContainer} />
    </Stack.Navigator>
  );
};
