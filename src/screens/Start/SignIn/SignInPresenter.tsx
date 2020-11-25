import React from 'react';
import styled from 'styled-components/native';
import Card from '../../../components/Card';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
      <Card>
        <SignInWrapper>
          <SignInTitle>이메일</SignInTitle>
          <SignInInput placeholder="이메일을 입력하세요." name="id" />
          <SignInTitle>비밀번호</SignInTitle>
          <SignInInput
            placeholder="비밀번호를 입력하세요."
            secureTextEntry={true}
            name="password_1"
          />
          <SignInInput
            placeholder="비밀번호를 한번 더 입력하세요."
            secureTextEntry={true}
            name="password_2"
          />
          <SignInTitle>닉네임</SignInTitle>
          <NickNameWrapper>
            <NickNameInput placeholder="닉네임을 입력하세요." name="nickName" />
            <DuplicateBtn>
              <DuplicateText>중복확인</DuplicateText>
            </DuplicateBtn>
          </NickNameWrapper>
          <SignInTitle>이름</SignInTitle>
          <SignInInput placeholder="이름을 입력하세요." />
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
  flex: 9;
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

const SignInInput = styled.TextInput`
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #acacac;
  font-size: 15px;
  color: #6f6f6f;
`;

const NickNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const NickNameInput = styled.TextInput`
  width: 70%;
  padding: 5px 10px;
  border-bottom-width: 1px;
  border-radius: 5px;
  margin-bottom: 20px;
  border-color: #acacac;
  font-size: 15px;
  color: #6f6f6f;
`;

const DuplicateBtn = styled.TouchableOpacity`
  width: 25%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-left: 3%;
  padding: 10px 5px;
  background-color: #fff;
  border-width: 1px;
  border-color: #b9bec6;
`;

const DuplicateText = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
`;

const NextBtnWrapper = styled.View`
  flex: 1;
  display: flex;
  width: 100%;
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
  font-size: 16px;
  font-weight: bold;
`;
