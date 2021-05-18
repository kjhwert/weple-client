import React, {useEffect, useState} from 'react';
import RecordMusicPresenter from './RecordMusicPresenter';
import {utilitiesApi} from '../../../module/api';
import Loading from '../../../components/Loading';
import RNTrackPlayer from 'react-native-track-player';
import {IMusicGroup, IMusics} from '../../../module/type/music';
import {BASE_URL, MUSIC_PATH} from '../../../module/common';

export default () => {
  const [musicGroup, setMusicGroup] = useState<Array<IMusicGroup>>([]);
  const [playedMusic, setPlayedMusic] = useState(0);
  const [loading, setLoading] = useState(true);

  const musicTrackSetUp = async () => {
    await RNTrackPlayer.setupPlayer().then(() => {
      console.log('player is setup');
    });
  };

  const getMusicGroup = async () => {
    const {data, statusCode, message} = await utilitiesApi.musics();
    if (statusCode !== 200) {
      console.log(statusCode, message);
      return;
    }
    setMusicGroup(data);
    setLoading(false);
  };

  const musicPlay = async (track: IMusics) => {
    const music = {
      ...track,
      id: track.id.toString(),
      url: `${BASE_URL}/${track.url}`,
    };
    setPlayedMusic(track.id);
    await RNTrackPlayer.add(music);
    await RNTrackPlayer.play();
  };

  const musicPause = async () => {
    setPlayedMusic(0);
    await RNTrackPlayer.pause();
    await RNTrackPlayer.destroy();
  };

  useEffect(() => {
    getMusicGroup();
    musicTrackSetUp();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <RecordMusicPresenter
      musicGroup={musicGroup}
      musicPlay={musicPlay}
      musicPause={musicPause}
      playedMusic={playedMusic}
    />
  );
};
