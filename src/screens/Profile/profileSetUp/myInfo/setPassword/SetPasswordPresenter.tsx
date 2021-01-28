import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../../../components/ContainerCard';
import {PwChangeInput2, PwChangeInput} from '../../../../../components/CommonInput';
import {StartNextBtn} from '../../../../../components/CommonBtn';

interface IProps {
  navigation: any;
  userPassword: any;
  isActive: boolean;
  oldPasswordChange: Function;
  newPasswordChange1: Function;
  newPasswordChange2: Function;
  passwordChange: Function;
}

export default ({
  navigation,
  userPassword,
  isActive,
  oldPasswordChange,
  newPasswordChange1,
  newPasswordChange2,
  passwordChange,
}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <SignUpWrapper>
          <PwChangeInput2
            title={'기존 비밀번호'}
            placeholder="기존 비밀번호를 입력하세요."
            onChange={oldPasswordChange}
            activeFlag={userPassword.activeFlag1}
            value={userPassword.oldPassword}
          />
          <PwChangeInput
            title={'새 비밀번호'}
            placeholder="6자리 이상 입력해주세요."
            onChange={newPasswordChange1}
            activeFlag={userPassword.activeFlag2}
            value={userPassword.newPassword1}
          />
          <PwChangeInput
            title={'새 비밀번호 확인'}
            placeholder="6자리 이상 입력해주세요."
            onChange={newPasswordChange2}
            activeFlag={userPassword.activeFlag3}
            value={userPassword.newPassword2}
          />
        </SignUpWrapper>
      </ContainerCard>
      <StartNextBtn text={'변경하기'} navigation={navigation} isActive={isActive} callBack={passwordChange} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const SignUpWrapper = styled.View`
  display: flex;
  width: 100%;
`;
