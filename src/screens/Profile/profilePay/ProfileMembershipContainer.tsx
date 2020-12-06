import React from 'react';
import ProfileMembershipPresenter from './ProfileMembershipPresenter';

const member = [
  {
    id: 0,
    period: '30일권',
    titel: '멤버십 결제 구독권',
    comment: '멤버십 결제 구독권 30일 쿠폰 설명입니다.',
    money: '9,900원',
    isClick: true,
  },
  {
    id: 1,
    period: '30일권',
    titel: '멤버십 결제 구독권',
    comment:
      '멤버십 결제 구독권 쿠폰 설명입니다. 멤버십 결제 구독권 쿠폰 설명입니다.',
    money: '10,900원',
    isClick: true,
  },
  {
    id: 2,
    period: '30일권',
    titel: '멤버십 결제 구독권',
    comment: '멤버십 결제 구독권 쿠폰 설명입니다.',
    money: '29,900원',
    isClick: false,
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return <ProfileMembershipPresenter navigation={navigation} member={member} />;
};
