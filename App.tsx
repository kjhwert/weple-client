import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StartStack from './src/navigation/StartStack';
import {UserContextProvider} from './src/module/context/UserContext';

export default () => {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <StartStack />
      </UserContextProvider>
    </NavigationContainer>
  );
};
