import React from 'react';
import MemberPresenter from './TogetherMemberPresenter';

const member = [
  {
    id: 0,
    image: require('../../../assets/profile_1.png'),
    name: 'GilDong',
    bestOneImage: require('../../../assets/active_cycle.png'),
    bestOneText: '69.5',
    bestTwoImage: require('../../../assets/active_hiking.png'),
    bestTwoText: '1819.5',
    bestThreeImage: require('../../../assets/active_skate.png'),
    bestThreeText: '18319.5',
  },
  {
    id: 1,
    image: require('../../../assets/profile_2.png'),
    name: 'Benjamin',
    bestOneImage: require('../../../assets/active_fishing.png'),
    bestOneText: '69.5',
    bestTwoImage: require('../../../assets/active_cycle.png'),
    bestTwoText: '1819.5',
    bestThreeImage: require('../../../assets/active_hiking.png'),
    bestThreeText: '18319.5',
  },
  {
    id: 2,
    image: require('../../../assets/follower_2.png'),
    name: 'Jamin',
    bestOneImage: require('../../../assets/active_hiking.png'),
    bestOneText: '69.5',
    bestTwoImage: require('../../../assets/active_cycle.png'),
    bestTwoText: '1819.5',
    bestThreeImage: require('../../../assets/active_skate.png'),
    bestThreeText: '18319.5',
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <MemberPresenter navigation={navigation} member={member} />;
};
