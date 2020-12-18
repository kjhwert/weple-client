/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RNTrackPlayer from 'react-native-track-player';
import {trackPlayerService} from './src/module/music/trackPlayerService';

AppRegistry.registerComponent(appName, () => App);
RNTrackPlayer.registerPlaybackService(() => trackPlayerService);
