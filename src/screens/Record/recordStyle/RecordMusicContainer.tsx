import React from 'react';
import RecordMusicPresenter from './RecordMusicPresenter';

const FreeMusic = [
  {
    id: 0,
    image: require('../../../assets/music_1.png'),
    title: '재생 가능한 음악이 없습니다.',
    name: 'Maroon 5',
    isClick: true,
  },
];

const MumbershipMusic = [
  {
    id: 0,
    image: require('../../../assets/music_1.png'),
    title: 'Memories',
    name: 'Maroon 5',
    isClick: true,
  },
  {
    id: 1,
    image: require('../../../assets/music_2.png'),
    title: 'Memories',
    name: 'Maroon 5',
    isClick: true,
  },
  {
    id: 2,
    image: require('../../../assets/music_3.png'),
    title: 'Memories',
    name: 'Maroon 5',
    isClick: true,
  },
  {
    id: 3,
    image: require('../../../assets/music_1.png'),
    title: 'Memories',
    name: 'Maroon 5',
    isClick: false,
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <RecordMusicPresenter
      navigation={navigation}
      FreeMusic={FreeMusic}
      MumbershipMusic={MumbershipMusic}
    />
  );
};
