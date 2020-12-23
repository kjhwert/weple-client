import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {InputBox} from '../../../components/CommonInput';
import {StartNextBtn} from '../../../components/SnsAccountBtn';

interface IProps {
  navigation: any;
  clearAlertFrame: Function;
  userNameChange: Function;
  createUserName: Function;
}

export default ({
  navigation,
  userNameChange,
  userName,
  isActive,
  createUserName,
}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <InputBox
          title={'이름'}
          placeholder="이름을 입력하세요."
          onChange={userNameChange}
          activeFlag={userName.activeFlag}
          value={userName.data}
        />
      </ContainerCard>
      <StartNextBtn
        StartNextPage={'startCategory'}
        text={'다음'}
        navigation={navigation}
        isActive={isActive}
        callBack={createUserName}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;
