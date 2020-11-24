import React from 'react';
import styled from 'styled-components/native';
import Card from '../../../../components/Card';

export default ({navigation, category}) => {
  return (
    <Container>
      <Card>
        <InfoText>1개 이상 선택해주세요.</InfoText>
        <KindWrapper>
          {category.map((item, idx) => (
            <KindBtn key={idx} onPress={() => {}}>
              <KindText>{item.name}</KindText>
            </KindBtn>
          ))}
        </KindWrapper>

        <NextBtnWrapper>
          <NextButton
            onPress={() => {
              navigation.navigate('personalData');
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

const InfoText = styled.Text`
  width: 100%;
  font-size: 15px;
  color: #6f6f6f;
  text-align: left;
  margin-bottom: 10px;
  padding: 10px;
`;

const KindWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  padding: 10px;
`;

const KindBtn = styled.TouchableOpacity`
  max-width: 40%;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #bfbfbf;
  padding: 10px;
  margin: 0 20px 10px 0;
`;

const KindText = styled.Text`
  color: #6f6f6f;
  font-size: 18px;
  text-align: center;
`;

const NextBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 20px;
  align-items: center;
  justify-content: center;
`;

const NextButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  align-content: center;
  border-radius: 5px;
  background-color: #b2b2b2;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
