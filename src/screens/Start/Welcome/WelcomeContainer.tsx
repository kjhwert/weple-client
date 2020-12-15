import React, {useContext} from 'react';
import WelcomePresenter from './WelcomePresenter';
import {userApi} from '../../../module/api';
import UserContext from '../../../module/context/UserContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {createUser, setCreateUser}: any = useContext(UserContext);

  const joinMembership = async () => {
    const joinData = await userApi.join(createUser);
    console.log('createUser:', createUser);
  };

  return (
    <WelcomePresenter navigation={navigation} joinMembership={joinMembership} />
  );
};
