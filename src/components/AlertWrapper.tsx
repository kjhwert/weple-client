import React from 'react';
import styled from 'styled-components/native';

export default ({children}) => {
  return (
    <Container>
      <AlertCard>{children}</AlertCard>
    </Container>
  );
};

const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlertCard = styled.View`
  z-index: 30;
  width: 240px;
  height: 260px;
  background-color: #fff;
`;
