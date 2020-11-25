import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <PostWrapper>
              <ProfileWrapper>
                <ProfileImage
                  source={require('../../../assets/profile_1.png')}
                />
                <ProfileTextWrapper>
                  <ProfileName>GilDong Hong</ProfileName>
                  <PostTime>10분 전</PostTime>
                </ProfileTextWrapper>
                <FollowBtn onPress={() => {}}>
                  <FollowBtnText>팔로우</FollowBtnText>
                </FollowBtn>
              </ProfileWrapper>
              <PostImageWrapper>
                <PostImage source={require('../../../assets/photo_1.jpeg')} />
              </PostImageWrapper>
              <IconWrapper>
                <IconImageWrapper>
                  <IconBtn>
                    <IconImage
                      source={require('../../../assets/heart_icon.png')}
                    />
                  </IconBtn>
                  <IconBtn>
                    <IconImage
                      source={require('../../../assets/comment_icon.png')}
                    />
                  </IconBtn>
                </IconImageWrapper>
                <AlarmText>806명이 좋아합니다.</AlarmText>
              </IconWrapper>
              <FollowWrapper>
                <ProfileImage
                  source={require('../../../assets/profile_2.png')}
                />
                <FollowTextWrapper>
                  <FollowName>Benjamin</FollowName>
                  <CommentText>bicycles very nice..!!</CommentText>
                  <AllCommentBtn onPress={() => {}}>
                    <AllCommentText>9개의 댓글 모두 보기</AllCommentText>
                  </AllCommentBtn>
                </FollowTextWrapper>
              </FollowWrapper>
            </PostWrapper>
            <Line></Line>
            <PostWrapper>
              <ProfileWrapper>
                <ProfileImage
                  source={require('../../../assets/profile_1.png')}
                />
                <ProfileTextWrapper>
                  <ProfileName>GilDong Hong</ProfileName>
                  <PostTime>10분 전</PostTime>
                </ProfileTextWrapper>
                <FollowBtn onPress={() => {}}>
                  <FollowBtnText>팔로우</FollowBtnText>
                </FollowBtn>
              </ProfileWrapper>
              <PostImageWrapper>
                <PostImage source={require('../../../assets/photo_1.jpeg')} />
              </PostImageWrapper>
              <IconWrapper>
                <IconImageWrapper>
                  <IconBtn>
                    <IconImage
                      source={require('../../../assets/heart_icon.png')}
                    />
                  </IconBtn>
                  <IconBtn>
                    <IconImage
                      source={require('../../../assets/comment_icon.png')}
                    />
                  </IconBtn>
                </IconImageWrapper>
                <AlarmText>806명이 좋아합니다.</AlarmText>
              </IconWrapper>
              <FollowWrapper>
                <ProfileImage
                  source={require('../../../assets/profile_2.png')}
                />
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
  align-items: center;
  justify-content: center;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 280px;
  border-radius: 5px;
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
