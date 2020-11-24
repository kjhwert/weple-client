import React from 'react';
import styled from 'styled-components/native';
import Card from '../../../../components/Card';

export default ({navigation}) => {
  return (
    <Container>
      <Card>
        <AlarmWrapper>
          <AlarmTitle>당신에 대한 알림</AlarmTitle>
          <AlarmContent>
            {'...좋아요를 받았을 때\n' + '...팔로우 요청을 받았을 때'}
          </AlarmContent>
        </AlarmWrapper>

        <AlarmBtnWrapper>
          <AlarmBtn onPress={() => {}}>
            <AlarmBtnText>알람 설정 켜기</AlarmBtnText>
          </AlarmBtn>

          <AlarmBtn onPress={() => {}}>
            <AlarmBtnText>나중에 설정하기</AlarmBtnText>
          </AlarmBtn>
        </AlarmBtnWrapper>

        <NextBtnWrapper>
          <NextButton
            onPress={() => {
              navigation.navigate('welcome');
            }}>
            <NextText>다음</NextText>
          </NextButton>
        </NextBtnWrapper>
      </Card>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const AlarmWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const AlarmTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

const AlarmContent = styled.Text`
  font-size: 15px;
  text-align: left;
  line-height: 25px;
  color: #6f6f6f;
  padding: 30px 0px 60px 0px;
`;

const AlarmBtnWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const AlarmBtn = styled.TouchableOpacity`
  background-color: white;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #eee;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const AlarmBtnText = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: bold;
`;

const NextBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
`;

const NextButton = styled.TouchableOpacity`
  background-color: #b2b2b2;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
