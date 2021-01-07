import React, {useState, useContext} from 'react';
import ProfileSettingPresenter from './ProfileSettingPresenter';
import AlertContext from '../../../module/context/AlertContext';
import ConfirmAlert from '../../../components/ConfirmAlert';
import {userApi} from '../../../module/api';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {userLogout, setAlertVisible}: any = useContext(AlertContext);

  const clearAlert = () => {
    setAlertVisible();
  };

  const [logOutAlert, setLogOutAlert] = useState(false);

  const logOutAlertFrame = (showFlag) => {
    setLogOutAlert(showFlag);
  };

  const dropOutAlert = async () => {
    const {message, statusCode} = await userApi.dropOut();
    console.log('dropOut message:', message);
    console.log('dropOut statusCode:', statusCode);

    if (statusCode !== 201) {
      return setAlertVisible(
        <ConfirmAlert
          confirm={{
            type: 'warning',
            title: '계정을 삭제하시겠습니까?',
            description: '삭제된 데이터는 되돌릴 수 없습니다.',
            confirmedText: '삭제',
            canceledText: '취소',
          }}
          canceled={() => {
            clearAlert();
          }}
          confirmed={() => {
            // clearAlert();
            // userLogout();
            // navigation.navigate('login');
          }}
        />,
      );
    }
  };

  return (
    <ProfileSettingPresenter
      navigation={navigation}
      logOutAlert={logOutAlert}
      logOutAlertFrame={logOutAlertFrame}
      dropOutAlert={dropOutAlert}
    />
  );
};
