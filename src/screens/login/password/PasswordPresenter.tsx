import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {InputBox} from '../../../components/CommonInput';
import {StartNextBtn} from '../../../components/CommonBtn';

interface IProps {
  navigation: any;
  userEmailChange: (text: string) => void;
  userEmailValidation: Function;
  userEmail: any;
  isActive: boolean;
  passwordInfoMail: Function;
}

export default ({navigation, userEmailChange, userEmailValidation, userEmail, isActive, passwordInfoMail}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <InputBoxWrapper>
          <InputBoxTitle>이메일</InputBoxTitle>
          <InputBoxData placeholder={'이메일을 입력하세요.'} onChangeText={userEmailChange} autoFocus={true} />
        </InputBoxWrapper>
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

const InputBoxWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const InputBoxTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const InputBoxData = styled.TextInput`
  padding: 5px 10px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${({borderColor}: {borderColor: string}) => (borderColor ? borderColor : '#acacac')};
  font-size: 15px;
  color: #6f6f6f;
`;
