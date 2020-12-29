import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import AlertWrapper from '../../../components/AlertWrapper';
import {DuplicateInputBox} from '../../../components/CommonInput';
import {StartNextBtn} from '../../../components/CommonBtn';

interface IProps {
  navigation: any;
  isActive: boolean;
  alertFrame: any;
  clearAlertFrame: Function;
  userNick: any;
  userNickChange: Function;
  onChangeNickName: Function;
  hasNickName: Function;
  createUserNickName: Function;
}

export default ({
  navigation,
  userNickChange,
  userNick,
  isActive,
  alertFrame,
  clearAlertFrame,
  hasNickName,
  createUserNickName,
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
          <AlertTitleText>{'사용할 수 있는 닉네임입니다.'}</AlertTitleText>
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
          <AlertTitleText>{'사용하실 수 없는 닉네임입니다.'}</AlertTitleText>
          <AlertContentText>{'다른 닉네임을 사용하세요.'}</AlertContentText>
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
          <DuplicateInputBox
            title={'닉네임'}
            placeholder="닉네임을 입력하세요."
            onChange={userNickChange}
            activeFlag={userNick.activeFlag}
            value={userNick.data}
          />
          <DuplicateBtn
            onPress={() => {
              hasNickName();
            }}>
            <DuplicateText>중복확인</DuplicateText>
          </DuplicateBtn>
        </SignUpWrapper>
      </ContainerCard>
      <StartNextBtn
        StartNextPage={'signUpName'}
        text={'다음'}
        navigation={navigation}
        isActive={isActive}
        callBack={createUserNickName}
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
