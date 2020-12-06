import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface IProps {
  navigation: any;
  isClick: boolean;
}

export default ({navigation, newFollower, menuList}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <NewFollowerWrapper>
              <NewFollowerBtn
                onPress={() => {
                  navigation.navigate('friendFollower');
                }}>
                <NewFollowerText>새로운 팔로워</NewFollowerText>
                <NewFollowerNumber>8</NewFollowerNumber>
                <NewFollowerMoreImage
                  source={require('../../assets/more.png')}
                />
              </NewFollowerBtn>

              <FollowerWrapper horizontal={true}>
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

            <EventWrapper
              onPress={() => {
                navigation.navigate('feedEventDetail');
              }}>
              <EventImage source={require('../../assets/event_1.jpg')} />
            </EventWrapper>
            <Line></Line>

            <MenuBarWrapper>
              {menuList.map((item, idx) => (
                <MenuWrapper key={idx} isClick={item.isClick}>
                  <MenuBtn
                    onPress={() => {
                      navigation.navigate('feedPopularity');
                    }}>
                    <MenuText isClick={item.isClick}>{item.name}</MenuText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>

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
                  <RecordImage source={require('../../assets/cycle.png')} />
                  <RecordText>21.7 킬로미터</RecordText>
                </RecordWrapper>
              </PostImageWrapper>

              <IconWrapper>
                <IconImageWrapper>
                  <IconBtn>
                    <IconImage
                      source={require('../../assets/heart_icon.png')}
                    />
                  </IconBtn>
                  <IconBtn
                    onPress={() => {
                      navigation.navigate('friendComment');
                    }}>
                    <IconImage
                      source={require('../../assets/comment_icon.png')}
                    />
                  </IconBtn>
                </IconImageWrapper>
                <AlarmBtn
                  onPress={() => {
                    navigation.navigate('friendNice');
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
                      navigation.navigate('friendComment');
                    }}>
                    <AllCommentText>9개의 댓글 모두 보기</AllCommentText>
                  </AllCommentBtn>
                </FollowTextWrapper>
              </FollowWrapper>
            </PostWrapper>
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

const NewFollowerWrapper = styled.ScrollView`
  display: flex;
  width: 100%;
  padding: 10px 20px;
`;

const NewFollowerBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
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
  padding-top: 10px;
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
  align-items: center;
  justify-content: center;
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
  border-color: ${(props: IProps) => (props.isClick ? '#007bf1' : '#fff')};
`;

const MenuBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
`;

const MenuText = styled.Text`
  font-size: 16px;
  color: ${(props: IProps) => (props.isClick ? '#007bf1' : '#333')};
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
  width: 20px;
  height: 17px;
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
