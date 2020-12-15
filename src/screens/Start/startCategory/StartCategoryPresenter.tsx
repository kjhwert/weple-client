import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import NextBtn from '../../../components/NextBtn';

interface IProps {
  navigation: any;
  activities: Array<IActivity>;
}
interface IActivity {
  id: number;
  name: string;
  categoryActivity: Array<{
    id: number;
    name: string;
  }>;
}

export default ({navigation, activities}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <ScrollContainer>
          <InfoText>1개 이상 선택해주세요.</InfoText>
          {activities.map((activity) => (
            <CategoryWrapper key={activity.id}>
              <CategoryTitle>{activity.name}</CategoryTitle>
              <ActivityWrapper>
                {activity.categoryActivity.map(({id, name}) => (
                  <CategoryBtn key={id} onPress={() => {}}>
                    <CategoryText>{name}</CategoryText>
                  </CategoryBtn>
                ))}
              </ActivityWrapper>
            </CategoryWrapper>
          ))}
        </ScrollContainer>
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

const ScrollContainer = styled.ScrollView``;

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

const ActivityWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
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
