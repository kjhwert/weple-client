import React from 'react';
import styled from 'styled-components/native';

export default ({children}) => {
  return <Container>{children}</Container>;
};

const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;
