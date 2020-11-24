import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

interface IProps {
  children: ReactNode;
  padding?: number;
  marginTop?: number;
}

export default ({children, padding, marginTop}: IProps) => {
  return (
    <Card padding={padding} marginTop={marginTop}>
      {children}
    </Card>
  );
};

const Card = styled.View`
  background-color: white;
  width: 100%;
  height: 100%;
  padding: ${({padding}) => (padding ? padding : 0)}px;
  margin-top: ${({marginTop}) => (marginTop ? marginTop : 0)}px;
  padding: 20px;
  display: flex;
  align-items: center;
`;
