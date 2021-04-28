import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import UserContext from '../../module/context/UserContext';
import {IProfileUserInfo} from '../../module/type/user';
import {
  BASE_URL,
  FONT_SIZE_1,
  FONT_SIZE_2,
  FONT_SIZE_3,
  FONT_SIZE_4,
  timeForToday,
  togetherDate,
} from '../../module/common';
import {RefreshControl, Text} from 'react-native';
import {IFeed} from '../../module/type/feed';
import {ITogethers} from '../../module/type/together';
import {getComma} from '../../components/CommonTime';
import FeedTitleComponent from '../../components/FeedTitleComponent';

interface IProps {
  navigation: any;
  user: IProfileUserInfo;
  feeds: Array<IFeed>;
  togethers: Array<ITogethers>;
  pagination: {
    page: number;
    sort: string;
    order: 'createdAt' | 'likeCount';
  };
  init: () => void;
  switchingIndex: (sort: 'feed' | 'together') => void;
  sortAlert: () => void;
  changeLikeCount: (feedId: number) => void;
}

export default ({
  navigation,
  user,
  feeds,
  togethers,
  pagination,
  init,
  switchingIndex,
  sortAlert,
  changeLikeCount,
}: IProps) => {
  const {loginUser}: any = useContext(UserContext);
  const [refresh, setRefresh] = useState(false);

  const onRefresh = async () => {
    setRefresh(true);
    await init();
    setRefresh(false);
  };

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
          <Card>
            <BackgroundLine>
              <ProfileTopWrapper>
                <ProfileImageWrapper>
                  <ProfileMainImage
                    source={{uri: `${BASE_URL}/${user.user.image ? user.user.image : 'public/user/no_profile.png'}`}}
                  />
                  {user.user.id === loginUser.id && (
                    <EditCard
                      onPress={() => {
                        navigation.navigate('setProfile');
                      }}>
                      <EditImage source={require('../../assets/edit_icon.png')} />
                      <EditBtnText>프로필 수정</EditBtnText>
                    </EditCard>
                  )}
                </ProfileImageWrapper>
                <ProfileNickName>{user.user.nickName}</ProfileNickName>
                <ActiveTextWrapper>
                  <ActiveBtnWrapper>
                    <ActiveNumber>{user.feedCount}</ActiveNumber>
                    <ActiveText>활동들</ActiveText>
                  </ActiveBtnWrapper>
                  <ActiveBtnWrapper>
                    <ActiveBtn
                      onPress={() => {
                        navigation.navigate('followerMember', {id: user.user.id});
                      }}>
                      <FollowerNumber>{user.userFollower}</FollowerNumber>
                    </ActiveBtn>
                    <ActiveText>팔로워</ActiveText>
                  </ActiveBtnWrapper>
                  <ActiveBtnWrapper>
                    <ActiveBtn
                      onPress={() => {
                        navigation.navigate('followerMember', {id: user.user.id});
                      }}>
                      <FollowingNumber>{user.userFollow}</FollowingNumber>
                    </ActiveBtn>
                    <ActiveText>팔로잉</ActiveText>
                  </ActiveBtnWrapper>
                </ActiveTextWrapper>
                <ActiveIntroduceText>{user.user.description}</ActiveIntroduceText>

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
              {[
                {sort: 'feed', label: `나의 활동`},
                {sort: 'together', label: `내가 참여중인 모임`},
              ].map(({label, sort}, idx) => (
                <MenuWrapper key={idx} isClick={pagination.sort === sort}>
                  <MenuBtn
                    onPress={() => {
                      switchingIndex(sort);
                    }}>
                    <MenuText isClick={pagination.sort === sort}>{label}</MenuText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>

            {pagination.sort === 'feed' && (
              <ProfileActiveTitleWrapper>
                <ProfileTitleBtn>
                  <ProfileActiveTitle>내 활동</ProfileActiveTitle>
                  <ProfileActiveNumber>{user.feedCount}</ProfileActiveNumber>
                </ProfileTitleBtn>
                <SortBtn
                  onPress={() => {
                    sortAlert();
                  }}>
                  <SortImage source={require('../../assets/sort_icon.png')} />
                </SortBtn>
              </ProfileActiveTitleWrapper>
            )}

            {pagination.sort === 'feed' &&
              feeds.map((feed: IFeed) => (
                <LineWrapper key={feed.id}>
                  <PostWrapper>
                    <ProfileWrapper>
                      <ProfileInfoWrapper
                        onPress={() => {
                          navigation.navigate('friendActive', {id: feed.userId});
                        }}>
                        <ProfileImage
                          source={{
                            uri: `${BASE_URL}/${feed.userImage ? feed.userImage : 'public/user/no_profile.png'}`,
                          }}
                        />
                        <ProfileTextWrapper>
                          <ProfileName>{feed.userNickName}</ProfileName>
                          <PostTime>{timeForToday(feed.createdAt)}</PostTime>
                        </ProfileTextWrapper>
                      </ProfileInfoWrapper>
                    </ProfileWrapper>
                    <PostImageWrapper
                      onPress={() => {
                        navigation.navigate('activeDetail', {id: feed.id});
                      }}>
                      <PostImage source={{uri: `${BASE_URL}/${feed.feedImage ? feed.feedImage : feed.thumbnail}`}} />
                      <RecordWrapper color={feed.activityColor}>
                        <RecordImage resizeMode="cover" source={{uri: `${BASE_URL}/${feed.activityImage}`}} />
                        <RecordText>{feed.distance} 킬로미터</RecordText>
                      </RecordWrapper>
                      <FeedTitleComponent title={feed.title} />
                    </PostImageWrapper>

                    <IconWrapper>
                      <IconImageWrapper>
                        <IconBtn onPress={() => changeLikeCount(feed.id)}>
                          <IconImage
                            source={
                              feed.isUserLiked
                                ? require('../../assets/icon_heartRed.png')
                                : require('../../assets/icon_heart.png')
                            }
                          />
                        </IconBtn>
                        <IconBtn
                          onPress={() => {
                            navigation.navigate('friendComment', {id: feed.id});
                          }}>
                          <IconImage source={require('../../assets/icon_comment.png')} />
                        </IconBtn>
                      </IconImageWrapper>
                      <AlarmBtn
                        onPress={() => {
                          navigation.navigate('friendLike');
                        }}>
                        <AlarmBtnText>{feed.likeCount}명이 좋아합니다.</AlarmBtnText>
                      </AlarmBtn>
                    </IconWrapper>
                    {feed.commentCount > 0 && (
                      <FollowWrapper>
                        <ProfileImage
                          source={{
                            uri: `${BASE_URL}/${
                              feed.commentUserImage ? feed.commentUserImage : 'public/user/no_profile.png'
                            }`,
                          }}
                        />
                        <FollowTextWrapper>
                          <FollowName>{feed.commentUserName}</FollowName>
                          <CommentText>{feed.commentDescription}</CommentText>
                          <AllCommentBtn
                            onPress={() => {
                              navigation.navigate('friendComment', {id: feed.id});
                            }}>
                            <AllCommentText>{feed.commentCount}개의 댓글 모두 보기</AllCommentText>
                          </AllCommentBtn>
                        </FollowTextWrapper>
                      </FollowWrapper>
                    )}
                  </PostWrapper>
                  <Line />
                </LineWrapper>
              ))}

            {pagination.sort === 'together' &&
              togethers.map((together: ITogethers) => (
                <RecruitWrapper
                  key={together.id}
                  onPress={() => {
                    navigation.navigate('togetherDetail', {id: together.id});
                  }}>
                  <RecruitImageWrapper>
                    <RecruitImage source={{uri: `${BASE_URL}/${together.thumbnail}`}} />
                    <RecordWrapper2 backgroundColor={together.activityColor}>
                      <RecordImage2 source={{uri: `${BASE_URL}/${together.activityImage}`}} />
                      <RecordText2>{together.distance}KM</RecordText2>
                    </RecordWrapper2>
                  </RecruitImageWrapper>
                  <RecruitTextWrapper>
                    <RecruitTitleBtn>
                      <RecruitTitle>{together.title}</RecruitTitle>
                    </RecruitTitleBtn>
                    <RecruitAddress>{together.place}</RecruitAddress>
                    <EntryFee>참가비 {getComma(together.price)}원</EntryFee>
                    <Deadline>{togetherDate(together.limitDate)}</Deadline>
                  </RecruitTextWrapper>
                </RecruitWrapper>
              ))}
          </Card>
        </ScrollWrapper>
      </ScrollContainer>
    </Container>
  );
};

const RecruitWrapper = styled.TouchableOpacity`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

const RecruitImageWrapper = styled.View`
  display: flex;
  width: 45%;
  border-width: 1px;
  border-color: #dfdfdf;
  margin-right: 10px;
`;

const RecruitImage = styled.Image`
  width: 100%;
  height: 100px;
`;

const RecordWrapper2 = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  background-color: ${({backgroundColor}: {backgroundColor: string}) =>
    backgroundColor ? backgroundColor : '#bcbcbc'};
  position: absolute;
  margin-top: 10px;
  padding: 5px 10px;
`;

const RecordText2 = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const RecordImage2 = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

const RecruitTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
`;

const RecruitTitleBtn = styled.View`
  width: 100%;
`;

const RecruitTitle = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #000;
`;

const RecruitAddress = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #777;
  padding: 5px 0;
`;

const EntryFee = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #000;
  font-weight: bold;
  padding-bottom: 5px;
`;

const Deadline = styled.Text`
  width: 100%;
  font-size: 10px;
  color: #007bf1;
  font-weight: bold;
`;

const LineWrapper = styled.View`
  width: 100%;
`;

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
  font-size: ${FONT_SIZE_3}px;
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
  font-size: ${FONT_SIZE_4}px;
  color: #007bf1;
  font-weight: bold;
  text-align: center;
`;

const FollowerNumber = styled.Text`
  font-size: ${FONT_SIZE_4}px;
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
  font-size: ${FONT_SIZE_2}px;
  color: #ababab;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
`;

const ActiveIntroduceText = styled.Text`
  font-size: ${FONT_SIZE_2}px;
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
  border-color: ${({isClick}: {isClick: boolean}) => (isClick ? '#007bf1' : '#fff')};
`;

const MenuBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
`;

const MenuText = styled.Text`
  font-size: 15px;
  color: ${({isClick}: {isClick: boolean}) => (isClick ? '#007bf1' : '#333')};
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

const ProfileTitleBtn = styled.View`
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

const ProfileInfoWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 60%;
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
  margin-left: 15px;
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
  border-width: 1px;
  border-color: #007bf1;
  background-color: ${({isFollow}: {isFollow: boolean}) => (!isFollow ? '#007bf1' : '#fff')};
`;

const FollowBtnText = styled.Text`
  color: ${({isFollow}: {isFollow: boolean}) => (!isFollow ? '#fff' : '#007bf1')};
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
  align-items: center;
  background-color: ${({color}: {color: string}) => (color ? color : '#007bf1')};
  position: absolute;
  margin-top: 20px;
  padding: 5px 15px;
`;

const RecordText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const RecordImage = styled.Image`
  width: 15px;
  height: 15px;
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
