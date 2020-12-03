import React from 'react';
import RecordMapStylePresenter from './RecordMapStylePresenter';

const FreeMap = [
  {
    id: 0,
    image: require('../../../assets/mapStyle_3.png'),
  },
  {
    id: 1,
    image: require('../../../assets/mapStyle_3.png'),
  },
  {
    id: 2,
    image: require('../../../assets/mapStyle_3.png'),
  },
];

const MembershipMap = [
  {
    id: 0,
    image: require('../../../assets/mapStyle_1.png'),
  },
  {
    id: 1,
    image: require('../../../assets/mapStyle_2.png'),
  },
  {
    id: 2,
    image: require('../../../assets/mapStyle_4.png'),
  },
  {
    id: 3,
    image: require('../../../assets/mapStyle_5.png'),
  },
  {
    id: 4,
    image: require('../../../assets/mapStyle_1.png'),
  },
  {
    id: 5,
    image: require('../../../assets/mapStyle_2.png'),
  },
  {
    id: 6,
    image: require('../../../assets/mapStyle_4.png'),
  },
  {
    id: 7,
    image: require('../../../assets/mapStyle_5.png'),
  },
  {
    id: 8,
    image: require('../../../assets/mapStyle_1.png'),
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <RecordMapStylePresenter
      navigation={navigation}
      FreeMap={FreeMap}
      MembershipMap={MembershipMap}
    />
  );
};
