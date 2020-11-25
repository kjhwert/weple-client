import React from 'react';
import styled from 'styled-components/native';
import Card from '../../../components/Card';
import RadioButtonRN from 'radio-buttons-react-native';

export default ({navigation, radioBoxData}) => {
  return (
    <Container>
      <Card>
        <SubjectWrapper>
          <SubjectText>어떤 주제와 관련 있나요?</SubjectText>
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
        </SubjectWrapper>

        <NextBtnWrapper>
          <NextButton
            onPress={() => {
              navigation.navigate('introduce');
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

const SubjectWrapper = styled.View`
  flex: 9;
  display: flex;
  width: 100%;
`;

const SubjectText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #6f6f6f;
  margin-bottom: 5px;
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
