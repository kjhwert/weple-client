import RNTrackPlayer from 'react-native-track-player';

export const trackPlayerService = async () => {
  RNTrackPlayer.addEventListener('remote-play', () => RNTrackPlayer.play());
  RNTrackPlayer.addEventListener('remote-pause', () => RNTrackPlayer.pause());
  RNTrackPlayer.addEventListener('remote-stop', () => RNTrackPlayer.destroy());
  RNTrackPlayer.addEventListener('playback-track-changed', () => {});
  RNTrackPlayer.addEventListener('playback-state', (state) => {});
};
