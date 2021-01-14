import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
}

export default ({navigation, content}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <JoinImageWrapper>
            <JoinImage source={require('../../../assets/photo_2.jpeg')} />
          </JoinImageWrapper>
          <Card>
            <JoinWrapper>
              <JoinInfoWrapper>
                <JoinTitle>강변북로 라이딩</JoinTitle>
                <JoinTextWrapper>
                  <JoinInfoTitle>현재 참여인원</JoinInfoTitle>
                  <JoinInfoContentBtn
                    onPress={() => {
                      navigation.navigate('togetherMember');
                    }}>
                    <JoinInfoNumber>12명</JoinInfoNumber>
                    <JoinInfoMoreImage source={require('../../../assets/more.png')} />
                  </JoinInfoContentBtn>

                  <JoinInfoTitle>참가비</JoinInfoTitle>
                  <JoinInfoContent>10,000원</JoinInfoContent>
                  <JoinInfoTitle>지역</JoinInfoTitle>
                  <JoinInfoContent>서울시 마포구 백범로 31길</JoinInfoContent>
                  <JoinInfoTitle>모임일시</JoinInfoTitle>
                  <JoinInfoContent>2020년 12월 25일 13시 30분</JoinInfoContent>
                  <JoinInfoTitle>모임위치</JoinInfoTitle>
                  <JoinInfoContent>공덕역 2번출구 앞</JoinInfoContent>
                </JoinTextWrapper>
              </JoinInfoWrapper>

              {content.map((item, idx) => (
                <JoinContentWrapper key={idx}>
                  <JoinContentTitle>{item.title}</JoinContentTitle>
                  <JoinContent>{item.content}</JoinContent>
                </JoinContentWrapper>
              ))}

              <FollowWrapper>
                <ProfileImage source={require('../../../assets/profile_2.png')} />
                <FollowTextWrapper>
                  <FollowName>Benjamin</FollowName>
                  <CommentText>bicycles very nice..!!</CommentText>
                  <AllCommentBtn onPress={() => {}}>
                    <AllCommentText>9개의 댓글 모두 보기</AllCommentText>
                  </AllCommentBtn>
                </FollowTextWrapper>
              </FollowWrapper>

              <JoinBtnWrapper>
                <JoinButton
                  onPress={() => {
                    navigation.navigate('togetherMain');
                  }}>
                  <JoinText>나가기</JoinText>
                </JoinButton>
              </JoinBtnWrapper>
            </JoinWrapper>
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
  padding: 20px;
`;

const JoinImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const JoinImage = styled.Image`
  width: 100%;
  height: 240px;
`;

const JoinWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  border-width: 1px;
  border-color: #e2e2e2;
`;

const JoinInfoWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #dcdcdc;
`;

const JoinTextWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 0 20px 0;
`;

const JoinTitle = styled.Text`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: #222;
  padding: 10px 0;
`;

const JoinInfoTitle = styled.Text`
  width: 35%;
  font-size: 12px;
  font-weight: bold;
  color: #878787;
  padding: 5px 0;
`;

const JoinInfoContent = styled.Text`
  width: 65%;
  font-size: 12px;
  color: #333333;
  padding: 5px 0;
  text-align: right;
`;

const JoinInfoContentBtn = styled.TouchableOpacity`
  width: 65%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
`;

const JoinInfoNumber = styled.Text`
  color: #007bf1;
  font-weight: bold;
  font-size: 14px;
  text-align: right;
  margin-right: 3px;
`;

const JoinInfoMoreImage = styled.Image`
  width: 8px;
  height: 12px;
`;

const JoinContentWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #dcdcdc;
  padding: 20px 0;
`;

const JoinContentTitle = styled.Text`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: #2e2e2e;
  padding: 5px 0;
`;

const JoinContent = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #878787;
  padding: 5px 0;
`;

const FollowWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 20px;
  width: 100%;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 20px;
`;

const FollowTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 75%;
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

const JoinBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const JoinButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  background-color: #b2b2b2;
`;

const JoinText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
