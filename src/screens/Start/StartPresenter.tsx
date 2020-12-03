import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
      <LinearGradient colors={['#79a6fa', '#3065f4', '#4e3adf']}>
        <ContainerCard>
          <AppLogoImageWrapper>
            <AppLogoImage source={require('../../assets/ttamna.png')} />
          </AppLogoImageWrapper>

          <LoginWrapper>
            <LoginInfoWrapper>
              <LoginInfoText>이미 가입하셨으면 로그인해주세요.</LoginInfoText>
              <LoginBtn
                onPress={() => {
                  navigation.navigate('login');
                }}>
                <LoginBtnText>로그인</LoginBtnText>
              </LoginBtn>
            </LoginInfoWrapper>
            <StartBtn
              onPress={() => {
                navigation.navigate('createAccount');
              }}>
              <StartText>시작하기</StartText>
            </StartBtn>
          </LoginWrapper>
        </ContainerCard>
      </LinearGradient>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ContainerCard = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const AppLogoImageWrapper = styled.View`
  flex: 8;
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
  flex: 2;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const LoginInfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LoginInfoText = styled.Text`
  color: #bdc8ff;
  font-size: 12px;
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
  font-size: 15px;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: #bdc8ff;
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
  font-size: 17px;
  font-weight: bold;
`;