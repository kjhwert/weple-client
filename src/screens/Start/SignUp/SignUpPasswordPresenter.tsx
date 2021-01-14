import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {InputPasswordBox} from '../../../components/CommonInput';
import {StartNextBtn} from '../../../components/CommonBtn';

interface IProps {
  navigation: any;
  userPassword: any;
  userPasswordChange1: Function;
  userPasswordChange2: Function;
  userPasswordValidation: Function;
  createUserPassword: Function;
  isActive: boolean;
}

export default ({
  navigation,
  userPassword,
  userPasswordChange1,
  userPasswordChange2,
  userPasswordValidation,
  isActive,
  createUserPassword,
}: IProps) => {
  return (
    <Container>
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
