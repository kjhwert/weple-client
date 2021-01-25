import React, {useContext} from 'react';
import styled from 'styled-components/native';
import UserContext from '../../module/context/UserContext';

interface IProps {
  navigation: any;
  profileData: any;
  sortAlert: Function;
}

interface IColorChangeProps {
  isClick: boolean;
}

export default ({navigation, profileData, menuList, sortAlert}: IProps) => {
  const {getProfileUri}: any = useContext(UserContext);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <BackgroundLine>
              <ProfileTopWrapper>
                <ProfileImageWrapper>
                  <ProfileMainImage source={getProfileUri()} />
                  <EditCard
                    onPress={() => {
                      navigation.navigate('setProfile');
                    }}>
                    <EditImage source={require('../../assets/edit_icon.png')} />
                    <EditBtnText>프로필 수정</EditBtnText>
                  </EditCard>
                </ProfileImageWrapper>
                <ProfileNickName>{profileData.nickName}</ProfileNickName>
                <ActiveTextWrapper>
                  <ActiveBtnWrapper>
                    <ActiveBtn onPress={() => {}}>
                      <ActiveNumber>{profileData.feedCount}</ActiveNumber>
                    </ActiveBtn>
                    <ActiveText>활동들</ActiveText>
                  </ActiveBtnWrapper>
                  <ActiveBtnWrapper>
                    <ActiveBtn
                      onPress={() => {
                        navigation.navigate('followerMember');
                      }}>
                      <FollowerNumber>{profileData.userFollower}</FollowerNumber>
                    </ActiveBtn>
                    <ActiveText>팔로워</ActiveText>
                  </ActiveBtnWrapper>
                  <ActiveBtnWrapper>
                    <ActiveBtn
                      onPress={() => {
                        navigation.navigate('followingMember');
                      }}>
                      <FollowingNumber>{profileData.userFollow}</FollowingNumber>
                    </ActiveBtn>
                    <ActiveText>팔로우 중</ActiveText>
                  </ActiveBtnWrapper>
                </ActiveTextWrapper>
                <ActiveIntroduceText>{profileData.description}</ActiveIntroduceText>

                <PayBtnWrapper>
                  <PaymentBtn
                    onPress={() => {
                      navigation.navigate('profilePay');
                    }}>
                    <PayBtnText>결제내역</PayBtnText>
                  </PaymentBtn>
                  <MembershipBtn
                    onPress={() => {
                      navigation.navigate('profileMembership');
                    }}>
                    <PayBtnText>멤버십</PayBtnText>
                  </MembershipBtn>
                  <PointBtn
                    onPress={() => {
                      navigation.navigate('ProfileActiveStatistic');
                    }}>
                    <PayBtnText>활동통계</PayBtnText>
                  </PointBtn>
                </PayBtnWrapper>
              </ProfileTopWrapper>
            </BackgroundLine>

            <MenuBarWrapper>
              {menuList.map((item, idx) => (
                <MenuWrapper key={idx} isClick={item.isClick}>
                  <MenuBtn
                    onPress={() => {
                      navigation.navigate('profileActiveJoin');
                    }}>
                    <MenuText isClick={item.isClick}>{item.name}</MenuText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>

            <ProfileActiveTitleWrapper>
              <ProfileTitleBtn onPress={() => {}}>
                <ProfileActiveTitle>
                  <BoldText>GilDong</BoldText>님의 활동
                </ProfileActiveTitle>
                <ProfileActiveNumber>8</ProfileActiveNumber>
              </ProfileTitleBtn>
              <SortBtn
                onPress={() => {
                  sortAlert();
                }}>
                <SortImage source={require('../../assets/sort_icon.png')} />
              </SortBtn>
            </ProfileActiveTitleWrapper>

            <PostWrapper>
              <ProfileWrapper>
                <ProfileImage source={require('../../assets/profile_1.png')} />
                <ProfileTextWrapper>
                  <ProfileNameBtn onPress={() => {}}>
                    <ProfileName>GilDong Hong</ProfileName>
                  </ProfileNameBtn>
                  <PostTime>10분 전</PostTime>
                </ProfileTextWrapper>
                <FollowBtn onPress={() => {}}>
                  <FollowBtnText>팔로우</FollowBtnText>
                </FollowBtn>
              </ProfileWrapper>
              <PostImageWrapper
                onPress={() => {
                  navigation.navigate('activeDetail');
                }}>
                <PostImage source={require('../../assets/photo_1.jpeg')} />
                <RecordWrapper>
                  <RecordImage source={require('../../assets/active_cycle.png')} />
                  <RecordText>21.7 킬로미터</RecordText>
                </RecordWrapper>
              </PostImageWrapper>
              <IconWrapper>
                <IconImageWrapper>
                  <IconBtn>
                    <IconImage source={require('../../assets/icon_heart.png')} />
                  </IconBtn>
                  <IconBtn
                    onPress={() => {
                      navigation.navigate('commentMember');
                    }}>
                    <IconImage source={require('../../assets/icon_comment.png')} />
                  </IconBtn>
                </IconImageWrapper>
                <AlarmBtn
                  onPress={() => {
                    navigation.navigate('likeMember');
                  }}>
                  <AlarmBtnText>806명이 좋아합니다.</AlarmBtnText>
                </AlarmBtn>
              </IconWrapper>
              <FollowWrapper>
                <ProfileImage source={require('../../assets/profile_2.png')} />
                <FollowTextWrapper>
                  <FollowNameBtn
                    onPress={() => {
                      navigation.navigate('friendActive');
                    }}>
                    <FollowName>Benjamin</FollowName>
                  </FollowNameBtn>
                  <CommentText>bicycles very nice..!!</CommentText>
                  <AllCommentBtn
                    onPress={() => {
                      navigation.navigate('commentMember');
                    }}>
                    <AllCommentText>9개의 댓글 모두 보기</AllCommentText>
                  </AllCommentBtn>
                </FollowTextWrapper>
              </FollowWrapper>
            </PostWrapper>
          </Card>
        </ScrollWrapper>
      </ScrollContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ScrollContainer = styled.View`
  height: 100%;
  background-color: #fff;
`;

const ScrollWrapper = styled.ScrollView``;

const Card = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const Line = styled.View`
  width: 100%;
  padding: 5px;
  background-color: #f3f3f3;
`;

const BackgroundLine = styled.View`
  width: 100%;
  padding: 10px 15px;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
`;

const ProfileTopWrapper = styled.View`
  display: flex;
  width: 100%;
  border-radius: 5px;
  border-width: 1px;
  border-color: #e1e1e1;
  background-color: white;
  padding: 20px;
`;

const ProfileImageWrapper = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileMainImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

const EditCard = styled.TouchableOpacity`
  width: 30%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const EditImage = styled.Image`
  width: 18px;
  height: 18px;
`;

const EditBtnText = styled.Text`
  color: #b0b0b0;
  font-size: 10px;
  font-weight: bold;
  margin-left: 5px;
`;

const ProfileNickName = styled.Text`
  font-size: 15px;
  color: #333;
  font-weight: bold;
  text-align: center;
  padding: 5px;
`;

const ActiveTextWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const ActiveBtnWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 30%;
`;

const ActiveBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const ActiveNumber = styled.Text`
  font-size: 19px;
  color: #007bf1;
  font-weight: bold;
  text-align: center;
`;

const FollowerNumber = styled.Text`
  font-size: 19px;
  color: #00bbc7;
  font-weight: bold;
  text-align: center;
`;

const FollowingNumber = styled.Text`
  font-size: 19px;
  color: #8784ff;
  font-weight: bold;
  text-align: center;
`;

const ActiveText = styled.Text`
  font-size: 12px;
  color: #ababab;
  font-weight: bold;
  text-align: center;
`;

const ActiveIntroduceText = styled.Text`
  font-size: 14px;
  color: #989898;
  padding: 10px;
`;

const PayBtnWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;
`;

const PaymentBtn = styled.TouchableOpacity`
  width: 18%;
  padding: 5px;
  align-items: center;
  border-radius: 5px;
  background-color: #007bf1;
`;

const MembershipBtn = styled.TouchableOpacity`
  width: 18%;
  padding: 5px;
  align-items: center;
  border-radius: 5px;
  background-color: #00bbc7;
  margin-left: 5px;
`;

const PointBtn = styled.TouchableOpacity`
  width: 18%;
  padding: 5px;
  align-items: center;
  border-radius: 5px;
  background-color: #ffb284;
  margin-left: 5px;
`;

const PayBtnText = styled.Text`
  color: #fff;
  font-size: 10px;
  font-weight: bold;
`;

const MenuBarWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const MenuWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-width: 3px;
  border-color: ${(props: IColorChangeProps) => (props.isClick ? '#007bf1' : '#fff')};
`;

const MenuBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
`;

const MenuText = styled.Text`
  font-size: 15px;
  color: ${(props: IColorChangeProps) => (props.isClick ? '#007bf1' : '#333')};
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;

const ProfileActiveTitleWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #eee;
  padding: 20px;
`;

const ProfileTitleBtn = styled.TouchableOpacity`
  width: 85%;
  flex-flow: row wrap;
`;

const ProfileActiveTitle = styled.Text`
  font-size: 15px;
  color: #333;
  text-align: left;
  margin-right: 5px;
`;

const BoldText = styled.Text`
  font-weight: bold;
`;

const ProfileActiveNumber = styled.Text`
  color: #007bf1;
  font-weight: bold;
  font-size: 15px;
`;

const SortBtn = styled.TouchableOpacity`
  width: 15%;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

const SortImage = styled.Image`
  width: 23px;
  height: 18px;
`;

const PostWrapper = styled.View`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 10px 20px;
`;

const ProfileWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  width: 100%;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const ProfileTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 55%;
`;

const ProfileNameBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
  align-items: center;
  justify-content: flex-start;
`;

const ProfileName = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #303030;
`;

const PostTime = styled.Text`
  font-size: 13px;
  color: #5f5e5e;
  padding-bottom: 5px;
`;

const FollowBtn = styled.TouchableOpacity`
  width: 22%;
  padding: 7px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  background-color: #007bf1;
`;

const FollowBtnText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

const PostImageWrapper = styled.TouchableOpacity`
  display: flex;
  width: 100%;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 5px;
`;

const RecordWrapper = styled.View`
  display: flex;
  flex-flow: row;
  width: 40%;
  align-items: center;
  justify-content: center;
  background-color: #007bf1;
  position: absolute;
  margin-top: 20px;
  padding: 5px;
`;

const RecordText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const RecordImage = styled.Image`
  width: 22px;
  height: 13px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`;

const IconImageWrapper = styled.View`
  display: flex;
  flex-flow: row;
  padding: 10px 0;
  width: 100%;
`;

const IconBtn = styled.TouchableOpacity`
  width: 10%;
`;

const IconImage = styled.Image`
  width: 19px;
  height: 19px;
`;

const AlarmBtn = styled.TouchableOpacity`
  width: 100%;
`;

const AlarmBtnText = styled.Text`
  font-size: 13px;
  color: #303030;
  font-weight: 600;
`;

const FollowWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px 0;
  width: 100%;
`;

const FollowTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 75%;
  margin-left: 15px;
`;

const FollowNameBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`;

const FollowName = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #303030;
`;

const CommentText = styled.Text`
  font-size: 13px;
  color: #5f5e5e;
  margin-top: 2px;
`;

const AllCommentBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
  align-items: center;
  justify-content: flex-start;
`;

const AllCommentText = styled.Text`
  font-size: 12px;
  color: #7c7c7c;
`;
