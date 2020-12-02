import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SetUpBtn from '../components/SetUpBtn';
import BackBtn from '../components/BackBtn';
import ProfileActiveContainer from '../screens/Profile/ProfileActiveContainer';
import ProfileActiveJoinContainer from '../screens/Profile/ProfileActiveJoinContainer';
import ProfilePayContainer from '../screens/Profile/profilePay/ProfilePayContainer';
import ProfileMembershipContainer from '../screens/Profile/profilePay/ProfileMembershipContainer';
import ProfilePointContainer from '../screens/Profile/profilePay/ProfilePointContainer';
import FollowerMemberContainer from '../screens/Profile/snsMember/FollowerMemberContainer';
import FollowingMemberContainer from '../screens/Profile/snsMember/FollowingMemberContainer';
import NiceMemberContainer from '../screens/Profile/snsMember/NiceMemberContainer';
import CommentMemberContainer from '../screens/Profile/snsMember/CommentMemberContainer';
import ProfileSettingContainer from '../screens/Profile/profileSetUp/ProfileSettingContainer';
import SetNoticeContainer from '../screens/Profile/profileSetUp/customer/setNotice/SetNoticeContainer';
import SetNoticeDetailContainer from '../screens/Profile/profileSetUp/customer/setNotice/SetNoticeDetailContainer';
import SetEventContainer from '../screens/Profile/profileSetUp/customer/setEvent/SetEventContainer';
import SetAskContainer from '../screens/Profile/profileSetUp/customer/setAsk/SetAskContainer';
import SetAskWriteContainer from '../screens/Profile/profileSetUp/customer/setAsk/SetAskWriteContainer';
import SetAskDetailContainer from '../screens/Profile/profileSetUp/customer/setAsk/SetAskDetailContainer';
import SetAnswerDetailContainer from '../screens/Profile/profileSetUp/customer/setAsk/SetAnswerDetailContainer';
import SetFaqContainer from '../screens/Profile/profileSetUp/customer/setFAQ/SetFaqContainer';
import ClauseContainer from '../screens/Profile/profileSetUp/customer/clauseAbout/ClauseContainer';
import ServiceDetailContainer from '../screens/Profile/profileSetUp/customer/clauseAbout/ServiceDetailContainer';
import SubscriptionDetailContainer from '../screens/Profile/profileSetUp/customer/clauseAbout/SubscriptionDetailContainer';
import PrivacyDetailContainer from '../screens/Profile/profileSetUp/customer/clauseAbout/PrivacyDetailContainer';
import AgreementDetailContainer from '../screens/Profile/profileSetUp/customer/clauseAbout/AgreementDetailContainer';
import SetProfileContainer from '../screens/Profile/profileSetUp/myInfo/setProfile/SetProfileContainer';
import SetPasswordContainer from '../screens/Profile/profileSetUp/myInfo/setPassword/SetPasswordContainer';
import SetPersonalContainer from '../screens/Profile/profileSetUp/myInfo/setPersonal/SetPersonalContainer';
import AlarmSetContainer from '../screens/Profile/profileSetUp/myInfo/setAlarm/AlarmSetContainer';

const Stack = createStackNavigator();

export default ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerLeft: () => <BackBtn navigation={navigation} />,
        headerRight: () => <SetUpBtn navigation={navigation} />,
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
      <Stack.Screen name="profilePay" component={ProfilePayContainer} />
      <Stack.Screen
        name="profileMembership"
        component={ProfileMembershipContainer}
      />
      <Stack.Screen name="profilePoint" component={ProfilePointContainer} />
      <Stack.Screen name="followerMember" component={FollowerMemberContainer} />
      <Stack.Screen
        name="followingMember"
        component={FollowingMemberContainer}
      />
      <Stack.Screen name="niceMember" component={NiceMemberContainer} />
      <Stack.Screen name="commentMember" component={CommentMemberContainer} />
      <Stack.Screen name="profileSetting" component={ProfileSettingContainer} />
      <Stack.Screen name="setNotice" component={SetNoticeContainer} />
      <Stack.Screen
        name="setNoticeDetail"
        component={SetNoticeDetailContainer}
      />
      <Stack.Screen name="setEvent" component={SetEventContainer} />
      <Stack.Screen name="setAsk" component={SetAskContainer} />
      <Stack.Screen name="setAskWrite" component={SetAskWriteContainer} />
      <Stack.Screen name="setAskDetail" component={SetAskDetailContainer} />
      <Stack.Screen
        name="setAnswerDetail"
        component={SetAnswerDetailContainer}
      />
      <Stack.Screen name="setFaq" component={SetFaqContainer} />
      <Stack.Screen name="setClause" component={ClauseContainer} />
      <Stack.Screen name="serviceDetaile" component={ServiceDetailContainer} />
      <Stack.Screen
        name="subscriptionDetaile"
        component={SubscriptionDetailContainer}
      />
      <Stack.Screen name="privacyDetaile" component={PrivacyDetailContainer} />
      <Stack.Screen
        name="agreementDetaile"
        component={AgreementDetailContainer}
      />
      <Stack.Screen name="setProfile" component={SetProfileContainer} />
      <Stack.Screen name="setPassword" component={SetPasswordContainer} />
      <Stack.Screen name="setPersonal" component={SetPersonalContainer} />
      <Stack.Screen name="setAlarm" component={AlarmSetContainer} />
    </Stack.Navigator>
  );
};
