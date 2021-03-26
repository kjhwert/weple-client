import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {getComma, getTotalTime} from '../../../components/CommonTime';
import TogetherContext from '../../../module/context/TogetherContext';
import {IShowTogether} from '../../../module/type/together';
import {timeDifferentFromNow} from '../../../module/common';

interface IProps {
  navigation: any;
  show: IShowTogether;
  togetherInto: Function;
  togetherOutOf: Function;
}

export default ({navigation, show, togetherInto, togetherOutOf}: IProps) => {
  const {getTogetherThumbnail, getTogetherProfile}: any = useContext(TogetherContext);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <JoinImageWrapper>
            <JoinImage source={getTogetherThumbnail(show.together.thumbnail)} />
          </JoinImageWrapper>
          <ContainerCard>
            <JoinWrapper>
              <JoinInfoWrapper>
                <JoinTitleWrapper>
                  <JoinTitle>{show.together.title}</JoinTitle>
                  <ShareBtn
                    onPress={() => {
                      navigation.navigate('togetherShare');
                    }}>
                    <ShareImage source={require('../../../assets/icon_share.png')} />
                  </ShareBtn>
                </JoinTitleWrapper>
                <JoinTextWrapper>
                  <JoinInfoTitle>현재 참여인원</JoinInfoTitle>
                  <JoinInfoContentBtn
                    onPress={() => {
                      navigation.navigate('togetherMember', {togetherId: show.together.id});
                    }}>
                    <JoinInfoNumber>{show.userCount}명</JoinInfoNumber>
                    <JoinInfoMoreImage source={require('../../../assets/more.png')} />
                  </JoinInfoContentBtn>
                  <JoinInfoTitle>참가비</JoinInfoTitle>
                  <JoinInfoContent>{getComma(show.together.togetherPrice)}원</JoinInfoContent>
                  <JoinInfoTitle>지역</JoinInfoTitle>
                  <JoinInfoContent>{show.together.address}</JoinInfoContent>
                  <JoinInfoTitle>모임일시</JoinInfoTitle>
                  <JoinInfoContent>{getTotalTime(show.together.togetherDate)}</JoinInfoContent>
                  <JoinInfoTitle>모임위치</JoinInfoTitle>
                  <JoinInfoContent>{show.together.togetherPlace}</JoinInfoContent>
                </JoinTextWrapper>
              </JoinInfoWrapper>
              <JoinContentWrapper>
                <JoinContentTitle>모임하기 설명</JoinContentTitle>
                <ContentWrap>
                  <JoinContent>{show.together.description}</JoinContent>
                </ContentWrap>
                <JoinContentTitle>이런 분들께 추천합니다.</JoinContentTitle>
                <ContentWrap>
                  <JoinContent>{show.together.recommend}</JoinContent>
                </ContentWrap>
                <JoinContentTitle>공지사항</JoinContentTitle>
                <ContentWrap>
                  <JoinContent>{show.together.notice}</JoinContent>
                </ContentWrap>
              </JoinContentWrapper>
              {show.together.commentNickName ? (
                <FollowWrapper>
                  <ProfileImage source={getTogetherProfile(show.together.commentImage)} />
                  <FollowTextWrapper>
                    <FollowNameBtn onPress={() => {}}>
                      <FollowName>{show.together.commentNickName}</FollowName>
                    </FollowNameBtn>
                    <CommentText>{show.together.commentDescription}</CommentText>
                    <AllCommentBtn
                      onPress={() => {
                        navigation.navigate('togetherComment', {id: show.together.id});
                      }}>
                      <AllCommentText>{show.commentCount}개의 댓글 모두 보기</AllCommentText>
                    </AllCommentBtn>
                  </FollowTextWrapper>
                </FollowWrapper>
              ) : (
                <FollowWrapper>
                  <AllCommentBtn
                    onPress={() => {
                      navigation.navigate('togetherComment', {id: show.together.id});
                    }}>
                    <AllCommentText>댓글 달기</AllCommentText>
                  </AllCommentBtn>
                </FollowWrapper>
              )}
              {show.together.isUsersTogether && (
                <ModifyBtnWrapper>
                  <ModifyButton
                    onPress={() => {
                      navigation.navigate('togetherModify', {id: show.together.id});
                    }}>
                    <ModifyText>수정하기</ModifyText>
                  </ModifyButton>
                </ModifyBtnWrapper>
              )}
              {!show.together.isUsersTogether &&
                (!show.together.isUserJoined ? (
                  <JoinBtnWrapper>
                    <JoinButton
                      onPress={() => {
                        togetherInto();
                      }}>
                      <JoinText>모임 참여하기</JoinText>
                    </JoinButton>
                  </JoinBtnWrapper>
                ) : (
                  timeDifferentFromNow(show.together.togetherDate) > 180 && (
                    <CancelBtnWrapper>
                      <CancelButton
                        onPress={() => {
                          togetherOutOf();
                        }}>
                        <CancelText>모임 나가기</CancelText>
                      </CancelButton>
                    </CancelBtnWrapper>
                  )
                ))}
            </JoinWrapper>
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

const JoinTitleWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const JoinTitle = styled.Text`
  width: 85%;
  font-size: 15px;
  font-weight: bold;
  color: #222;
  padding: 10px 0;
`;

const ShareBtn = styled.TouchableOpacity`
  width: 15%;
  flex-flow: row wrap;
  align-items: flex-end;
  justify-content: flex-end;
`;

const ShareImage = styled.Image`
  width: 23px;
  height: 23px;
`;

const JoinTextWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 0 20px 0;
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
`;

const JoinContentTitle = styled.Text`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: #2e2e2e;
  padding-top: 20px;
`;

const ContentWrap = styled.View`
  display: flex;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #dcdcdc;
  padding: 10px 0 20px 0;
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

const JoinBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const JoinButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px;
  margin-top: 20px;
  background-color: #007bf1;
`;

const JoinText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

const CancelBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const CancelButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px;
  margin-top: 20px;
  background-color: #00bbc7;
`;

const CancelText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

const ModifyBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ModifyButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px;
  margin-top: 20px;
  background-color: #007bf1;
`;

const ModifyText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
