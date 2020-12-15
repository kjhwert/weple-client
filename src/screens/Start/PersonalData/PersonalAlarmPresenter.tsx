import React from 'react';
import styled from 'styled-components/native';

export default ({navigation}) => {
  return (
    <Container>
      <Card>
        <PersonalWrapper>
          <PersonalTitle>무슨 일이 일어나는지 알기</PersonalTitle>
          <PersonalContent>
            {
              '우리는 중요한 업데이트(새로운 동영상과\n같은)나 나누고 싶은 놀랄 만한 무언가가\n있을 때는 알려드립니다.\n계정 설정에서 알림을 관리할 수 있습니다.'
            }
          </PersonalContent>
          <OrderWrapper>
            <PersonalOrder>04</PersonalOrder>
            <PersonalImageWrapper>
              <PersonalImage
                source={require('../../../assets/personal_alarm.png')}
              />
            </PersonalImageWrapper>
          </OrderWrapper>
        </PersonalWrapper>
        <LineWrapper>
          <NowLine></NowLine>
        </LineWrapper>
      </Card>

      <NextBtn
        onPress={() => {
          navigation.navigate('startAlarmSet');
        }}>
        <NextText>동의함</NextText>
      </NextBtn>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Card = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #f9f9f9;
`;

const PersonalWrapper = styled.View`
  flex: 6;
  display: flex;
  width: 100%;
  border-width: 1px;
  border-color: #eee;
  background-color: #fff;
  padding: 20px 10px;
`;

const PersonalTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  max-width: 50%;
  background-color: #007bf1;
  padding: 5px;
`;

const PersonalContent = styled.Text`
  flex: 6;
  font-size: 13px;
  text-align: left;
  line-height: 25px;
  color: #6f6f6f;
  padding: 20px 5px 60px 5px;
`;

const OrderWrapper = styled.View`
  display: flex;
  flex: 4;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px 5px;
`;

const PersonalOrder = styled.Text`
  font-size: 19px;
  font-weight: bold;
  text-align: left;
  color: #c0c0c0;
  padding: 5px;
`;

const PersonalImageWrapper = styled.View`
  display: flex;
  justify-content: flex-end;
`;

const PersonalImage = styled.Image`
  width: 70px;
  height: 70px;
`;

const LineWrapper = styled.View`
  flex: 3;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 30px;
`;

const NowLine = styled.View`
  display: flex;
  width: 100%;
  border-width: 3px;
  border-color: #007bf1;
`;

const NextBtn = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  background-color: #007bf1;
  position: absolute;
  bottom: 0;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
