import React from 'react';
import styled from 'styled-components/native';

export default () => {
  return (
    <Container>
      <LoadingImage source={require('../assets/loading.gif')} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const LoadingText = styled.Text``;
