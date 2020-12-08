import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import AlertWrapper from '../../../components/AlertWrapper';

interface IProps {
  navigation: any;
}

export default ({navigation, showAlert, setShowAlert}: IProps) => {
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
        <PasswordWrapper>
          <PasswordTitle>이메일</PasswordTitle>
          <PasswordInput placeholder="이메일를 입력하세요." />
        </PasswordWrapper>
      </ContainerCard>
      <NextBtn
        onPress={() => {
          setShowAlert(true);
        }}>
        <NextText>확인</NextText>
      </NextBtn>
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

const PasswordWrapper = styled.View`
  flex: 9;
  display: flex;
  width: 100%;
`;

const PasswordTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const PasswordInput = styled.TextInput`
  padding: 5px 10px;
  border-bottom-width: 1px;
  border-color: #babfc7;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 15px;
  color: #6f6f6f;
`;

const NextBtn = styled.TouchableOpacity`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  align-items: center;
  background-color: #b2b2b2;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
