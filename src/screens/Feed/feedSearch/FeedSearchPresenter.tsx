import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {BASE_URL, timeForToday} from '../../../module/common';
import UserContext from '../../../module/context/UserContext';
import {IFeed} from '../../../module/type/feed';
import {IFeedPagination} from '../../../module/type/api';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

interface IProps {
  navigation: any;
  index: Array<IFeed>;
  userFollowAndReload: (userId: number) => void;
  feedLikedAndReload: (feed: IFeed) => void;
  setSortAlertVisible: () => void;
  getMoreIndex: () => void;
}

export default ({
  navigation,
  index,
  userFollowAndReload,
  feedLikedAndReload,
  setSortAlertVisible,
  getMoreIndex,
}: IProps) => {
  const {loginUser}: any = useContext(UserContext);

  const isLoginUserFeed = (id: number) => {
    return loginUser.id === id;
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}: NativeScrollEvent) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
  };

  const onScroll = async ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isCloseToBottom(nativeEvent)) {
      getMoreIndex();
    }
  };

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper onScroll={onScroll}>
          <ContainerCard>
            <ActiveSelectTitleWrapper>
              <SortBtn onPress={setSortAlertVisible}>
                <SortImage source={require('../../../assets/sort_icon.png')} />
              </SortBtn>
            </ActiveSelectTitleWrapper>

            {index.map((feed) => (
              <PostWrapper key={feed.id}>
                <ProfileWrapper>
                  <ProfileImage source={{uri: `${BASE_URL}/${feed.thumbnail}`}} />
                  <ProfileTextWrapper>
                    <ProfileNameBtn onPress={() => {}}>
                      <ProfileName>{feed.userNickName}</ProfileName>
                    </ProfileNameBtn>
                    <PostTime>{timeForToday(feed.createdAt)}</PostTime>
                  </ProfileTextWrapper>
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
                            ? require('../../../assets/icon_heartRed.png')
                            : require('../../../assets/icon_heart.png')
                        }
                      />
                    </IconBtn>
                    <IconBtn
                      onPress={() => {
                        navigation.navigate('friendComment', {id: feed.id});
                      }}>
                      <IconImage source={require('../../../assets/icon_comment.png')} />
                    </IconBtn>
                  </IconImageWrapper>
                  <AlarmBtn
                    onPress={() => {
                      navigation.navigate('friendLike');
                    }}>
                    <AlarmText>{feed.likeCount}명이 좋아합니다.</AlarmText>
                  </AlarmBtn>
                </IconWrapper>
                {feed.commentCount > 0 && (
                  <FollowWrapper>
                    <ProfileImage source={{uri: `${BASE_URL}/${feed.commentUserImage}`}} />
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
                          navigation.navigate('friendComment');
                        }}>
                        <AllCommentText>{feed.commentCount}개의 댓글 모두 보기</AllCommentText>
                      </AllCommentBtn>
                    </FollowTextWrapper>
                  </FollowWrapper>
                )}
              </PostWrapper>
              // <Line />
            ))}
          </ContainerCard>
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

const ContainerCard = styled.View`
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

const ActiveSelectTitleWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  border-bottom-width: 2px;
  border-color: #f3f3f3;
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
  justify-content: flex-start;
  padding-bottom: 10px;
  width: 100%;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 20px;
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
  border-width: 1px;
  border-color: #007bf1;
  background-color: ${({isFollow}: {isFollow: boolean}) => (!isFollow ? '#007bf1' : '#fff')};
`;

const FollowBtnText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({isFollow}: {isFollow: boolean}) => (!isFollow ? '#fff' : '#007bf1')};
`;

const PostImageWrapper = styled.TouchableOpacity`
  display: flex;
  width: 100%;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 5px;
`;

const RecordWrapper = styled.View`
  display: flex;
  flex-flow: row;
  width: 40%;
  align-items: center;
  justify-content: center;
  background-color: ${({color}: {color: string}) => (color ? color : '#007bf1')};
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

const AlarmText = styled.Text`
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
`;

const FollowNameBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
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
  padding-bottom: 5px;
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
