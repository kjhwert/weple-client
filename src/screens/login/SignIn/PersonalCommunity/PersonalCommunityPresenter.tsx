import React from 'react';
import styled from 'styled-components/native';
import Card from '../../../../components/Card';

export default ({navigation}) => {
  return (
    <Container>
      <Card>
        <PersonalWrapper>
          <PersonalTitle>경험을 향상하기</PersonalTitle>
          <PersonalContent>
            {'우리는 귀하의 익명의 데이터를 이용하여\n' +
              '귀하의 야외 활동 커뮤니티를 활용하는데 대한\n' +
              '새로운 혁신을 구축하는 것을 좋아합니다.'}
          </PersonalContent>

          <OrderWrapper>
            <PersonalOrder>03</PersonalOrder>
            <PersonalImageWrapper>
              <PersonalImage source={require('../../../../assets/paper.png')} />
            </PersonalImageWrapper>
          </OrderWrapper>
        </PersonalWrapper>

        <LineWrapper>
          <NowLine></NowLine>
          <NextLine></NextLine>
        </LineWrapper>

        <AgreeBtnWrapper>
          <AgreeButton
            onPress={() => {
              navigation.navigate('personalAlarm');
            }}>
            <AgreeText>동의함</AgreeText>
          </AgreeButton>
        </AgreeBtnWrapper>
      </Card>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const PersonalWrapper = styled.View`
  display: flex;
  width: 100%;
  border-width: 1px;
  border-color: #eee;
  background-color: #fff;
  padding: 20px 10px;
`;

const PersonalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  max-width: 60%;
  background-color: #007bf1;
  padding: 5px;
`;

const PersonalContent = styled.Text`
  font-size: 15px;
  text-align: left;
  line-height: 25px;
  color: #6f6f6f;
  padding: 20px 5px;
`;

const OrderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 30px 5px;
`;

const PersonalOrder = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #c0c0c0;
  padding: 5px;
  align-items: flex-end;
  justify-content: flex-end;
`;

const PersonalImageWrapper = styled.View`
  display: flex;
  justify-content: flex-end;
`;

const PersonalImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const LineWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 30px;
`;

const NowLine = styled.View`
  display: flex;
  width: 75%;
  border-width: 3px;
  border-color: #007bf1;
`;

const NextLine = styled.View`
  display: flex;
  width: 25%;
  border-width: 3px;
  border-color: #b2b2b2;
`;

const AgreeBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 20px;
  align-items: center;
  justify-content: center;
`;

const AgreeButton = styled.TouchableOpacity`
  background-color: #b2b2b2;
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  align-content: center;
  border-radius: 5px;
`;

const AgreeText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
