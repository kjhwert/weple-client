import React, {useContext} from 'react';
import WelcomePresenter from './WelcomePresenter';
import UserContext from '../../../module/context/UserContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {join}: any = useContext(UserContext);

  const joinMembership = async () => {
    return await join();
  };

  return (
    <WelcomePresenter navigation={navigation} joinMembership={joinMembership} />
  );
};
