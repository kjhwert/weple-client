import React, {useContext} from 'react';
import styled from 'styled-components/native';
import AlertContext from '../module/context/AlertContext';

interface IProps {
  confirm: IAlertConfirm;
  confirmed: () => void;
  canceled: () => void;
}

export default ({confirm, confirmed, canceled}: IProps) => {
  const {setAlertInvisible}: any = useContext(AlertContext);

  const confirmOnPressed = () => {
    confirmed();
    setAlertInvisible();
  };

  const cancelOnPressed = () => {
    canceled();
    setAlertInvisible();
  };

  const getImage = () => {
    switch (confirm.type) {
      case 'check':
        return require('../assets/alertCheck_icon.png');
      case 'warning':
        return require('../assets/alertWarn_icon.png');
      case 'email':
        return require('../assets/alertEmail_icon.png');
      case 'delete':
        return require('../assets/alertDelete_icon.png');
    }
  };

  return (
    <>
      <AlertImageWrapper>
        <AlertImage source={getImage()} />
      </AlertImageWrapper>
      <AlertTitleText>{confirm.title}</AlertTitleText>
      <AlertContentText>{confirm.description}</AlertContentText>
      <AlertBtnWrapper>
        <ConfirmButton onPress={confirmOnPressed}>
          <ConfirmButtonText>{confirm.confirmedText}</ConfirmButtonText>
        </ConfirmButton>
        <CancelButton onPress={cancelOnPressed}>
          <CancelButtonText>{confirm.canceledText}</CancelButtonText>
        </CancelButton>
      </AlertBtnWrapper>
    </>
  );
};

const AlertImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

const AlertImage = styled.Image`
  width: 70px;
  height: 70px;
`;

const AlertTitleText = styled.Text`
  font-size: 14px;
  color: #181818;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
`;

const AlertContentText = styled.Text`
  font-size: 12px;
  color: #878787;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
`;

const AlertBtnWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`;

const ConfirmButton = styled.TouchableOpacity`
  display: flex;
  width: 50%;
  padding: 10px;
  background-color: #007bf1;
`;

const ConfirmButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const CancelButton = styled.TouchableOpacity`
  display: flex;
  width: 50%;
  padding: 10px;
  background-color: #efefef;
`;

const CancelButtonText = styled.Text`
  font-size: 14px;
  color: #4e4e4e;
  font-weight: bold;
  text-align: center;
`;
