import React, {useContext, useEffect} from 'react';
import StartPresenter from './StartPresenter';
import UserContext from '../../module/context/UserContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {autoLogin}: any = useContext(UserContext);

  const autoStartLogin = async () => {
    if (await autoLogin()) {
      navigation.navigate('bottomTab');
    }
  };

  useEffect(() => {
    autoStartLogin();
  }, []);

  return <StartPresenter navigation={navigation} />;
};
