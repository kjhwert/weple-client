import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeedShareContainer from '../screens/Feed/friendProfile/friendSns/FeedShareContainer';
import FeedAlarmContainer from '../screens/Feed/feedAlarm/FeedAlarmContainer';
import FriendActiveContainer from '../screens/Feed/friendProfile/FriendActiveContainer';
import ActiveDetailContainer from '../screens/Feed/ActiveDetailContainer';
import FeedContainer from '../screens/Feed/FeedContainer';
import Notification from '../components/Notification';
import FeedRecommendContainer from '../screens/Feed/FeedRecommendContainer';
import FriendCommentContainer from '../screens/Feed/friendProfile/friendSns/FriendCommentContainer';
import BackBtn from '../components/BackBtn';
import FeedEventDetailContainer from '../screens/Feed/FeedEvent/FeedEventDetailContainer';
import Search from '../components/Search';
import FeedPopularityContainer from '../screens/Feed/FeedPopularityContainer';
import FeedSearchContainer from '../screens/Feed/feedSearch/FeedSearchContainer';
import FriendFollowerContainer from '../screens/Feed/friendProfile/friendSns/FriendFollowerContainer';
import FriendLikeContainer from '../screens/Feed/friendProfile/friendSns/FriendLikeContainer';
import FeedContext, {IFeedContext} from '../module/context/FeedContext';
import FollowContext from '../module/context/FollowContext';
import WhiteBackBtn from '../components/WhiteBackBtn';
import NotificationWhite from '../components/NotificationWhite';
import ProfileActiveStatisticContainer from '../screens/Profile/profilePay/ProfileActiveStatisticContainer';
import FollowerMemberContainer from '../screens/Profile/snsMember/FollowerMemberContainer';

const Stack = createStackNavigator();

export default () => {
  const {user}: any = useContext(FollowContext);
  const {show} = useContext(FeedContext) as IFeedContext;

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
        headerLeft: () => <BackBtn navigation={navigation} />,
        headerRight: () => <Notification navigation={navigation} route={route} />,
        cardStyle: {backgroundColor: '#f4f5fa'},
      })}>
      <Stack.Screen
        options={({route, navigation}) => ({
          headerTitle: '피드',
          headerLeft: () => <Search navigation={navigation} route={route} />,
          cardStyle: {backgroundColor: '#f4f5fa'},
        })}
        name="feedMain"
        component={FeedContainer}
      />
      <Stack.Screen
        name="activeDetail"
        options={{
          headerTitle: `${show ? show.userNickName : ''}님의 활동`,
        }}
        component={ActiveDetailContainer}
      />
      <Stack.Screen name="feedPopularity" component={FeedPopularityContainer} />
      <Stack.Screen name="feedRecommend" component={FeedRecommendContainer} />
      <Stack.Screen
        options={{
          headerTitle: '피드 검색결과',
        }}
        name="feedSearch"
        component={FeedSearchContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '알림',
        }}
        name="feedAlarmInfo"
        component={FeedAlarmContainer}
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
          headerTitle: '활동 통계',
        }}
        name="ProfileActiveStatistic"
        component={ProfileActiveStatisticContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '댓글',
        }}
        name="friendComment"
        component={FriendCommentContainer}
      />
      <Stack.Screen
        name="friendFollower"
        options={{
          headerTitle: user.nickName,
        }}
        component={FriendFollowerContainer}
      />
      <Stack.Screen
        name="feedFollowerMember"
        options={{
          headerTitle: user.nickName,
        }}
        component={FollowerMemberContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '좋아하는 사람들',
        }}
        name="friendLike"
        component={FriendLikeContainer}
      />
      <Stack.Screen
        options={({navigation, route}) => ({
          headerTitle: `${show ? show.userNickName : ''}님의 활동`,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'black'},
          headerLeft: () => <WhiteBackBtn navigation={navigation} />,
          headerRight: () => <NotificationWhite navigation={navigation} route={route} />,
        })}
        name="friendShare"
        component={FeedShareContainer}
      />
    </Stack.Navigator>
  );
};
