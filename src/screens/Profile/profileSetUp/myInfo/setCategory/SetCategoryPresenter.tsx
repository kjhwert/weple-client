import React from 'react';
import styled from 'styled-components/native';
import {StartNextBtn} from '../../../../../components/CommonBtn';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper></ScrollWrapper>
      </ScrollContainer>
      <StartNextBtn text={'저장'} navigation={navigation} />
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
