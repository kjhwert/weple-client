import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import NextBtn from '../../../components/NextBtn';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <CreateAccountWrapper>
          <CreateAccountTitle>계정 만들기</CreateAccountTitle>
          <CreateAccountContent>
            {
              '전력달리기, 미친 것같은 자전거타기, 햇빛 좋은날\n하이킹하고 싶은 것은 무엇이든 당신의 모든 활동을\n쉽고 아름다운 방법으로 공유하세요.'
            }
          </CreateAccountContent>
        </CreateAccountWrapper>

        <SocialLoginWrapper>
          <SocialLogin onPress={() => {}}>
            <SocialLoginText>이메일로 가입하기</SocialLoginText>
          </SocialLogin>
          <SocialLogin onPress={() => {}}>
            <LogoImage source={require('../../../assets/kakaoLogo.png')} />
            <SocialLoginText>카카오톡으로 시작하기</SocialLoginText>
          </SocialLogin>
          <SocialLogin onPress={() => {}}>
            <LogoImage source={require('../../../assets/facebookLogo.png')} />
            <SocialLoginText>FaceBook으로 시작하기</SocialLoginText>
          </SocialLogin>
          <SocialLogin onPress={() => {}}>
            <LogoImage source={require('../../../assets/appleLogo.png')} />
            <SocialLoginText>Apple로 시작하기</SocialLoginText>
          </SocialLogin>
          <SocialLogin onPress={() => {}}>
            <LogoImage source={require('../../../assets/googleLogo.png')} />
            <SocialLoginText>Google로 시작하기</SocialLoginText>
          </SocialLogin>
        </SocialLoginWrapper>
      </ContainerCard>
      <NextBtn nextPage={'signUpEmail'} navigation={navigation}>
        {`다음`}
      </NextBtn>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const CreateAccountWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const CreateAccountTitle = styled.Text`
  font-size: 19px;
  font-weight: bold;
  text-align: left;
`;

const CreateAccountContent = styled.Text`
  font-size: 12px;
  text-align: left;
  line-height: 25px;
  color: #6f6f6f;
  padding: 30px 0px;
`;

const SocialLoginWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const LogoImage = styled.Image`
  width: 22px;
  height: 22px;
`;

const SocialLogin = styled.TouchableOpacity`
  background-color: white;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
  border-width: 1px;
  border-color: #eee;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SocialLoginText = styled.Text`
  color: #333;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  text-align: center;
`;
