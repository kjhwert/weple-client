import React, {useContext, useEffect, useState} from 'react';
import StartPresenter from './StartPresenter';
import UserContext from '../../module/context/UserContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {autoLogin}: any = useContext(UserContext);
  const [isAutoLogin, setIsAutoLogin] = useState(true);

  const autoStartLogin = async () => {
    if (await autoLogin()) {
      setIsAutoLogin(true);
      navigation.navigate('bottomTab');
    } else {
      setIsAutoLogin(false);
    }
  };

  useEffect(() => {
    autoStartLogin();
  }, []);

  return <StartPresenter navigation={navigation} isAutoLogin={isAutoLogin} />;
};
