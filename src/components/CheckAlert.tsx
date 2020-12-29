import React, {useContext} from 'react';
import styled from 'styled-components/native';
import AlertContext from '../module/context/AlertContext';

interface IProps {
  check: IAlertCheck;
  checked?: () => void;
}

export default ({check, checked}: IProps) => {
  const {setAlertInvisible}: any = useContext(AlertContext);

  const checkOnPressed = () => {
    checked && checked();
    setAlertInvisible();
  };

  const getImage = () => {
    switch (check.type) {
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
      <AlertTitleText>{check.title}</AlertTitleText>
      <AlertContentText>{check.description}</AlertContentText>
      <CheckButton onPress={checkOnPressed}>
        <CheckButtonText>확인</CheckButtonText>
      </CheckButton>
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

const CheckButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px;
  background-color: #007bf1;
  position: absolute;
  bottom: 0;
`;

const CheckButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
