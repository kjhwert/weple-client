import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StartStack from './src/navigation/StartStack';
import {UserContextProvider} from './src/module/context/UserContext';
import {TogetherContextProvider} from './src/module/context/TogetherContext';
import {AlertContextProvider} from './src/module/context/AlertContext';
import {FollowContextProvider} from './src/module/context/FollowContext';
import {FeedContextProvider} from './src/module/context/FeedContext';
import {ProfileContextProvider} from './src/module/context/ProfileContext';
import {RecordContextProvider} from './src/module/context/RecordContext';
export default () => {
  return (
    <NavigationContainer>
      <AlertContextProvider>
        <UserContextProvider>
          <FollowContextProvider>
            <FeedContextProvider>
              <TogetherContextProvider>
                <ProfileContextProvider>
                  <RecordContextProvider>
                    <StartStack />
                  </RecordContextProvider>
                </ProfileContextProvider>
              </TogetherContextProvider>
            </FeedContextProvider>
          </FollowContextProvider>
        </UserContextProvider>
      </AlertContextProvider>
    </NavigationContainer>
  );
};
