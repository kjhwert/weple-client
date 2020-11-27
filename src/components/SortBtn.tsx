import React from 'react';
import styled from 'styled-components/native';

export default ({navigation}) => {
  return (
    <Container
      onPress={() => {
        navigation.navigate('');
      }}>
      <SortImage source={require('../assets/sort_icon.png')} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  margin-right: 10px;
  padding: 5px;
`;

const SortImage = styled.Image`
  width: 24px;
  height: 20px;
`;
