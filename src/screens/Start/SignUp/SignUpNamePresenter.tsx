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
          <SignUpTitle>이름</SignUpTitle>
          <SignUpInput placeholder="이름을 입력하세요." />
        </SignUpWrapper>
      </ContainerCard>
      <NextBtn nextPage={'startCategory'} navigation={navigation}>
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
