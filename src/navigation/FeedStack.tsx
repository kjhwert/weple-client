import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Alarm from '../components/Alarm';
import Search from '../components/Search';
import BackBtn from '../components/BackBtn';
import FeedContainer from '../screens/Feed/FeedContainer';
import ActiveDetailContainer from '../screens/Feed/ActiveDetailContainer';
import FeedPopularityContainer from '../screens/Feed/FeedPopularityContainer';
import FeedRecommendContainer from '../screens/Feed/FeedRecommendContainer';
import FeedSearchContainer from '../screens/Feed/FeedSearch/FeedSearchContainer';
import AlarmContainer from '../screens/Feed/Alarm/AlarmContainer';
import FeedEventDetailContainer from '../screens/Feed/FeedEvent/FeedEventDetailContainer';
import FriendActiveContainer from '../screens/Feed/friendProfile/FriendActiveContainer';
import FriendActiveJoinContainer from '../screens/Feed/friendProfile/FriendActiveJoinContainer';
import FriendCommentContainer from '../screens/Feed/friendProfile/friendSns/FriendCommentContainer';
import FriendFollowerContainer from '../screens/Feed/friendProfile/friendSns/FriendFollowerContainer';
import FriendFollowingContainer from '../screens/Feed/friendProfile/friendSns/FriendFollowingContainer';
import FriendNiceContainer from '../screens/Feed/friendProfile/friendSns/FriendNiceContainer';
import FeedShareContainer from '../screens/Feed/friendProfile/friendSns/FeedShareContainer';

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
        name="feedMain"
        component={FeedContainer}
      />
      <Stack.Screen name="activeDetail" component={ActiveDetailContainer} />
      <Stack.Screen name="feedPopularity" component={FeedPopularityContainer} />
      <Stack.Screen name="feedRecommend" component={FeedRecommendContainer} />
      <Stack.Screen name="feedSearch" component={FeedSearchContainer} />
      <Stack.Screen name="alarmInfo" component={AlarmContainer} />
      <Stack.Screen
        name="feedEventDetail"
        component={FeedEventDetailContainer}
      />
      <Stack.Screen name="friendActive" component={FriendActiveContainer} />
      <Stack.Screen
        name="friendActiveJoin"
        component={FriendActiveJoinContainer}
      />
      <Stack.Screen name="friendComment" component={FriendCommentContainer} />
      <Stack.Screen name="friendFollower" component={FriendFollowerContainer} />
      <Stack.Screen
        name="friendFollowing"
        component={FriendFollowingContainer}
      />
      <Stack.Screen name="friendNice" component={FriendNiceContainer} />
      <Stack.Screen name="friendShare" component={FeedShareContainer} />
    </Stack.Navigator>
  );
};
