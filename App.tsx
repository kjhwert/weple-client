import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StartStack from './src/navigation/StartStack';
import {UserContextProvider} from './src/module/context/UserContext';
import {TogetherContextProvider} from './src/module/context/TogetherContext';
import {AlertContextProvider} from './src/module/context/AlertContext';
import {FollowContextProvider} from './src/module/context/FollowContext';
export default () => {
  return (
    <NavigationContainer>
      <AlertContextProvider>
        <UserContextProvider>
          <FollowContextProvider>
            <TogetherContextProvider>
              <StartStack />
            </TogetherContextProvider>
          </FollowContextProvider>
        </UserContextProvider>
      </AlertContextProvider>
    </NavigationContainer>
  );
};
