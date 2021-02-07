import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {IEvent, IFeed} from '../../module/type/feed';
import Swiper from 'react-native-swiper';
import {BASE_URL, timeForToday} from '../../module/common';
import {NativeScrollEvent, NativeSyntheticEvent, RefreshControl, StyleSheet} from 'react-native';
import UserContext from '../../module/context/UserContext';
import FeedContext from '../../module/context/FeedContext';
import {IUserFollower} from '../../module/type/user';
import SearchComponent from '../../components/SearchComponent';

interface IProps {
  navigation: any;
  events: Array<IEvent>;
  userFollowAndReload: (userId: number) => void;
  newFollowers: {
    newFollowCount: number;
    followers: Array<IUserFollower>;
  };
}

const sorts = [
  {sort: 'createdAt', tab: '홈'},
  {sort: 'likeCount', tab: '인기'},
  {sort: 'location', tab: '추천'},
];

export default ({navigation, events, newFollowers}: IProps) => {
  const {loginUser}: any = useContext(UserContext);
  const {
    index,
    pagination,
    userFollowAndReload,
    feedLikedAndReload,
    switchingSortIndex,
    getMoreIndex,
    searchVisible,
  }: any = useContext(FeedContext);

  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    switchingSortIndex(pagination.sort);
    setRefresh(false);
  };

  const isLoginUserFeed = (id: number) => {
    return loginUser.id === id;
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}: NativeScrollEvent) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
  };

  const onScroll = async ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isCloseToBottom(nativeEvent)) {
      await getMoreIndex();
    }
  };

  return (
    <Container>
      {searchVisible && <SearchComponent navigation={navigation} stack={'feed'} />}
      <ScrollContainer>
        <ScrollWrapper
          onScroll={onScroll}
          scrollEventThrottle={60}
          refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
          <Card>
            {newFollowers.newFollowCount > 0 && (
              <>
                <NewFollowerWrapper>
                  <NewFollowerBtn
                    onPress={() => {
                      navigation.navigate('friendFollower');
                    }}>
                    <NewFollowerText>새로운 팔로워</NewFollowerText>
                    <NewFollowerNumber>{newFollowers.newFollowCount}</NewFollowerNumber>
                    <NewFollowerMoreImage source={require('../../assets/more.png')} />
                  </NewFollowerBtn>

                  <FollowerWrapper horizontal={true} showsHorizontalScrollIndicator={false}>
                    {newFollowers.followers.map(({id, image, nickName}) => (
                      <FollowerImageWrapper
                        key={id}
                        onPress={() => {
                          navigation.navigate('friendActive', {id});
                        }}>
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
                          <FollowerImage
                            source={{uri: `${BASE_URL}/${image ? image : 'public/user/no_profile.png'}`}}
                          />
                        </LinearGradient>

                        <NewFollowNameBtn>
                          <FollowerName>{nickName}</FollowerName>
                        </NewFollowNameBtn>
                      </FollowerImageWrapper>
                    ))}
                  </FollowerWrapper>
                </NewFollowerWrapper>
                <Line></Line>
              </>
            )}

            <Swiper style={styles.swiperWrapper} height={150} showsButtons={false} autoplay={true}>
              {events.map(({id, image}) => (
                <EventWrapper
                  key={id}
                  onPress={() => {
                    navigation.navigate('feedEventDetail', {id});
                  }}>
                  <EventImage source={{uri: `${BASE_URL}/${image}`}} style={{resizeMode: 'cover'}} />
                </EventWrapper>
              ))}
            </Swiper>
            <Line></Line>

            <MenuBarWrapper>
              {sorts.map(({tab, sort}, idx) => (
                <MenuWrapper key={idx} focused={pagination.sort === sort}>
                  <MenuBtn
                    onPress={() => {
                      switchingSortIndex(sort);
                    }}>
                    <MenuText focused={pagination.sort === sort}>{tab}</MenuText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>

            {index.map((feed: IFeed) => (
              <LineWrapper key={feed.id}>
                <PostWrapper>
                  <ProfileWrapper>
                    <ProfileInfoWrapper
                      onPress={() => {
                        navigation.navigate('friendActive', {id: feed.userId});
                      }}>
                      <ProfileImage
                        source={{uri: `${BASE_URL}/${feed.userImage ? feed.userImage : 'public/user/no_profile.png'}`}}
                      />
                      <ProfileTextWrapper>
                        <ProfileName>{feed.userNickName}</ProfileName>
                        <PostTime>{timeForToday(feed.createdAt)}</PostTime>
                      </ProfileTextWrapper>
                    </ProfileInfoWrapper>
                    {!isLoginUserFeed(feed.userId) && (
                      <FollowBtn
                        isFollow={feed.isUserFollowed}
                        onPress={() => {
                          userFollowAndReload(feed.userId);
                        }}>
                        <FollowBtnText isFollow={feed.isUserFollowed}>
                          {!feed.isUserFollowed ? '팔로우' : '팔로잉'}
                        </FollowBtnText>
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
                      <IconBtn onPress={() => feedLikedAndReload(feed)}>
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

const FollowerImageWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
`;

const FollowerImage = styled.Image`
  width: 55px;
  height: 55px;
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

const LineWrapper = styled.View`
  width: 100%;
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
  padding: 5px 0;
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
