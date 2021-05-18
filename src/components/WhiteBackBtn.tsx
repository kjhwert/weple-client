import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
  route?: any;
}

export default ({navigation, route}: IProps) => {
  const onPressed = () => {
    navigation.goBack();
  };

  return (
    <Container onPress={onPressed}>
      <ArrowImage source={require('../assets/arrow_white_icon.png')} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  margin-left: 10px;
  padding: 5px;
`;

const ArrowImage = styled.Image`
  width: 20px;
  height: 20px;
`;
