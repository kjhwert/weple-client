import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

interface IProps {
  children: ReactNode;
  padding?: number;
  margin?: number;
}

export default ({children, paddingTop, margin}: IProps) => {
  return (
    <Card paddingTop={paddingTop} margin={margin}>
      {children}
    </Card>
  );
};

const Card = styled.View`
  background-color: white;
  width: 100%;
  height: 100%;
  padding-top: ${({paddingTop}) => (paddingTop ? paddingTop : 0)}px;
  margin: ${({margin}) => (margin ? margin : 0)}px;
  padding: 20px;
  display: flex;
  align-items: center;
`;
