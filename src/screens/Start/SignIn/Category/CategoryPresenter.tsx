import React from 'react';
import styled from 'styled-components/native';
import Card from '../../../../components/Card';

interface IProps {
  navigation: any;
}

export default ({navigation, categories}: IProps) => {
  return (
    <Container>
      <Card>
        <CategoryWrapper>
          <InfoText>1개 이상 선택해주세요.</InfoText>
          {categories.map((item, idx) => (
            <CategoryBtn key={idx} onPress={() => {}}>
              <CategoryText>{item.name}</CategoryText>
            </CategoryBtn>
          ))}
        </CategoryWrapper>

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
  font-size: 12px;
  font-weight: bold;
  color: #6f6f6f;
  text-align: left;
  margin-bottom: 20px;
`;

const CategoryWrapper = styled.View`
  flex: 9;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`;

const CategoryBtn = styled.TouchableOpacity`
  max-width: 40%;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #bfbfbf;
  padding: 10px;
  margin: 0 20px 10px 0;
`;

const CategoryText = styled.Text`
  color: #6f6f6f;
  font-size: 14px;
  text-align: center;
`;

const NextBtnWrapper = styled.View`
  flex: 1;
  display: flex;
  width: 100%;
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
  font-size: 16px;
  font-weight: bold;
`;
