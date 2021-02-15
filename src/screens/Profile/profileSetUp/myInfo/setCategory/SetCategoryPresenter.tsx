import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../../../components/ContainerCard';
import {CategoryBtn, StartNextBtn} from '../../../../../components/CommonBtn';
import {View} from 'react-native';

interface IProps {
  navigation: any;
  activities: Array<IActivity>;
  selectCategories: (categoryId: number, isSelect: boolean) => void;
  updateUserCategories: () => void;
  isActive: boolean;
}

interface IActivity {
  id: number;
  name: string;
  categoryActivity: Array<{
    caloriesPerMinute: number;
    id: number;
    name: string;
    isSelect: boolean;
  }>;
}

export default ({navigation, activities, selectCategories, isActive, updateUserCategories}: IProps) => {
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
                  {activity.categoryActivity.map(({id, name, isSelect}) => (
                    <CategoryBtn
                      key={id}
                      text={name}
                      onPress={() => {
                        selectCategories(id, isSelect);
                      }}
                      isSelect={isSelect}
                    />
                  ))}
                </ActivityWrapper>
              </CategoryWrapper>
            ))}
          </ContainerCard>
          <View style={{width: '100%', padding: 50}} />
        </ScrollWrapper>
        <ActiveButton isActive={isActive} onPress={updateUserCategories}>
          <ActiveButtonText>저장</ActiveButtonText>
        </ActiveButton>
      </ScrollContainer>
    </Container>
  );
};

const ActiveButton = styled.TouchableOpacity`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  align-items: center;
  background-color: ${({isActive}: {isActive: boolean}) => (isActive ? '#007bf1' : '#b2b2b2')};
`;

const ActiveButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

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
