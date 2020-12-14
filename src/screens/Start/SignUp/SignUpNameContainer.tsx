import React, {useState, useEffect, useContext} from 'react';
import SignUpNamePresenter from './SignUpNamePresenter';
import UserContext from '../../../module/context/UserContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {createUser, setCreateUser}: any = useContext(UserContext);

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

  const setCreateUserName = () => {
    setCreateUser({
      ...createUser,
      name: userName.data,
    });
  };
  console.log('name: ', createUser);

  useEffect(() => {
    setIsActive(userName.data.length > 0);
  }, [userName]);

  return (
    <SignUpNamePresenter
      navigation={navigation}
      userNameChange={userNameChange}
      userName={userName}
      isActive={isActive}
      setCreateUserName={setCreateUserName}
    />
  );
};
