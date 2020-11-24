import React from 'react';
import styled from 'styled-components/native';
import Card from '../../../../components/Card';

export default ({navigation}) => {
  return (
    <Container>
      <Card>
        <PersonalWrapper>
          <PersonalTitle>개인정보에 대해서</PersonalTitle>
          <PersonalContent>
            {'개인정보는 땀나의 주요 관심사 중 하나입니다.\n' +
              '만약 개인정보가 당신에게 중요하다면\n' +
              '개인정보 정책 조건에 동의하기 전에\n' +
              '땀나가 어떻게 당신의 데이터를 보호하는지 확인하실\n' +
              '수 있습니다.'}
          </PersonalContent>
          <OrderWrapper>
            <PersonalOrder>01</PersonalOrder>
            <PersonalImageWrapper>
              <PersonalImage
                source={require('../../../../assets/shield.png')}
              />
            </PersonalImageWrapper>
          </OrderWrapper>
        </PersonalWrapper>

        {/* <PersonalWrapper>
          <PersonalTitle>개인 동영상 등등</PersonalTitle>
          <PersonalContent>
            {'당신의 모험을 땀나게 하기 위하여, 경로 및\n' +
              '사진과 같은 귀하의 개인 데이터를 처리 해야\n' +
              '합니다.'}
          </PersonalContent>

          <OrderWrapper>
            <PersonalOrder>02</PersonalOrder>
            <PersonalImageWrapper>
              <PersonalImage
                source={require('../../../../assets/camera.png')}
              />
            </PersonalImageWrapper>
          </OrderWrapper>
        </PersonalWrapper>

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

        <PersonalWrapper>
          <PersonalTitle>무슨 일이 일어나는지 알기</PersonalTitle>
          <PersonalContent>
            {'우리는 중요한 업데이트(새로운 동영상과\n' +
              '같은)나 나누고 싶은 놀랄 만한 무언가가\n' +
              '있을 때는 알려드립니다.\n' +
              '계정 설정에서 알림을 관리할 수 있습니다.'}
          </PersonalContent>

          <OrderWrapper>
            <PersonalOrder>04</PersonalOrder>
            <PersonalImageWrapper>
              <PersonalImage source={require('../../../../assets/alarm.png')} />
            </PersonalImageWrapper>
          </OrderWrapper>
        </PersonalWrapper> */}

        <LineWrapper>
          <NowLine></NowLine>
          <NextLine></NextLine>
        </LineWrapper>

        <AgreeBtnWrapper>
          <AgreeButton
            onPress={() => {
              navigation.navigate('personalVideo');
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
  width: 85%;
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
