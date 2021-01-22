import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {StartNextBtn} from '../../../components/CommonBtn';
import TogetherContext from '../../../module/context/TogetherContext';
import {getTotalTime, getComma} from '../../../components/CommonTime';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {createRoom, getTogetherThumbnail, togetherOpen}: any = useContext(TogetherContext);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <JoinImageWrapper>
            <JoinImage source={getTogetherThumbnail(createRoom.thumbnail)} />
          </JoinImageWrapper>
          <Card>
            <JoinWrapper>
              <JoinInfoWrapper>
                <JoinTitle>{createRoom.title}</JoinTitle>
                <JoinTextWrapper>
                  <JoinInfoTitle>현재 참여인원</JoinInfoTitle>
                  <JoinInfoContent>{createRoom.maxMember}명</JoinInfoContent>
                  <JoinInfoTitle>참가비</JoinInfoTitle>
                  <JoinInfoContent>{getComma(createRoom.togetherPrice)}원</JoinInfoContent>
                  <JoinInfoTitle>지역</JoinInfoTitle>
                  <JoinInfoContent>{createRoom.address}</JoinInfoContent>
                  <JoinInfoTitle>모임일시</JoinInfoTitle>
                  <JoinInfoContent>{getTotalTime(createRoom.togetherDate)}</JoinInfoContent>
                  <JoinInfoTitle>모임위치</JoinInfoTitle>
                  <JoinInfoContent>{createRoom.togetherPlace}</JoinInfoContent>
                </JoinTextWrapper>
              </JoinInfoWrapper>
              <JoinContentWrapper>
                <JoinContentTitle>모임하기 설명</JoinContentTitle>
                <ContentWrap>
                  <JoinContent>{createRoom.description}</JoinContent>
                </ContentWrap>
                <JoinContentTitle>이런 분들께 추천합니다.</JoinContentTitle>
                <ContentWrap>
                  <JoinContent>{createRoom.recommend}</JoinContent>
                </ContentWrap>
                <JoinContentTitle>공지사항</JoinContentTitle>
                <ContentLastWrap>
                  <JoinContent>{createRoom.notice}</JoinContent>
                </ContentLastWrap>
              </JoinContentWrapper>
            </JoinWrapper>
          </Card>
          <StartNextBtn
            StartNextPage={'togetherMain'}
            navigationRoute={{refresh: true}}
            text={'완료'}
            navigation={navigation}
            isActive={true}
            callBack={togetherOpen}
          />
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
  border-color: #e8e8e8;
  margin-bottom: 100px;
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

const ContentLastWrap = styled.View`
  display: flex;
  width: 100%;
  padding-top: 10px;
`;

const JoinContent = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #878787;
  padding: 5px 0;
`;
