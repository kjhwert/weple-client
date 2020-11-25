import React from 'react';
import styled from 'styled-components/native';
import Card from '../../components/Card';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <SignInWrapper>
              <LoginTitle>로그인</LoginTitle>
              <SignInTitle>이메일</SignInTitle>
              <LoginInput placeholder="이메일을 입력하세요." />
              <PasswordSearchWrapper>
                <PasswordWrapper>
                  <SignInTitle>비밀번호</SignInTitle>
                  <LoginInput placeholder="비밀번호를 입력하세요." />
                </PasswordWrapper>
                <PasswordBtn
                  onPress={() => {
                    navigation.navigate('password');
                  }}>
                  <PasswordText>잊으셨나요?</PasswordText>
                </PasswordBtn>
              </PasswordSearchWrapper>

              <LoginButton
                onPress={() => {
                  navigation.navigate('bottomTab');
                }}>
                <LoginText>로그인</LoginText>
              </LoginButton>
            </SignInWrapper>

            <SnsLoginWrapper>
              <KakaoLoginBtn
                onPress={() => {
                  navigation.navigate('signIn');
                }}>
                <LogoImage source={require('../../assets/kakaoLogo.png')} />
                <KakaoLoginText>카카오톡으로 로그인</KakaoLoginText>
              </KakaoLoginBtn>
              <FaceBookLoginBtn onPress={() => {}}>
                <LogoImage source={require('../../assets/facebookLogo.png')} />
                <FaceBookLoginText>FaceBook으로 로그인</FaceBookLoginText>
              </FaceBookLoginBtn>
              <AppleLoginBtn onPress={() => {}}>
                <LogoImage source={require('../../assets/appleLogo.png')} />
                <AppleLoginText>Apple로 로그인</AppleLoginText>
              </AppleLoginBtn>
              <GoogleLoginBtn onPress={() => {}}>
                <LogoImage source={require('../../assets/googleLogo.png')} />
                <GoogleLoginText>Google로 로그인</GoogleLoginText>
              </GoogleLoginBtn>

              <FreeSignInWrapper>
                <SignInInfoText>아직 계정이 없으신가요?</SignInInfoText>
                <SignInButton
                  onPress={() => {
                    navigation.navigate('signIn');
                  }}>
                  <SignInText>무료 회원가입</SignInText>
                </SignInButton>
              </FreeSignInWrapper>
            </SnsLoginWrapper>
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

const LoginTitle = styled.Text`
  width: 100%;
  font-size: 19px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px;
`;

const SignInWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const SignInTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const LoginInput = styled.TextInput`
  padding: 5px 10px;
  border-bottom-width: 1px;
  border-color: #babfc7;
  margin-bottom: 20px;
  width: 100%;
`;

const PasswordSearchWrapper = styled.View`
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const PasswordWrapper = styled.View`
  display: flex;
  width: 75%;
  align-items: flex-start;
  justify-content: flex-start;
`;

const PasswordBtn = styled.TouchableOpacity`
  width: 25%;
  align-items: center;
  justify-content: center;
`;

const PasswordText = styled.Text`
  color: #007bf1;
  font-weight: bold;
  font-size: 12px;
`;

const LoginButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: #b2b2b2;
`;

const LoginText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const SnsLoginWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const LogoImage = styled.Image`
  width: 22px;
  height: 22px;
`;

const KakaoLoginBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-width: 1px;
  border-color: #eee;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const KakaoLoginText = styled.Text`
  color: #333;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  text-align: center;
`;

const FaceBookLoginBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-width: 1px;
  border-color: #eee;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const FaceBookLoginText = styled.Text`
  color: #333;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  text-align: center;
`;

const AppleLoginBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-width: 1px;
  border-color: #eee;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const AppleLoginText = styled.Text`
  color: #333;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  text-align: center;
`;

const GoogleLoginBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-width: 1px;
  border-color: #eee;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const GoogleLoginText = styled.Text`
  color: #333;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  text-align: center;
`;

const FreeSignInWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const SignInButton = styled.TouchableOpacity``;

const SignInText = styled.Text`
  color: #007bf1;
  font-weight: bold;
  font-size: 12px;
`;

const SignInInfoText = styled.Text`
  color: #9f9f9f;
  font-weight: bold;
  font-size: 12px;
  padding-right: 10px;
`;
