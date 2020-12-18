import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import { CategoryBtn, StartNextBtn } from '../../../components/SnsAccountBtn';

interface IProps {
  navigation: any;
  activities: Array<IActivity>;
  categoriesClick: Function;
  isActive: boolean;
  createUserCategory: Function;
}
interface IActivity {
  id: number;
  name: string;
  categoryActivity: Array<{
    id: number;
    name: string;
  }>;
}

export default ({
  navigation,
  activities,
  categoriesClick,
  isActive,
  createUserCategory,
}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <InfoText>1개 이상 선택해주세요.</InfoText>
            {activities.map((activity) => (
              <CategoryWrapper key={activity.id}>
                <CategoryTitle>{activity.name}</CategoryTitle>
                <ActivityWrapper>
                  {activity.categoryActivity.map(({ id, name, isSelect }) => (
                    <CategoryBtn
                      key={id}
                      text={name}
                      onPress={() => {
                        categoriesClick(activity.id, id);
                      }}
                      isSelect={isSelect}
                    />
                  ))}
                </ActivityWrapper>
              </CategoryWrapper>
            ))}

          </ContainerCard>
        </ScrollWrapper>
      </ScrollContainer>

      <StartNextBtn
        StartNextPage={'personalData'}
        text={'다음'}
        navigation={navigation}
        callBack={createUserCategory}
        isActive={isActive}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ScrollContainer = styled.View`
  height: 100%;
  background-color: #fff;
`;

const ScrollWrapper = styled.ScrollView``;

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
