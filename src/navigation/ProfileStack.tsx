import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SetUpBtn from '../components/SetUpBtn';
import ProfileActiveContainer from '../screens/Profile/ProfileActiveContainer';
import ProfileActiveJoinContainer from '../screens/Profile/ProfileActiveJoinContainer';
import ProfilePayContainer from '../screens/Profile/profilePay/ProfilePayContainer';
import ProfileMembershipContainer from '../screens/Profile/profilePay/ProfileMembershipContainer';
import ProfilePointContainer from '../screens/Profile/profilePay/ProfilePointContainer';
import FollowerMemberContainer from '../screens/Profile/snsMember/FollowerMemberContainer';
import FollowingMemberContainer from '../screens/Profile/snsMember/FollowingMemberContainer';
import LikeMemberContainer from '../screens/Profile/snsMember/LikeMemberContainer';
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
import ClauseContainer from '../screens/Profile/profileSetUp/customer/clause/ClauseContainer';
import ServiceDetailContainer from '../screens/Profile/profileSetUp/customer/clause/ServiceDetailContainer';
import SubscriptionDetailContainer from '../screens/Profile/profileSetUp/customer/clause/SubscriptionDetailContainer';
import PrivacyDetailContainer from '../screens/Profile/profileSetUp/customer/clause/PrivacyDetailContainer';
import AgreementDetailContainer from '../screens/Profile/profileSetUp/customer/clause/AgreementDetailContainer';
import AboutAppContainer from '../screens/Profile/profileSetUp/customer/aboutApp/AboutAppContainer';
import SetProfileContainer from '../screens/Profile/profileSetUp/myInfo/setProfile/SetProfileContainer';
import SetPasswordContainer from '../screens/Profile/profileSetUp/myInfo/setPassword/SetPasswordContainer';
import SetPersonalContainer from '../screens/Profile/profileSetUp/myInfo/setPersonal/SetPersonalContainer';
import AlarmSetContainer from '../screens/Profile/profileSetUp/myInfo/setAlarm/AlarmSetContainer';
import {View} from 'react-native';

const Stack = createStackNavigator();

export default () => {
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
        headerLeft: () => <View />,
        headerRight: () => <SetUpBtn navigation={navigation} />,
        cardStyle: {backgroundColor: '#f4f5fa'},
      })}>
      <Stack.Screen
        options={{
          headerTitle: '프로필',
        }}
        name="profileActiveMain"
        component={ProfileActiveContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '프로필',
        }}
        name="profileActiveJoin"
        component={ProfileActiveJoinContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '결제내역',
        }}
        name="profilePay"
        component={ProfilePayContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '멤버십 결제',
        }}
        name="profileMembership"
        component={ProfileMembershipContainer}
      />
      <Stack.Screen name="profilePoint" component={ProfilePointContainer} />
      <Stack.Screen
        options={{
          headerTitle: '포인트 내역',
        }}
        name="followerMember"
        component={FollowerMemberContainer}
      />
      <Stack.Screen
        name="followingMember"
        component={FollowingMemberContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '좋아하는 사람들',
        }}
        name="likeMember"
        component={LikeMemberContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '댓글',
        }}
        name="commentMember"
        component={CommentMemberContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '설정',
        }}
        name="profileSetting"
        component={ProfileSettingContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '공지사항',
        }}
        name="setNotice"
        component={SetNoticeContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '공지사항',
        }}
        name="setNoticeDetail"
        component={SetNoticeDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '이벤트 모두보기',
        }}
        name="setEvent"
        component={SetEventContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '1:1 문의 리스트',
        }}
        name="setAsk"
        component={SetAskContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '1:1 문의 작성',
        }}
        name="setAskWrite"
        component={SetAskWriteContainer}
      />
      <Stack.Screen name="setAskDetail" component={SetAskDetailContainer} />
      <Stack.Screen
        options={{
          headerTitle: '1:1 문의 확인',
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
          headerTitle: '약관 및 개인정보 보호정책',
        }}
        name="setClause"
        component={ClauseContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '서비스 약관',
        }}
        name="serviceDetaile"
        component={ServiceDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '구독약관',
        }}
        name="subscriptionDetaile"
        component={SubscriptionDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '개인정보 보호정책',
        }}
        name="privacyDetaile"
        component={PrivacyDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '이용약관',
        }}
        name="agreementDetaile"
        component={AgreementDetailContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '이 앱에 대하서',
        }}
        name="aboutApp"
        component={AboutAppContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '프로필 수정',
        }}
        name="setProfile"
        component={SetProfileContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '비밀번호 변경하기',
        }}
        name="setPassword"
        component={SetPasswordContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '개인정보 보호설정',
        }}
        name="setPersonal"
        component={SetPersonalContainer}
      />
      <Stack.Screen
        options={{
          headerTitle: '알림',
        }}
        name="setAlarm"
        component={AlarmSetContainer}
      />
    </Stack.Navigator>
  );
};
