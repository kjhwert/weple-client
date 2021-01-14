import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StartStack from './src/navigation/StartStack';
import {UserContextProvider} from './src/module/context/UserContext';
import {AlertContextProvider} from './src/module/context/AlertContext';
export default () => {
  return (
    <NavigationContainer>
      <AlertContextProvider>
        <UserContextProvider>
          <StartStack />
        </UserContextProvider>
      </AlertContextProvider>
    </NavigationContainer>
  );
};
