import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileSetupBtn from '../components/ProfileSetupBtn';
import BackBtn from '../components/BackBtn';
import ProfileActiveContainer from '../screens/Profile/ProfileActiveContainer';
import ProfileActiveJoinContainer from '../screens/Profile/ProfileActiveJoinContainer';
import ProfilePayContainer from '../screens/Profile/profilePay/ProfilePayContainer';
import ProfileMembershipContainer from '../screens/Profile/profilePay/ProfileMembershipContainer';
import ProfilePointContainer from '../screens/Profile/profilePay/ProfilePointContainer';
import ProfileActiveStatisticContainer from '../screens/Profile/profilePay/ProfileActiveStatisticContainer';
import FollowerMemberContainer from '../screens/Profile/snsMember/FollowerMemberContainer';
import LikeMemberContainer from '../screens/Profile/snsMember/LikeMemberContainer';
import CommentMemberContainer from '../screens/Profile/snsMember/CommentMemberContainer';
import ProfileSettingContainer from '../screens/Profile/profileSetUp/ProfileSettingContainer';
import SetNoticeContainer from '../screens/Profile/profileSetUp/customer/setNotice/SetNoticeContainer';
import SetNoticeDetailContainer from '../screens/Profile/profileSetUp/customer/setNotice/SetNoticeDetailContainer';
import SetEventContainer from '../screens/Profile/profileSetUp/customer/setEvent/SetEventContainer';
import SetEventDetailContainer from '../screens/Profile/profileSetUp/customer/setEvent/SetEventDetailContainer';
import SetAskContainer from '../screens/Profile/profileSetUp/customer/setAsk/SetAskContainer';
import SetAskWriteContainer from '../screens/Profile/profileSetUp/customer/setAsk/SetAskWriteContainer';
import SetAskDetailContainer from '../screens/Profile/profileSetUp/customer/setAsk/SetAskDetailContainer';
import SetAnswerDetailContainer from '../screens/Profile/profileSetUp/customer/setAsk/SetAnswerDetailContainer';
import SetFaqContainer from '../screens/Profile/profileSetUp/customer/setFAQ/SetFaqContainer';
import TermsContainer from '../screens/Profile/profileSetUp/customer/setTerms/TermsContainer';
import TermsDetailContainer from '../screens/Profile/profileSetUp/customer/setTerms/TermsDetailContainer';
import AboutAppContainer from '../screens/Profile/profileSetUp/customer/aboutApp/AboutAppContainer';
import SetProfileContainer from '../screens/Profile/profileSetUp/myInfo/setProfile/SetProfileContainer';
import SetCategoryContainer from '../screens/Profile/profileSetUp/myInfo/setCategory/SetCategoryContainer';
import SetPasswordContainer from '../screens/Profile/profileSetUp/myInfo/setPassword/SetPasswordContainer';
import SetPersonalContainer from '../screens/Profile/profileSetUp/myInfo/setPersonal/SetPersonalContainer';
import AlarmSetContainer from '../screens/Profile/profileSetUp/myInfo/setAlarm/AlarmSetContainer';
import {View} from 'react-native';
import FollowContext from '../module/context/FollowContext';
const Stack = createStackNavigator();

export default () => {
  const {user}: any = useContext(FollowContext);

  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitleStyle: {
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerLeft: () => <BackBtn navigation={navigation} />,
        headerRight: () => <View />,
        cardStyle: {backgroundColor: '#f4f5fa'},
      })}>
      <Stack.Screen
        options={(props) => ({
          headerTitle: '?????????',
          headerLeft: () => <View />,
          headerRight: () => <ProfileSetupBtn {...props} />,
        })}
        name="profileActiveMain"
        component={ProfileActiveContainer}
      />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerTitle: '?????????',
          headerLeft: () => <View />,
          headerRight: () => <ProfileSetupBtn navigation={navigation} route={route} />,
        })}
        name="profileActiveJoin"
        component={ProfileActiveJoinContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '????????????',
        }}
        name="profilePay"
        component={ProfilePayContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '????????? ??????',
        }}
        name="profileMembership"
        component={ProfileMembershipContainer}
      />
      <Stack.Screen name="profilePoint" component={ProfilePointContainer} />
      <Stack.Screen
        options={{
          headerTitle: '?????? ??????',
        }}
        name="ProfileActiveStatistic"
        component={ProfileActiveStatisticContainer}
      />
      <Stack.Screen
        name="followerMember"
        options={{
          headerTitle: user.nickName,
        }}
        component={FollowerMemberContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '???????????? ?????????',
        }}
        name="likeMember"
        component={LikeMemberContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '??????',
        }}
        name="commentMember"
        component={CommentMemberContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '??????',
        }}
        name="profileSetting"
        component={ProfileSettingContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '????????????',
        }}
        name="setNotice"
        component={SetNoticeContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '????????????',
        }}
        name="setNoticeDetail"
        component={SetNoticeDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '?????????',
        }}
        name="setEvent"
        component={SetEventContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '?????????',
        }}
        name="setEventDetail"
        component={SetEventDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '1:1 ?????? ?????????',
        }}
        name="setAsk"
        component={SetAskContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '1:1 ?????? ??????',
        }}
        name="setAskWrite"
        component={SetAskWriteContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '1:1 ?????? ??????',
        }}
        name="setAskDetail"
        component={SetAskDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '1:1 ?????? ??????',
        }}
        name="setAnswerDetail"
        component={SetAnswerDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: 'FAQ',
        }}
        name="setFaq"
        component={SetFaqContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '?????? ??? ???????????? ????????????',
        }}
        name="setTerms"
        component={TermsContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '????????? ??????',
        }}
        name="termsDetaile"
        component={TermsDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '??? ?????? ?????????',
        }}
        name="aboutApp"
        component={AboutAppContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '????????? ??????',
        }}
        name="setProfile"
        component={SetProfileContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '?????? ???????????? ??????',
        }}
        name="setCategory"
        component={SetCategoryContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '???????????? ????????????',
        }}
        name="setPassword"
        component={SetPasswordContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '???????????? ????????????',
        }}
        name="setPersonal"
        component={SetPersonalContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '??????',
        }}
        name="setAlarm"
        component={AlarmSetContainer}
      />
    </Stack.Navigator>
  );
};
