import React from 'react';
import styled from 'styled-components/native';

interface IContainerProps {
  isClick: boolean;
}

export default ({navigation, newFollower, menuList}) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <NewFollowerWrapper>
              <NewFollowerBtn onPress={() => {}}>
                <NewFollowerText>새로운 팔로워</NewFollowerText>
                <NewFollowerNumber>8</NewFollowerNumber>
                <NewFollowerMoreImage
                  source={require('../../assets/more.png')}
                />
              </NewFollowerBtn>
              <FollowerWrapper>
                {newFollower.map((item, idx) => (
                  <FollowerImageWrapper key={idx}>
                    <FollowerImage source={item.followerImage} />
                    <FollowerName>{item.name}</FollowerName>
                  </FollowerImageWrapper>
                ))}
              </FollowerWrapper>
            </NewFollowerWrapper>
            <Line></Line>

            <EventWrapper
              onPress={() => {
                navigation.navigate('eventAll');
              }}>
              <EventImage source={require('../../assets/event_1.jpg')} />
            </EventWrapper>
            <Line></Line>

            <MenuBarWrapper>
              {menuList.map((item, idx) => (
                <MenuWrapper key={idx} isClick={item.isClick}>
                  <MenuBtn onPress={() => {}}>
                    <MenuText>{item.name}</MenuText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>

            <PostWrapper>
              <ProfileWrapper>
                <ProfileImage source={require('../../assets/profile_1.png')} />
                <ProfileTextWrapper>
                  <ProfileName>GilDong Hong</ProfileName>
                  <PostTime>10분 전</PostTime>
                </ProfileTextWrapper>
                <FollowBtn onPress={() => {}}>
                  <FollowBtnText>팔로우</FollowBtnText>
                </FollowBtn>
              </ProfileWrapper>
              <PostImageWrapper>
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
                  <IconBtn>
                    <IconImage
                      source={require('../../assets/comment_icon.png')}
                    />
                  </IconBtn>
                </IconImageWrapper>
                <AlarmText>806명이 좋아합니다.</AlarmText>
              </IconWrapper>

              <FollowWrapper>
                <ProfileImage source={require('../../assets/profile_2.png')} />
                <FollowTextWrapper>
                  <FollowName>Benjamin</FollowName>
                  <CommentText>bicycles very nice..!!</CommentText>
                  <AllCommentBtn onPress={() => {}}>
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
`;

const Line = styled.View`
  width: 100%;
  padding: 5px;
  background-color: #f3f3f3;
`;

const NewFollowerWrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 20px;
`;

const NewFollowerBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
  align-items: center;
  justify-content: flex-start;
`;

const NewFollowerText = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  text-align: left;
  margin-right: 5px;
`;

const NewFollowerNumber = styled.Text`
  color: #007bf1;
  font-weight: bold;
  font-size: 16px;
`;

const NewFollowerMoreImage = styled.Image`
  width: 10px;
  height: 10px;
`;

const FollowerWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
`;

const FollowerImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FollowerImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border-width: 2px;
  border-color: #007bf1;
`;

const FollowerName = styled.Text`
  font-size: 14px;
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
  height: 230px;
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
  border-color: ${(props: IContainerProps) =>
    props.isClick ? '#007bf1' : '#fff'};
`;

const MenuBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
`;

const MenuText = styled.Text`
  font-size: 18px;
  color: ${(props: IContainerProps) => (props.isClick ? '#007bf1' : '#333')};
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;

const PostWrapper = styled.View`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
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
  width: 60px;
  height: 60px;
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

const ProfileName = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #303030;
`;

const PostTime = styled.Text`
  font-size: 15px;
  color: #5f5e5e;
  padding-bottom: 5px;
`;

const FollowBtn = styled.TouchableOpacity`
  width: 20%;
  padding: 6px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  background-color: #007bf1;
`;

const FollowBtnText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const PostImageWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 280px;
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
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const RecordImage = styled.Image`
  width: 30px;
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
  width: 12%;
  /* border-width: 1px; */
`;

const IconImage = styled.Image`
  width: 25px;
  height: 25px;
`;

const AlarmText = styled.Text`
  font-size: 15px;
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

const FollowName = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #303030;
`;

const CommentText = styled.Text`
  font-size: 15px;
  color: #5f5e5e;
  padding-bottom: 10px;
`;

const AllCommentBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
  align-items: center;
  justify-content: flex-start;
`;

const AllCommentText = styled.Text`
  font-size: 15px;
  color: #7c7c7c;
`;
