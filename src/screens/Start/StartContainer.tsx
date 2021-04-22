import React, {useContext, useEffect, useState} from 'react';
import StartPresenter from './StartPresenter';
import UserContext from '../../module/context/UserContext';
import Loading from '../../components/Loading';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {autoLogin}: any = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const autoStartLogin = async () => {
    setIsLoading(true);
    if (await autoLogin()) {
      navigation.navigate('bottomTab');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    autoStartLogin();
  }, []);

  return isLoading ? <Loading /> : <StartPresenter navigation={navigation} />;
};
