import React from 'react';
import CommentMemberPresenter from './CommentMemberPresenter';

const member = [
  {
    id: 0,
    image: require('../../../assets/profile_2.png'),
    name: 'Jamin',
    comment: 'bicycles very nice..!!',
    isClick: true,
  },
  {
    id: 1,
    image: require('../../../assets/profile_1.png'),
    name: 'GilDong',
    comment: 'Thank you so much!',
    isClick: true,
  },
  {
    id: 2,
    image: require('../../../assets/profile_2.png'),
    name: 'Benjamin',
    comment: 'bicycles very nice..!!',
    isClick: true,
  },
  {
    id: 3,
    image: require('../../../assets/follower_2.png'),
    name: 'Jamin',
    comment:
      'bicycles very nice..!! bicycles very nice..!! bicycles very nice..!!',
    isClick: false,
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <CommentMemberPresenter navigation={navigation} member={member} />;
};
