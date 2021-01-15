import React, {useContext} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {IEvent, IFeed} from '../../module/type/feed';
import Swiper from 'react-native-swiper';
import {BASE_URL, timeForToday} from '../../module/common';
import {StyleSheet} from 'react-native';
import UserContext from '../../module/context/UserContext';
import FeedContext from '../../module/context/FeedContext';

interface IProps {
  navigation: any;
  newFollower: any;
  events: Array<IEvent>;
  userFollowAndReload: (userId: number) => void;
}

export default ({navigation, newFollower, events, userFollowAndReload}: IProps) => {
  const {loginUser}: any = useContext(UserContext);
  const {index, getIndex, indexPaging, feedLike}: any = useContext(FeedContext);

  const isLoginUserFeed = (id: number) => {
    return loginUser.id === id;
  };

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <NewFollowerWrapper>
              <NewFollowerBtn
                onPress={() => {
                  navigation.navigate('friendFollower');
                }}>
                <NewFollowerText>새로운 팔로워</NewFollowerText>
                <NewFollowerNumber>8</NewFollowerNumber>
                <NewFollowerMoreImage source={require('../../assets/more.png')} />
              </NewFollowerBtn>

              <FollowerWrapper horizontal={true} showsHorizontalScrollIndicator={false}>
                {newFollower.map((item, idx) => (
                  <FollowerImageWrapper key={idx}>
                    <LinearGradient
                      colors={['#61d7ff', '#79a6fa', '#3065f4']}
                      start={{x: 0, y: 1}}
                      end={{x: 1, y: 0}}
                      style={{
                        width: 58,
                        height: 58,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 50,
                      }}>
                      <FollowerImage source={item.followerImage} />
                    </LinearGradient>

                    <NewFollowNameBtn
                      onPress={() => {
                        navigation.navigate('friendActive');
                      }}>
                      <FollowerName>{item.name}</FollowerName>
                    </NewFollowNameBtn>
                  </FollowerImageWrapper>
                ))}
              </FollowerWrapper>
            </NewFollowerWrapper>

            <Line></Line>

            <Swiper style={styles.swiperWrapper} height={200} showsButtons={false} autoplay={true}>
              {events.map(({id, img}) => (
                <EventWrapper
                  key={id}
                  onPress={() => {
                    navigation.navigate('feedEventDetail');
                  }}>
                  <EventImage source={{uri: `${BASE_URL}/${img}`}} style={{resizeMode: 'cover'}} />
                </EventWrapper>
              ))}
            </Swiper>
            <Line></Line>

            <MenuBarWrapper>
              {['홈', '인기', '추천'].map((name, idx) => (
                <MenuWrapper key={idx} focused={indexPaging.tab === name}>
                  <MenuBtn
                    onPress={() => {
                      getIndex(name);
                    }}>
                    <MenuText focused={indexPaging.tab === name}>{name}</MenuText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>

            {index.map((feed: IFeed) => (
              <PostWrapper key={feed.id}>
                <ProfileWrapper>
                  <ProfileInfoWrapper>
                    <ProfileImage
                      source={{uri: `${BASE_URL}/${feed.userImage ? feed.userImage : 'public/user/no_profile.png'}`}}
                    />
                    <ProfileTextWrapper>
                      <ProfileNameBtn
                        onPress={() => {
                          navigation.navigate('profileActiveMain');
                        }}>
                        <ProfileName>{feed.userNickName}</ProfileName>
                      </ProfileNameBtn>
                      <PostTime>{timeForToday(feed.createdAt)}</PostTime>
                    </ProfileTextWrapper>
                  </ProfileInfoWrapper>
                  {!isLoginUserFeed(feed.userId) && (
                    <FollowBtn
                      onPress={() => {
                        userFollowAndReload(feed.userId);
                      }}>
                      <FollowBtnText>{feed.isUserFollowed ? '언팔로우' : '팔로우'}</FollowBtnText>
                    </FollowBtn>
                  )}
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
                </PostImageWrapper>

                <IconWrapper>
                  <IconImageWrapper>
                    <IconBtn onPress={() => feedLike(feed)}>
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
                {feed.commentUserName && (
                  <FollowWrapper>
                    <ProfileImage
                      source={{
                        uri: `${BASE_URL}/${
                          feed.commentUserImage ? feed.commentUserImage : 'public/user/no_profile.png'
                        }`,
                      }}
                    />
                    <FollowTextWrapper>
                      <FollowNameBtn
                        onPress={() => {
                          navigation.navigate('friendActive');
                        }}>
                        <FollowName>{feed.commentUserName}</FollowName>
                      </FollowNameBtn>
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
            ))}
          </Card>
        </ScrollWrapper>
      </ScrollContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  swiperWrapper: {},
});

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
`;

const Line = styled.View`
  width: 100%;
  padding: 5px;
  background-color: #f3f3f3;
`;

const NewFollowerWrapper = styled.ScrollView`
  display: flex;
  width: 100%;
  padding: 10px 0;
`;

const NewFollowerBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px;
  align-items: center;
  justify-content: flex-start;
`;

const NewFollowerText = styled.Text`
  font-size: 13px;
  color: #333;
  font-weight: bold;
  text-align: left;
  margin-right: 5px;
`;

const NewFollowerNumber = styled.Text`
  color: #007bf1;
  font-weight: bold;
  font-size: 13px;
  margin-right: 3px;
`;

const NewFollowerMoreImage = styled.Image`
  width: 6px;
  height: 10px;
`;

const FollowerWrapper = styled.ScrollView`
  display: flex;
  flex-flow: row;
  width: 100%;
  padding: 10px 0px 0 5px;
`;

const FollowerImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
`;

const FollowerImage = styled.Image`
  width: 53px;
  height: 53px;
  border-radius: 50px;
`;

const NewFollowNameBtn = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const FollowerName = styled.Text`
  font-size: 11px;
  color: #505050;
  padding-top: 10px;
`;

const EventWrapper = styled.TouchableOpacity`
  display: flex;
  width: 100%;
`;

const EventImage = styled.Image`
  width: 100%;
  height: 150px;
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
  border-color: ${({focused}: {focused: boolean}) => (focused ? '#007bf1' : '#fff')};
`;

const MenuBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
`;

const MenuText = styled.Text`
  font-size: 16px;
  color: ${({focused}: {focused: boolean}) => (focused ? '#007bf1' : '#333')};
  font-weight: bold;
  text-align: center;
  padding: 10px;
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

const ProfileInfoWrapper = styled.View`
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
  width: 18px;
  height: 18px;
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
  margin: 15px 0;
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
  margin: 5px 0;
  align-items: center;
  justify-content: flex-start;
`;

const AllCommentText = styled.Text`
  font-size: 12px;
  color: #7c7c7c;
`;
