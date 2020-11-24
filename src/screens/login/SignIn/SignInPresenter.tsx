import React from 'react';
import styled from 'styled-components/native';
import Card from '../../../components/Card';

export default ({navigation}) => {
  return (
    <Container>
      <Card>
        <SignInWrapper>
          <SignInTitle>이메일</SignInTitle>
          <Input placeholder="이메일을 입력하세요." name="id" />
          <SignInTitle>비밀번호</SignInTitle>
          <Input
            placeholder="비밀번호를 입력하세요."
            secureTextEntry={true}
            name="password_1"
          />
          <Input
            placeholder="비밀번호를 한번 더 입력하세요."
            secureTextEntry={true}
            name="password_2"
          />
          <SignInTitle>닉네임</SignInTitle>
          <NickNameWrapper>
            <NickNameInput placeholder="닉네임을 입력하세요." name="nickName" />
            <OverlapCheckBtn>
              <OverlabCheckText>중복확인</OverlabCheckText>
            </OverlapCheckBtn>
          </NickNameWrapper>
          <SignInTitle>이름</SignInTitle>
          <Input placeholder="이름을 입력하세요." />
        </SignInWrapper>

        <NextBtnWrapper>
          <NextButton
            onPress={() => {
              navigation.navigate('category');
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

const SignInWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const SignInTitle = styled.Text`
  font-size: 15px;
  color: #181818;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  padding: 10px 15px;
  border-bottom-width: 1px;
  border-radius: 5px;
  margin-bottom: 30px;
  border-color: #babfc7;
`;

const NickNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const NickNameInput = styled.TextInput`
  width: 70%;
  padding: 10px 15px;
  border-bottom-width: 1px;
  border-radius: 5px;
  margin-bottom: 30px;
  border-color: #babfc7;
`;

const OverlapCheckBtn = styled.TouchableOpacity`
  border-width: 1px;
  width: 25%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-left: 3%;
  padding: 10px 5px;
  background-color: #fff;
  border-color: #b9bec6;
`;

const OverlabCheckText = styled.Text`
  color: #2b2b2b
  font-size: 14px;
`;

const NextBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 20px;
`;

const NextButton = styled.TouchableOpacity`
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #b2b2b2;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
