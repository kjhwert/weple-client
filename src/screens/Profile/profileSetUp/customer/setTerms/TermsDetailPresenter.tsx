import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../../../components/ContainerCard';

interface IProps {
  termsDetail: any;
}

export default ({termsDetail}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <NoticeContent>{termsDetail.description}</NoticeContent>
          </ContainerCard>
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

const NoticeContent = styled.Text`
  width: 100%;
  font-size: 13px;
  color: #555555;
`;
