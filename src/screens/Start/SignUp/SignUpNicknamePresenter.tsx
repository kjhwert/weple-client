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
          <SignUpTitle>닉네임</SignUpTitle>
          <NickNameWrapper>
            <NickNameInput placeholder="닉네임을 입력하세요." />
            <DuplicateBtn onPress={() => {}}>
              <DuplicateText>중복확인</DuplicateText>
            </DuplicateBtn>
          </NickNameWrapper>
        </SignUpWrapper>
      </ContainerCard>
      <NextBtn nextPage={'signUpName'} navigation={navigation}>
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

const DuplicateBtn = styled.TouchableOpacity`
  width: 25%;
  align-items: center;
  border-radius: 5px;
  margin-left: 3%;
  padding: 10px 5px;
  background-color: #fff;
  border-width: 1px;
  border-color: #acacac;
`;

const DuplicateText = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
`;

const NickNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const NickNameInput = styled.TextInput`
  width: 70%;
  padding: 5px 10px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #acacac;
  font-size: 14px;
  color: #6f6f6f;
`;
