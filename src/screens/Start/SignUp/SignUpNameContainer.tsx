import React, {useState, useEffect} from 'react';
import SignUpNamePresenter from './SignUpNamePresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [isActive, setIsActive] = useState(false);
  const [userName, setUserName] = useState({
    data: '',
    activeFlag: 0,
  });

  const userNameChange = (e) => {
    const value = e.nativeEvent.text;
    setUserName({
      ...userName,
      data: value,
      activeFlag: value.length,
    });
  };

  useEffect(() => {
    setIsActive(userName.data.length > 0);
  });

  return (
    <SignUpNamePresenter
      navigation={navigation}
      userNameChange={userNameChange}
      userName={userName}
      isActive={isActive}
    />
  );
};
