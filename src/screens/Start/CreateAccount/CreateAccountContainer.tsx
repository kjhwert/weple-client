import React, {useState, useEffect} from 'react';
import CreateAccountPresenter from './CreateAccountPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [isActive, setIsActive] = useState(false);
  const [snsType, setSnsType] = useState('');

  const snsTypeClick = (snsType) => {
    setSnsType(snsType);
  };

  useEffect(() => {
    setIsActive(snsType.length > 0);
  });

  return (
    <CreateAccountPresenter
      navigation={navigation}
      snsType={snsType}
      snsTypeClick={snsTypeClick}
      isActive={isActive}
    />
  );
};
