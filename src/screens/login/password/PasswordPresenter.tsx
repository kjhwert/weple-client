import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {InputBox} from '../../../components/CommonInput';
import {StartNextBtn} from '../../../components/CommonBtn';

interface IProps {
  navigation: any;
  userEmailChange: Function;
  userEmailValidation: Function;
  userEmail: any;
  isActive: boolean;
  passwordInfoMail: Function;
}

export default ({navigation, userEmailChange, userEmailValidation, userEmail, isActive, passwordInfoMail}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <InputBox
          title={'이메일'}
          placeholder="이메일을 입력하세요."
          onChange={userEmailChange}
          activeFlag={userEmail.activeFlag}
          value={userEmail.data}
        />
      </ContainerCard>

      <StartNextBtn
        text={'확인'}
        navigation={navigation}
        validation={userEmailValidation}
        isActive={isActive}
        callBack={() => {
          passwordInfoMail();
        }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;
