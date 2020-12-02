import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

interface IProps {
  children: ReactNode;
  navigation: any;
  nextPage: any;
}

export default ({children, navigation, nextPage}: IProps) => {
  const moveToPage = () => {
    navigation.navigate(nextPage);
  };

  return (
    <NextButton onPress={moveToPage}>
      <NextText>{children}</NextText>
    </NextButton>
  );
};

const NextButton = styled.TouchableOpacity`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  align-items: center;
  background-color: #b2b2b2;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
