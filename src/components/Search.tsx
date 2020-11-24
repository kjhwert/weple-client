import React from 'react';
import styled from 'styled-components/native';

export default ({navigation}) => {
  return (
    <Container
      onPress={() => {
        navigation.navigate('feedSearch');
      }}>
      <SearchImage source={require('../assets/search.png')} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  margin-left: 10px;
  padding: 5px;
`;

const SearchImage = styled.Image`
  width: 20px;
  height: 20px;
`;
