import React, {useState, useContext} from 'react';
import ProfileSettingPresenter from './ProfileSettingPresenter';
import AlertContext from '../../../module/context/AlertContext';
import UserContext from '../../../module/context/UserContext';
import ConfirmAlert from '../../../components/ConfirmAlert';
import CheckAlert from '../../../components/CheckAlert';
import {userApi} from '../../../module/api';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);
  const {userLogout}: any = useContext(UserContext);
  const clearAlert = () => {
    setAlertVisible();
  };

  const [logOutAlert, setLogOutAlert] = useState(false);

  const logOutAlertFrame = (showFlag) => {
    setLogOutAlert(showFlag);
  };

  const dropOutOkAlert = async () => {
    return setAlertVisible(
      <CheckAlert
        check={{
          type: 'check',
          title: '회원탈퇴가 완료되었습니다.',
          description: '',
        }}
        checked={() => {
          clearAlert();
          navigation.navigate('login');
        }}
      />,
    );
  };

  const dropOutFailAlert = async () => {
    return setAlertVisible(
      <CheckAlert
        check={{
          type: 'warning',
          title: '회원탈퇴가 실패되었습니다.',
          description: '다시 시도해주세요.',
        }}
        checked={() => {
          clearAlert();
        }}
      />,
    );
  };

  const dropOutAlert = async () => {
    return setAlertVisible(
      <ConfirmAlert
        confirm={{
          type: 'delete',
          title: '계정을 삭제하시겠습니까?',
          description: '삭제된 데이터는 되돌릴 수 없습니다.',
          confirmedText: '삭제',
          canceledText: '취소',
        }}
        canceled={() => {
          clearAlert();
        }}
        confirmed={async () => {
          const {statusCode} = await userApi.dropOut();
          if (statusCode !== 201) {
            dropOutFailAlert();
          } else {
            await userLogout();
            dropOutOkAlert();
          }
        }}
      />,
    );
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
