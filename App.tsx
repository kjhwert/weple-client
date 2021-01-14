import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StartStack from './src/navigation/StartStack';
import {UserContextProvider} from './src/module/context/UserContext';
import {TogetherContextProvider} from './src/module/context/TogetherContext';
import {AlertContextProvider} from './src/module/context/AlertContext';

export default () => {
  return (
    <NavigationContainer>
      <AlertContextProvider>
        <UserContextProvider>
          <TogetherContextProvider>
            <StartStack />
          </TogetherContextProvider>
        </UserContextProvider>
      </AlertContextProvider>
    </NavigationContainer>
  );
};
