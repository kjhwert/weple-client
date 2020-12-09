import React from 'react';
import styled from 'styled-components/native';

export default () => {
  return (
    <Container>
      <LoadingText>loading...</LoadingText>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.Text``;
