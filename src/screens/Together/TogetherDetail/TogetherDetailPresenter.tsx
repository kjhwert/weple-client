import React from 'react';
import styled from 'styled-components/native';

export default ({navigation}) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <JoinImageWrapper>
              <JoinImage source={require('../../../assets/photo_2.jpeg')} />
            </JoinImageWrapper>
            <JoinWrapper>
              <JoinInfoWrapper>
                <JoinTitle>함께하는 강변북로 라이딩</JoinTitle>
                <JoinInfoTitle>현재 참여인원</JoinInfoTitle>
                <JoinInfoContent>12명</JoinInfoContent>
                <JoinInfoTitle>참가비</JoinInfoTitle>
                <JoinInfoContent>10,000원</JoinInfoContent>
                <JoinInfoTitle>지역</JoinInfoTitle>
                <JoinInfoContent>서울시 마포구 백범로 31길</JoinInfoContent>
                <JoinInfoTitle>모임일시</JoinInfoTitle>
                <JoinInfoContent>2020년 12월 25일 13시 30분</JoinInfoContent>
                <JoinInfoTitle>모임위치</JoinInfoTitle>
                <JoinInfoContent>공덕역 2번출구 앞</JoinInfoContent>
                <JoinContentWrapper>
                  <JoinContentTitle>함께하기 설명</JoinContentTitle>
                  <JoinContent>함께하기 설명입니다.</JoinContent>
                </JoinContentWrapper>
              </JoinInfoWrapper>
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
`;

const JoinImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #d1d1d1;
`;

const JoinImage = styled.Image`
  width: 100%;
  height: 250px;
`;

const JoinWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
`;

const JoinInfoWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
  border-width: 1px;
  border-color: #4c585858;
  margin-top: 30px;
`;

const JoinTitle = styled.Text`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #187fe2;
  padding: 5px 0;
  border-width: 1px;
`;

const JoinInfoTitle = styled.Text`
  width: 40%;
  font-size: 16px;
  font-weight: bold;
  color: #878787;
  padding: 5px 0;
`;

const JoinInfoContent = styled.Text`
  width: 60%;
  font-size: 16px;
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
  font-size: 18px;
  font-weight: bold;
  color: #2e2e2e;
  padding: 5px 0;
`;

const JoinContent = styled.Text`
  width: 100%;
  font-size: 15px;
  color: #878787;
  padding: 5px 0;
`;
