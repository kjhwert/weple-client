import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import NextBtn from '../../../components/NextBtn';

interface IProps {
  navigation: any;
}

export default ({
  navigation,
  sportCategories,
  travelCategories,
  hobbyCategories,
}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <CategoryWrapper>
          <InfoText>1개 이상 선택해주세요.</InfoText>
          <CategoryTitle>운동</CategoryTitle>
          {sportCategories.map((item, idx) => (
            <CategoryBtn key={idx} onPress={() => {}}>
              <CategoryText>{item.name}</CategoryText>
            </CategoryBtn>
          ))}

          <CategoryTitle>여행</CategoryTitle>
          {travelCategories.map((item, idx) => (
            <CategoryBtn key={idx} onPress={() => {}}>
              <CategoryText>{item.name}</CategoryText>
            </CategoryBtn>
          ))}

          <CategoryTitle>취미</CategoryTitle>
          {hobbyCategories.map((item, idx) => (
            <CategoryBtn key={idx} onPress={() => {}}>
              <CategoryText>{item.name}</CategoryText>
            </CategoryBtn>
          ))}
        </CategoryWrapper>
      </ContainerCard>
      <NextBtn nextPage={'recordSet'} navigation={navigation}>
        {`확인`}
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
`;

const CategoryTitle = styled.Text`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: #1f1f1f;
  text-align: left;
  margin: 10px 0;
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
