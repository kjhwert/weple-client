import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import NextBtn from '../../../components/NextBtn';

export default ({navigation}) => {
  return (
    <Container>
      <ContainerCard>
        <SubjectWrapper>
          <SubjectText>어떤 주제와 관련 있나요?</SubjectText>
        </SubjectWrapper>
      </ContainerCard>
      <NextBtn nextPage={'togetherPostIntroduce'} navigation={navigation}>
        {`다음`}
      </NextBtn>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const SubjectWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const SubjectText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #6f6f6f;
  margin-bottom: 5px;
`;
