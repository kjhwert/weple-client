import React from 'react';
import MemberPresenter from './TogetherMemberPresenter';

const member = [
  {
    id: 0,
    image: require('../../../assets/profile_1.png'),
    name: 'GilDong',
    bestImage: require('../../../assets/active_cycle.png'),
    bestText: '69.5',
  },
  {
    id: 1,
    image: require('../../../assets/profile_2.png'),
    name: 'Benjamin',
    bestImage: require('../../../assets/active_cycle.png'),
    bestText: '69.5',
  },
  {
    id: 2,
    image: require('../../../assets/follower_2.png'),
    name: 'Jamin',
    bestImage: require('../../../assets/active_cycle.png'),
    bestText: '69.5',
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <MemberPresenter navigation={navigation} member={member} />;
};
