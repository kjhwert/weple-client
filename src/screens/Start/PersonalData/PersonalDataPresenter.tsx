import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
      <Card>
        <PersonalWrapper>
          <PersonalTitle>개인정보에 대해서</PersonalTitle>
          <PersonalContent>
            {
              '개인정보는 땀나의 주요 관심사 중 하나입니다.\n만약 개인정보가 당신에게 중요하다면\n개인정보 정책 조건에 동의하기 전에\n땀나가 어떻게 당신의 데이터를 보호하는지 확인하실\n수 있습니다.'
            }
          </PersonalContent>
          <OrderWrapper>
            <PersonalOrder>01</PersonalOrder>
            <PersonalImageWrapper>
              <PersonalImage
                source={require('../../../assets/personal_shield.png')}
              />
            </PersonalImageWrapper>
          </OrderWrapper>
        </PersonalWrapper>
        <LineWrapper>
          <NowLine></NowLine>
          <NextLine></NextLine>
        </LineWrapper>
      </Card>

      <NextBtn
        onPress={() => {
          navigation.navigate('personalVideo');
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
  padding: 20px 5px;
`;

const OrderWrapper = styled.View`
  display: flex;
  flex: 4;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px 5px;
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
  width: 25%;
  border-width: 3px;
  border-color: #007bf1;
`;

const NextLine = styled.View`
  display: flex;
  width: 75%;
  border-width: 3px;
  border-color: #b2b2b2;
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
