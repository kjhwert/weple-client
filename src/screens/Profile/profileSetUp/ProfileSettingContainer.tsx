import React, {useState} from 'react';
import ProfileSettingPresenter from './ProfileSettingPresenter';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [dropOutAlert, setDropOutAlert] = useState(false);
  const [logOutAlert, setLogOutAlert] = useState(false);

  const dropOutAlertFrame = (showFlag) => {
    setDropOutAlert(showFlag);
  };

  const logOutAlertFrame = (showFlag) => {
    setLogOutAlert(showFlag);
  };

  return (
    <ProfileSettingPresenter
      navigation={navigation}
      dropOutAlert={dropOutAlert}
      logOutAlert={logOutAlert}
      dropOutAlertFrame={dropOutAlertFrame}
      logOutAlertFrame={logOutAlertFrame}
    />
  );
};
