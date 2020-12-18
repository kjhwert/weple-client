import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {InputPasswordBox} from '../../../components/CommonInput';
import {StartNextBtn} from '../../../components/SnsAccountBtn';
import AlertWrapper from '../../../components/AlertWrapper';

interface IProps {
  navigation: any;
  userPassword: any;
  userPasswordChange1: Function;
  userPasswordChange2: Function;
  userPasswordValidation: Function;
  createUserPassword: Function;
  isActive: boolean;
  alertFrame: Function;
  clearAlertFrame: Function;
}

export default ({
  navigation,
  userPassword,
  userPasswordChange1,
  userPasswordChange2,
  userPasswordValidation,
  isActive,
  createUserPassword,
  alertFrame,
  clearAlertFrame,
}: IProps) => {
  return (
    <Container>
      {alertFrame.showAlert && !alertFrame.usable && (
        <AlertWrapper>
          <AlertImageWrapper>
            <AlertImage
              source={require('../../../assets/alertWarn_icon.png')}
            />
          </AlertImageWrapper>
          <AlertTitleText>
            {'입력하신 비밀번호와 다릅니다.\n다시 입력해주세요.'}
          </AlertTitleText>
          <ConfirmButton
            onPress={() => {
              clearAlertFrame();
            }}>
            <ConfirmButtonText>확인</ConfirmButtonText>
          </ConfirmButton>
        </AlertWrapper>
      )}

      <ContainerCard>
        <InputPasswordBox
          title={'비밀번호'}
          placeholder1="비밀번호를 입력하세요."
          placeholder2="비밀번호를 한번 더 입력하세요."
          onChange1={userPasswordChange1}
          onChange2={userPasswordChange2}
          activeFlag1={userPassword.activeFlag1}
          activeFlag2={userPassword.activeFlag2}
          value1={userPassword.password1}
          value2={userPassword.password2}
        />
      </ContainerCard>

      <StartNextBtn
        StartNextPage={'signUpNickname'}
        text={'다음'}
        navigation={navigation}
        validation={userPasswordValidation}
        isActive={isActive}
        callBack={createUserPassword}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

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

const ConfirmButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px;
  background-color: #007bf1;
  position: absolute;
  bottom: 0;
`;

const ConfirmButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
