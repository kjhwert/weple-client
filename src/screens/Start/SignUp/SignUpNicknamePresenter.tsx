import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import NextBtn from '../../../components/NextBtn';
import AlertWrapper from '../../../components/AlertWrapper';

interface IProps {
  navigation: any;
}

export default ({
  navigation,
  usableAlert,
  unusableAlert,
  onChangeNickName,
  hasNickName,
}: IProps) => {
  return (
    <Container>
      {usableAlert && (
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
              navigation.navigate('signUpPassword');
            }}>
            <ConfirmButtonText>확인</ConfirmButtonText>
          </ConfirmButton>
        </AlertWrapper>
      )}
      {unusableAlert && (
        <AlertWrapper>
          <AlertImageWrapper>
            <AlertImage
              source={require('../../../assets/alertDelete_icon.png')}
            />
          </AlertImageWrapper>
          <AlertTitleText>{'사용하실 수 없는 닉네임입니다.'}</AlertTitleText>
          <AlertContentText>{'다른 닉네임을 사용하세요.'}</AlertContentText>
          <ConfirmButton
            onPress={() => {
              navigation.navigate('signUpPassword');
            }}>
            <ConfirmButtonText>확인</ConfirmButtonText>
          </ConfirmButton>
        </AlertWrapper>
      )}

      <ContainerCard>
        <SignUpWrapper>
          <SignUpTitle>닉네임</SignUpTitle>
          <NickNameWrapper>
            <NickNameInput
              placeholder="닉네임을 입력하세요."
              onChange={onChangeNickName}
            />
            <DuplicateBtn
              onPress={() => {
                hasNickName();
              }}>
              <DuplicateText>중복확인</DuplicateText>
            </DuplicateBtn>
          </NickNameWrapper>
        </SignUpWrapper>
      </ContainerCard>
      <NextBtn nextPage={'signUpName'} navigation={navigation}>
        {`다음`}
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
`;

const SignUpTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const DuplicateBtn = styled.TouchableOpacity`
  width: 25%;
  align-items: center;
  border-radius: 5px;
  margin-left: 3%;
  padding: 10px 5px;
  background-color: #fff;
  border-width: 1px;
  border-color: #acacac;
`;

const DuplicateText = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
`;

const NickNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const NickNameInput = styled.TextInput`
  width: 70%;
  padding: 5px 10px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #acacac;
  font-size: 14px;
  color: #6f6f6f;
`;
