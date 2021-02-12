import React, {useContext} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../components/ContainerCard';
import UserContext from '../../module/context/UserContext';
import AlertWrapper from '../../components/AlertWrapper';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {
    login,
    isLoginActive,
    isLoginBtnActive,
    alertFrame,
    clearAlertFrame,
    onChangeEmail,
    onChangePassword,
  }: any = useContext(UserContext);

  return (
    <Container>
      {alertFrame.showAlert && (
        <AlertWrapper>
          <AlertImageWrapper>
            <AlertImage source={require('../../assets/alertWarn_icon.png')} />
          </AlertImageWrapper>
          <AlertTitleText>{alertFrame.message}</AlertTitleText>
          <AlertContentText>{'다시 입력하세요.'}</AlertContentText>
          <ConfirmButton
            onPress={() => {
              clearAlertFrame();
            }}>
            <ConfirmButtonText>확인</ConfirmButtonText>
          </ConfirmButton>
        </AlertWrapper>
      )}

      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <SignInWrapper>
              <LoginTitle>로그인</LoginTitle>
              <SignInTitle>이메일</SignInTitle>
              <LoginInput
                placeholder="이메일을 입력하세요."
                autoCapitalize="none"
                autoFocus={true}
                onChangeText={onChangeEmail}
                borderColor={isLoginActive.emailFlag}
              />
              <PasswordSearchWrapper>
                <PasswordWrapper>
                  <SignInTitle>비밀번호</SignInTitle>
                  <LoginInput
                    placeholder="비밀번호를 입력하세요."
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={onChangePassword}
                    borderColor={isLoginActive.passwordFlag}
                  />
                </PasswordWrapper>
                <PasswordBtn
                  onPress={() => {
                    navigation.navigate('password');
                  }}>
                  <PasswordText>잊으셨나요?</PasswordText>
                </PasswordBtn>
              </PasswordSearchWrapper>
              <LoginButton
                backgroundColor={isLoginBtnActive}
                onPress={async () => {
                  (await login()) ? navigation.navigate('bottomTab') : {};
                }}>
                <LoginText>로그인</LoginText>
              </LoginButton>
            </SignInWrapper>
            <SnsLoginWrapper>
              <KakaoLoginBtn
                onPress={() => {
                  navigation.navigate('kakaoLogin');
                }}>
                <LogoImage source={require('../../assets/logo_kakao.jpg')} />
                <KakaoLoginText>카카오톡으로 로그인</KakaoLoginText>
              </KakaoLoginBtn>
              <FaceBookLoginBtn
                onPress={() => {
                  navigation.navigate('facebookLogin');
                }}>
                <LogoImage source={require('../../assets/logo_facebook.png')} />
                <FaceBookLoginText>FaceBook으로 로그인</FaceBookLoginText>
              </FaceBookLoginBtn>
              <AppleLoginBtn onPress={() => {}}>
                <LogoImage source={require('../../assets/logo_apple.png')} />
                <AppleLoginText>Apple로 로그인</AppleLoginText>
              </AppleLoginBtn>
              <GoogleLoginBtn
                onPress={() => {
                  navigation.navigate('googleLogin');
                }}>
                <LogoImage source={require('../../assets/logo_google.png')} />
                <GoogleLoginText>Google로 로그인</GoogleLoginText>
              </GoogleLoginBtn>
              <FreeSignInWrapper>
                <SignInInfoText>아직 계정이 없으신가요?</SignInInfoText>
                <SignInButton
                  onPress={() => {
                    navigation.navigate('createAccount');
                  }}>
                  <SignInText>무료 회원가입</SignInText>
                </SignInButton>
              </FreeSignInWrapper>
            </SnsLoginWrapper>
          </ContainerCard>
        </ScrollWrapper>
      </ScrollContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const AlertImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

const AlertImage = styled.Image`
  width: 70px;
  height: 70px;
`;

const AlertTitleText = styled.Text`
  font-size: 14px;
  color: #181818;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
`;

const AlertContentText = styled.Text`
  font-size: 12px;
  color: #878787;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
`;

const ConfirmButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px;
  background-color: #007bf1;
  position: absolute;
  bottom: 0;
`;

const ConfirmButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
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
  border-color: ${({borderColor}: {borderColor: string}) => (borderColor ? '#007bf1' : '#babfc7')};
  margin-bottom: 20px;
  width: 100%;
`;

const PasswordSearchWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 100%;
`;

const PasswordWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

const PasswordBtn = styled.TouchableOpacity`
  width: 25%;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 30px;
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
  background-color: ${({backgroundColor}: {backgroundColor: string}) => (backgroundColor ? '#007bf1' : '#b2b2b2')};
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
