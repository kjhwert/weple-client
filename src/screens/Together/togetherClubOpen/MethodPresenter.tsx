import React from 'react';
import styled from 'styled-components/native';
import Card from '../../../components/Card';
import RadioButtonRN from 'radio-buttons-react-native';

export default ({navigation, radioBoxData}) => {
  return (
    <Container>
      <Card>
        <MethodWrapper>
          <MethodTitle>모집방식을 선택해주세요.</MethodTitle>
          <RadioButtonRN
            box={false}
            circleSize={8}
            activeColor={'#187fe2'}
            textStyle={{
              fontSize: 15,
              color: '#919191',
              padding: 3,
            }}
            data={radioBoxData}
          />
          <MethodText>
            비공개 모집시 초대를 통해서만 모집할 수 있습니다.
          </MethodText>
        </MethodWrapper>

        <MethodTagWrapper>
          <MethodTagTitle>태그를 입력하세요.</MethodTagTitle>
          <MethodTagInput />
        </MethodTagWrapper>

        <NextBtnWrapper>
          <NextButton
            onPress={() => {
              navigation.navigate('clubActivity');
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

const MethodWrapper = styled.View`
  flex: 3;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

const MethodTitle = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #6f6f6f;
  margin-bottom: 5px;
`;

const MethodText = styled.Text`
  font-size: 11px;
  color: #69b6ff;
  font-weight: bold;
  text-align: left;
  padding: 20px;
`;

const MethodTagWrapper = styled.View`
  flex: 6;
  display: flex;
  width: 100%;
`;

const MethodTagTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const MethodTagInput = styled.TextInput`
  width: 100%;
  height: 20%;
  padding: 10px;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: #b5b5b5;
  border-radius: 5px;
  font-size: 10px;
  color: #6f6f6f;
`;

const NextBtnWrapper = styled.View`
  flex: 1;
  display: flex;
  width: 100%;
`;

const NextButton = styled.TouchableOpacity`
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #b2b2b2;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
