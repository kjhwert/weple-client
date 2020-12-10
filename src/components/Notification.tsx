import React from 'react';
import styled from 'styled-components/native';

export default ({navigation}) => {
  return (
    <Container
      onPress={() => {
        navigation.navigate('alarmInfo');
      }}>
      <AlarmImage source={require('../assets/header_alarm.png')} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  margin-right: 10px;
  padding: 5px;
`;

const AlarmImage = styled.Image`
  width: 23px;
  height: 23px;
`;
