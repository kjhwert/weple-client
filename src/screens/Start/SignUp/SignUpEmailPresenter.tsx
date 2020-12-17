import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import { NickNameInputBox } from '../../../components/CommonInput';
import { StartNextBtn } from '../../../components/SnsAccountBtn';
import AlertWrapper from '../../../components/AlertWrapper';

interface IProps {
  navigation: any;
  userEmailChange: Function;
  userEmailValidation: Function;
  userEmail: any;
  isActive: boolean;
  createUserEmail: Function;
  clearAlertFrame: Function;
  hasEmail: Function;
}

export default ({
  navigation,
  userEmailChange,
  userEmailValidation,
  userEmail,
  isActive,
  createUserEmail,
  alertFrame,
  clearAlertFrame,
  hasEmail,
}: IProps) => {
  return (
    <Container>
      {alertFrame.showAlert && alertFrame.usable && (
        <AlertWrapper>
          <AlertImageWrapper>
            <AlertImage
              source={require('../../../assets/alertCheck_icon.png')}
            />
          </AlertImageWrapper>
          <AlertTitleText>{'사용할 수 있는 이메일입니다.'}</AlertTitleText>
          <AlertContentText>{'계속 진행하세요.'}</AlertContentText>
          <ConfirmButton
            onPress={() => {
              clearAlertFrame();
            }}>
            <ConfirmButtonText>확인</ConfirmButtonText>
          </ConfirmButton>
        </AlertWrapper>
      )}
      {alertFrame.showAlert && !alertFrame.usable && (
        <AlertWrapper>
          <AlertImageWrapper>
            <AlertImage
              source={require('../../../assets/alertWarn_icon.png')}
            />
          </AlertImageWrapper>
          <AlertTitleText>{'사용할 수 없는 이메일입니다.'}</AlertTitleText>
          <AlertContentText>{'다른 이메일을 사용하세요.'}</AlertContentText>
          <ConfirmButton
            onPress={() => {
              clearAlertFrame();
            }}>
            <ConfirmButtonText>확인</ConfirmButtonText>
          </ConfirmButton>
        </AlertWrapper>
      )}

      <ContainerCard>
        <SignUpWrapper>
          <NickNameInputBox
            title={'이메일'}
            placeholder="이메일을 입력하세요."
            onChange={userEmailChange}
            activeFlag={userEmail.activeFlag}
          />
          <DuplicateBtn
            onPress={() => {
              hasEmail();
            }}>
            <DuplicateText>중복확인</DuplicateText>
          </DuplicateBtn>
        </SignUpWrapper>
      </ContainerCard>
      <StartNextBtn
        StartNextPage={'signUpPassword'}
        text={'다음'}
        navigation={navigation}
        validation={userEmailValidation}
        isActive={isActive}
        callBack={createUserEmail}
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

const AlertContentText = styled.Text`
  font-size: 12px;
  color: #878787;
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

const SignUpWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
`;

const DuplicateBtn = styled.TouchableOpacity`
  width: 22%;
  align-items: center;
  border-radius: 5px;
  margin-left: 3%;
  padding: 10px 3px;
  background-color: #fff;
  border-width: 1px;
  border-color: #acacac;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const DuplicateText = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
`;
