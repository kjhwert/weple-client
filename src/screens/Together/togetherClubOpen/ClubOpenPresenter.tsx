import React from 'react';
import styled from 'styled-components/native';

export default ({navigation, content}) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <JoinImageWrapper>
            <JoinImage source={require('../../../assets/photo_4.jpeg')} />
          </JoinImageWrapper>
          <Card>
            <JoinWrapper>
              <JoinInfoWrapper>
                <JoinTitle>함께하는 강변북로 라이딩</JoinTitle>
                <JoinTextWrapper>
                  <JoinInfoTitle>현재 참여인원</JoinInfoTitle>
                  <JoinInfoContentBtn
                    onPress={() => {
                      navigation.navigate('togetherMember');
                    }}>
                    <JoinInfoNumber>12명</JoinInfoNumber>
                    <JoinInfoMoreImage
                      source={require('../../../assets/more.png')}
                    />
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
            </JoinWrapper>

            <NextBtnWrapper>
              <NextButton
                onPress={() => {
                  navigation.navigate('togetherModify');
                }}>
                <NextText>완료</NextText>
              </NextButton>
            </NextBtnWrapper>
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
  border-color: #4c585858;
`;

const JoinInfoWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #919191;
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
`;

const JoinInfoMoreImage = styled.Image`
  width: 10px;
  height: 10px;
`;

const JoinContentWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #919191;
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

const NextBtnWrapper = styled.View`
  flex: 1;
  display: flex;
  width: 100%;
  margin-top: 30px;
`;

const NextButton = styled.TouchableOpacity`
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #b2b2b2;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
