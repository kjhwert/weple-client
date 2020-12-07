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
import FriendLikeContainer from '../screens/Feed/friendProfile/friendSns/FriendLikeContainer';
import FeedShareContainer from '../screens/Feed/friendProfile/friendSns/FeedShareContainer';

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
        headerRight: () => <Alarm navigation={navigation} />,
        cardStyle: {backgroundColor: '#f4f5fa'},
      }}>
      <Stack.Screen
        options={{
          headerTitle: '피드',
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
      <Stack.Screen
        options={{
          headerTitle: '알림',
        }}
        name="alarmInfo"
        component={AlarmContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '이벤트',
        }}
        name="feedEventDetail"
        component={FeedEventDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '프로필',
        }}
        name="friendActive"
        component={FriendActiveContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '프로필',
        }}
        name="friendActiveJoin"
        component={FriendActiveJoinContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '댓글',
        }}
        name="friendComment"
        component={FriendCommentContainer}
      />
      <Stack.Screen name="friendFollower" component={FriendFollowerContainer} />
      <Stack.Screen
        name="friendFollowing"
        component={FriendFollowingContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '좋아하는 사람들',
        }}
        name="friendLike"
        component={FriendLikeContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '공유하기',
        }}
        name="friendShare"
        component={FeedShareContainer}
      />
    </Stack.Navigator>
  );
};
