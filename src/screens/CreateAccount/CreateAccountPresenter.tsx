import React from 'react';
import styled from 'styled-components/native';
import Card from '../../components/Card';

export default ({navigation}) => {
  return (
    <Container>
      <Card>
        <CreateAccountWrapper>
          <CreateAccountTitle>계정 만들기</CreateAccountTitle>
          <CreateAccountContent>
            {'전력달리기, 미친 것같은 자전거타기, 햇빛 좋은날\n' +
              '하이킹하고 싶은 것은 무엇이든 당신의 모든 활동을\n' +
              '쉽고 아름다운 방법으로 공유하세요.'}
          </CreateAccountContent>
        </CreateAccountWrapper>

        <CreateAccountBtnWrapper>
          <CreateAccountBtn onPress={() => {}}>
            <CreateAccountText>이메일로 가입하기</CreateAccountText>
          </CreateAccountBtn>
          <CreateAccountBtn onPress={() => {}}>
            <CreateAccountText>카카오톡으로 시작하기</CreateAccountText>
          </CreateAccountBtn>
          <CreateAccountBtn onPress={() => {}}>
            <CreateAccountText>FaceBook으로 시작하기</CreateAccountText>
          </CreateAccountBtn>
          <CreateAccountBtn onPress={() => {}}>
            <CreateAccountText>Apple로 시작하기</CreateAccountText>
          </CreateAccountBtn>
          <CreateAccountBtn onPress={() => {}}>
            <CreateAccountText>Google로 시작하기</CreateAccountText>
          </CreateAccountBtn>
        </CreateAccountBtnWrapper>

        <NextBtnWrapper>
          <NextButton
            onPress={() => {
              navigation.navigate('signIn');
            }}>
            <NextText>다음</NextText>
          </NextButton>
        </NextBtnWrapper>
      </Card>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const CreateAccountWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const CreateAccountTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

const CreateAccountContent = styled.Text`
  font-size: 15px;
  text-align: left;
  line-height: 25px;
  color: #6f6f6f;
  padding: 30px 0px 60px 0px;
`;

const CreateAccountBtnWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const CreateAccountBtn = styled.TouchableOpacity`
  background-color: white;
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #eee;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CreateAccountText = styled.Text`
  color: #333;
  font-size: 16px;
  font-weight: bold;
`;

const NextBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
`;

const NextButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #b2b2b2;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
