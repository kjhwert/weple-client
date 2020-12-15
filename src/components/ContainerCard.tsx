import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

interface IProps {
  children: ReactNode;
  padding?: number;
  margin?: number;
}

export default ({children, padding, margin}: IProps) => {
  return (
    <Container padding={padding} margin={margin}>
      {children}
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
  width: 100%;
  height: 100%;
  padding-top: ${({padding}) => (padding ? padding : 0)}px;
  margin: ${({margin}) => (margin ? margin : 0)}px;
  padding: 20px;
  display: flex;
  align-items: center;
`;
