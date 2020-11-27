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
        <SignUpWrapper>
          <SignUpTitle>비밀번호</SignUpTitle>
          <SignUpInput
            placeholder="비밀번호를 입력하세요."
            secureTextEntry={true}
          />
          <SignUpInput
            placeholder="비밀번호를 한번 더 입력하세요."
            secureTextEntry={true}
          />
        </SignUpWrapper>
      </ContainerCard>
      <NextBtn nextPage={'signUpNickname'} navigation={navigation}>
        {`다음`}
      </NextBtn>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const SignUpWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const SignUpTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const SignUpInput = styled.TextInput`
  padding: 5px 10px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #acacac;
  font-size: 15px;
  color: #6f6f6f;
`;
