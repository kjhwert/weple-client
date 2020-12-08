import React, {useState} from 'react';
import PasswordPresenter from './PasswordPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <PasswordPresenter
      navigation={navigation}
      showAlert={showAlert}
      setShowAlert={setShowAlert}
    />
  );
};
