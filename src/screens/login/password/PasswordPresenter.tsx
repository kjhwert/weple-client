import React from 'react';
import styled from 'styled-components/native';
import Card from '../../../components/Card';

export default ({navigation}) => {
  return (
    <Container>
      <Card>
        <PasswordWrapper>
          <PasswordTitle>이메일</PasswordTitle>
          <Input placeholder="이메일를 입력하세요." name="id" />
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
  display: flex;
  width: 100%;
`;

const PasswordTitle = styled.Text`
  font-size: 15px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  padding: 10px 15px;
  border-bottom-width: 1px;
  border-color: #babfc7;
  border-radius: 5px;
  margin-bottom: 30px;
`;

const ConfirmBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 20px;
`;

const ConfirmButton = styled.TouchableOpacity`
  background-color: #b2b2b2;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const ConfirmText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
