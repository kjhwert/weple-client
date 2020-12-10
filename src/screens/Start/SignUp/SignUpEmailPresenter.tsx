import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {InputBox} from '../../../components/CommonInput';
import {StartNextBtn} from '../../../components/SnsAccountBtn';

interface IProps {
  navigation: any;
  userEmailChange: Function;
  userEmailValidation: Function;
}

export default ({
  navigation,
  userEmailChange,
  userEmailValidation,
  userEmail,
  isActive,
}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <InputBox
          title={'이메일'}
          placeholder="이메일을 입력하세요."
          onChange={userEmailChange}
          activeFlag={userEmail.activeFlag}
        />
      </ContainerCard>
      <StartNextBtn
        StartNextPage={'signUpPassword'}
        text={'다음'}
        navigation={navigation}
        validation={userEmailValidation}
        isActive={isActive}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;
