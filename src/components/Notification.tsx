import React from 'react';
import styled from 'styled-components/native';

export default ({navigation, route}) => {
  return (
    <Container
      onPress={() => {
        const {name} = route;
        if (name === 'feedMain') {
          return navigation.navigate('feedAlarmInfo');
        }

        if (name === 'togetherMain') {
          return navigation.navigate('togetherAlarmInfo');
        }
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
