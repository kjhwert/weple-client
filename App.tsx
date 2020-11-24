import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StartStack from './src/navigation/StartStack';

export default () => {
  return (
    <NavigationContainer>
      <StartStack/>
    </NavigationContainer>
  );
};
