import React from 'react';
import styled from 'styled-components/native';
import NextBtn from '../../../components/NextBtn';

interface IProps {
  navigation: any;
}

export default ({navigation, content}: IProps) => {
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
                <JoinTitleWrapper>
                  <JoinTitle>함께하는 강변북로 라이딩</JoinTitle>
                  <ShareBtn>
                    <ShareImage
                      source={require('../../../assets/share_icon.png')}
                    />
                  </ShareBtn>
                </JoinTitleWrapper>
                <JoinTextWrapper>
                  <JoinInfoTitle>최대 참여인원</JoinInfoTitle>
                  <JoinInfoContent>50명</JoinInfoContent>
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

              <JoinButton
                onPress={() => {
                  navigation.navigate('togetherModify');
                }}>
                <ButtonText>수정하기</ButtonText>
              </JoinButton>
              <DeleteButton onPress={() => {}}>
                <ButtonText>삭제하기</ButtonText>
              </DeleteButton>
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
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  shadow-color: grey;
  shadow-offset: 0px 0px;
  elevation: 0.5;
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
  width: 22px;
  height: 19px;
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
const JoinTextWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 0 20px 0;
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

const JoinButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px;
  margin-top: 20px;
  background-color: #b2b2b2;
`;

const DeleteButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px;
  background-color: #f1004f;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
