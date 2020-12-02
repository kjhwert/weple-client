import React from 'react';
import styled from 'styled-components/native';
// import DropdownMenu from 'react-native-dropdown-menu';

// var SearchData = [['싸이클링', '달리기', '걷기', '등산']];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <ActiveSelectTitleWrapper>
              <ProfileTitleBtn onPress={() => {}}>
                <ProfileActiveTitle>Select DropDown</ProfileActiveTitle>
                {/* <DropdownMenu
                  style={{
                    flex: 1,
                    position: 'absolute',
                  }}
                  bgColor={'white'}
                  tintColor={'#666666'}
                  activityTintColor={'green'}
                  // arrowImg={}
                  // checkImage={}
                  // optionTextStyle={{color: '#333333'}}
                  // titleStyle={{color: '#333333'}}
                  // maxHeight={300}
                  handler={(selection, row) => console.log(row)}
                  data={SearchData}></DropdownMenu> */}
              </ProfileTitleBtn>
              <SortBtn>
                <SortImage source={require('../../../assets/sort_icon.png')} />
              </SortBtn>
            </ActiveSelectTitleWrapper>

            <PostWrapper>
              <ProfileWrapper>
                <ProfileImage
                  source={require('../../../assets/profile_1.png')}
                />
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
              <PostImageWrapper>
                <PostImage source={require('../../../assets/photo_1.jpeg')} />
                <RecordWrapper>
                  <RecordImage source={require('../../../assets/cycle.png')} />
                  <RecordText>21.7 킬로미터</RecordText>
                </RecordWrapper>
              </PostImageWrapper>
              <IconWrapper>
                <IconImageWrapper>
                  <IconBtn>
                    <IconImage
                      source={require('../../../assets/heart_icon_red.png')}
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
                  <FollowNameBtn onPress={() => {}}>
                    <FollowName>Benjamin</FollowName>
                  </FollowNameBtn>
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
                  <ProfileNameBtn onPress={() => {}}>
                    <ProfileName>GilDong Hong</ProfileName>
                  </ProfileNameBtn>
                  <PostTime>10분 전</PostTime>
                </ProfileTextWrapper>
                <FollowBtn onPress={() => {}}>
                  <FollowBtnText>팔로우</FollowBtnText>
                </FollowBtn>
              </ProfileWrapper>
              <PostImageWrapper>
                <PostImage source={require('../../../assets/photo_1.jpeg')} />
                <RecordWrapper>
                  <RecordImage source={require('../../../assets/cycle.png')} />
                  <RecordText>21.7 킬로미터</RecordText>
                </RecordWrapper>
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
                  <FollowNameBtn onPress={() => {}}>
                    <FollowName>Benjamin</FollowName>
                  </FollowNameBtn>
                  <CommentText>bicycles very nice..!!</CommentText>
                  <AllCommentBtn onPress={() => {}}>
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

const ActiveSelectTitleWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: #f3f3f3;
  padding: 20px;
  margin-bottom: 5px;
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
  width: 25px;
  height: 20px;
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
  height: 250px;
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
  width: 22px;
  height: 19px;
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
