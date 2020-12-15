import React, {useState, useEffect} from 'react';
import StartAlarmSetPresenter from './StartAlarmSetPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [isActive, setIsActive] = useState(false);
  const [alarmType, setAlarmType] = useState('');

  const alarmTypeClick = (alarmType) => {
    setAlarmType(alarmType);
  };

  useEffect(() => {
    setIsActive(alarmType.length > 0);
  });

  return (
    <StartAlarmSetPresenter
      navigation={navigation}
      alarmType={alarmType}
      isActive={isActive}
      alarmTypeClick={alarmTypeClick}
    />
  );
};
