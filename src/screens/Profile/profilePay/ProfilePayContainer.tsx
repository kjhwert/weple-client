import React from 'react';
import ProfilePayPresenter from './ProfilePayPresenter';

const paymentData = [
  {
    id: 0,
    title: '멤버십 결제내역 이름',
    date: '2019-02-01 10:10:30',
    money: '9,900',
  },
  {
    id: 1,
    title: '멤버십 결제내역 이름',
    date: '2019-02-01 10:10:30',
    money: '12,000',
  },
  {
    id: 2,
    title: '멤버십 결제내역 이름',
    date: '2019-02-01 10:10:30',
    money: '5,500',
  },
];

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <ProfilePayPresenter navigation={navigation} paymentData={paymentData} />
  );
};
