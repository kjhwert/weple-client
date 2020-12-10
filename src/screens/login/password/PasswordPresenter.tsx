import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import AlertWrapper from '../../../components/AlertWrapper';
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
  showAlert,
}: IProps) => {
  return (
    <Container>
      {showAlert && (
        <AlertWrapper>
          <AlertImageWrapper>
            <AlertImage
              source={require('../../../assets/alertEmail_icon.png')}
            />
          </AlertImageWrapper>
          <AlertTitleText>
            {'입력하신 이메일로 임시비밀번호를\n보내드렸습니다.'}
          </AlertTitleText>
          <ConfirmButton
            onPress={() => {
              navigation.navigate('login');
            }}>
            <ConfirmButtonText>확인</ConfirmButtonText>
          </ConfirmButton>
        </AlertWrapper>
      )}
      <ContainerCard>
        <InputBox
          title={'이메일'}
          placeholder="이메일을 입력하세요."
          onChange={userEmailChange}
          activeFlag={userEmail.activeFlag}
        />

        {/* <PasswordWrapper>
          <PasswordTitle>이메일</PasswordTitle>
          <PasswordInput placeholder="이메일를 입력하세요." />
        </PasswordWrapper> */}
      </ContainerCard>

      {/* <NextBtn
        onPress={() => {
          setShowAlert(true);
        }}>
        <NextText>확인</NextText>
      </NextBtn> */}

      <StartNextBtn
        StartNextPage={'login'}
        text={'확인'}
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
