import React from 'react';
import styled from 'styled-components/native';

export default ({navigation}) => {
  return (
    <Container
      onPress={() => {
        navigation.navigate('profileSetting');
      }}>
      <SetImage source={require('../assets/header_setting.png')} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  margin-right: 10px;
  padding: 5px;
`;

const SetImage = styled.Image`
  width: 22px;
  height: 22px;
`;
