import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import NextBtn from '../../../components/NextBtn';

export default ({navigation}) => {
  return (
    <Container>
      <ContainerCard>
        <IntroduceWrapper>
          <IntroduceTitle>제목</IntroduceTitle>
          <IntroduceTitleInput placeholder="제목을 10자 이상 입력해주세요." />
          <IntroduceTitle>소개</IntroduceTitle>
          <IntroduceInput />
          <IntroduceTitle>이런분들께 추천해요</IntroduceTitle>
          <IntroduceInput />
          <IntroduceTitle>공지사항</IntroduceTitle>
          <IntroduceInput />
        </IntroduceWrapper>
      </ContainerCard>
      <NextBtn nextPage={'togetherPostPlace'} navigation={navigation}>
        {`다음`}
      </NextBtn>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const IntroduceWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const IntroduceTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const IntroduceTitleInput = styled.TextInput`
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #b5b5b5;
  font-size: 12px;
  color: #6f6f6f;
`;

const IntroduceInput = styled.TextInput`
  width: 100%;
  height: 20%;
  padding: 5px 10px;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: #b5b5b5;
  border-radius: 5px;
  font-size: 10px;
  color: #6f6f6f;
`;
