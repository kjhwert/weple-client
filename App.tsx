import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StartStack from './src/navigation/StartStack';
import {UserContextProvider} from './src/module/context/UserContext';
import {TogetherContextProvider} from './src/module/context/TogetherContext';
import {AlertContextProvider} from './src/module/context/AlertContext';
import {FollowContextProvider} from './src/module/context/FollowContext';
import {FeedContextProvider} from './src/module/context/FeedContext';
import {ProfileContextProvider} from './src/module/context/ProfileContext';
import {RecordContextProvider2} from './src/module/context/RecordContext2';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {MAPBOX_TOKEN} from './src/module/common';

MapboxGL.setAccessToken(MAPBOX_TOKEN);

export default () => {
  return (
    <NavigationContainer>
      <AlertContextProvider>
        <UserContextProvider>
          <FollowContextProvider>
            <FeedContextProvider>
              <TogetherContextProvider>
                <ProfileContextProvider>
                  <RecordContextProvider2>
                    <StartStack />
                  </RecordContextProvider2>
                </ProfileContextProvider>
              </TogetherContextProvider>
            </FeedContextProvider>
          </FollowContextProvider>
        </UserContextProvider>
      </AlertContextProvider>
    </NavigationContainer>
  );
};
