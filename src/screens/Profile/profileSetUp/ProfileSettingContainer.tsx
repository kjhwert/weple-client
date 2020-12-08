import React, {useState} from 'react';
import ProfileSettingPresenter from './ProfileSettingPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [dropOutAlert, setDropOutAlert] = useState(false);
  const [logOutAlert, setLogOutAlert] = useState(false);

  return (
    <ProfileSettingPresenter
      navigation={navigation}
      dropOutAlert={dropOutAlert}
      setDropOutAlert={setDropOutAlert}
      logOutAlert={logOutAlert}
      setLogOutAlert={setLogOutAlert}
    />
  );
};
