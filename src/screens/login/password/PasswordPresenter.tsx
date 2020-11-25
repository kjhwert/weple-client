import React from 'react';
import styled from 'styled-components/native';
import Card from '../../../components/Card';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
      <Card>
        <PasswordWrapper>
          <PasswordTitle>이메일</PasswordTitle>
          <PasswordInput placeholder="이메일를 입력하세요." name="id" />
        </PasswordWrapper>

        <ConfirmBtnWrapper>
          <ConfirmButton onPress={() => {}}>
            <ConfirmText>확인</ConfirmText>
          </ConfirmButton>
        </ConfirmBtnWrapper>
      </Card>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
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

const ConfirmBtnWrapper = styled.View`
  flex: 1;
  display: flex;
  width: 100%;
`;

const ConfirmButton = styled.TouchableOpacity`
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #b2b2b2;
`;

const ConfirmText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
