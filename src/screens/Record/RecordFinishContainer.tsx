import React from 'react';
import RecordFinishPresenter from './RecordFinishPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const getAverageSpeed = (speed: Array<number>) => {
    if (speed.length === 0) {
      return 0;
    }
    const sumSpeed = speed.reduce((prev, next) => prev + next, 0);
    return Math.floor((sumSpeed / speed.length) * 10) / 10;
  };

  return <RecordFinishPresenter navigation={navigation} getAverageSpeed={getAverageSpeed} />;
};
