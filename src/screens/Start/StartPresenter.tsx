import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export default ({navigation}) => {
  return (
    <Container>
      <LinearGradient colors={['#79a6fa', '#3065f4', '#4e3adf']}>
        <Card>
          <AppLogoImageWrapper>
            <AppLogoImage source={require('../../assets/ttamna.png')} />
          </AppLogoImageWrapper>
          <LoginWrapper>
            <LoginInfoText>이미 가입하셨으면 로그인해주세요.</LoginInfoText>
            <LoginBtn
              onPress={() => {
                navigation.navigate('login');
              }}>
              <LoginBtnText>로그인</LoginBtnText>
            </LoginBtn>
          </LoginWrapper>
          <StartBtnWrapper>
            <StartBtn
              onPress={() => {
                navigation.navigate('createAccount');
              }}>
              <StartText>시작하기</StartText>
            </StartBtn>
          </StartBtnWrapper>
        </Card>
      </LinearGradient>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Card = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const AppLogoImageWrapper = styled.View`
  flex: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const AppLogoImage = styled.Image`
  width: 200px;
  height: 120px;
`;

const LoginWrapper = styled.View`
  flex: 0.1;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

const LoginInfoText = styled.Text`
  color: #bdc8ff;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  text-align: center;
  margin-bottom: 10px;
`;

const LoginBtn = styled.TouchableOpacity`
  width: 25%;
  padding: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const LoginBtnText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: #bdc8ff;
`;

const StartBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 80px;
`;

const StartBtn = styled.TouchableOpacity`
  background-color: #fff;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const StartText = styled.Text`
  color: #007bf1;
  font-size: 18px;
  font-weight: bold;
`;
