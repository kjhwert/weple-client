import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import NextBtn from '../../../components/NextBtn';

interface IProps {
  navigation: any;
}

export default ({navigation, categories}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <CategoryWrapper>
          <InfoText>1개 이상 선택해주세요.</InfoText>
          {categories.map((item, idx) => (
            <CategoryBtn key={idx} onPress={() => {}}>
              <CategoryText>{item.name}</CategoryText>
            </CategoryBtn>
          ))}
        </CategoryWrapper>
      </ContainerCard>
      <NextBtn nextPage={'personalData'} navigation={navigation}>
        {`다음`}
      </NextBtn>
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
