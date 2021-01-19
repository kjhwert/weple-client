import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {CategoryBtn, StartNextBtn} from '../../../components/CommonBtn';

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

export default ({navigation, activities, categoriesClick, isActive, createUserCategory}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <SubjectWrapper>
              <SubjectText>어떤 주제와 관련 있나요?</SubjectText>
              {activities.map((activity) => (
                <CategoryWrapper key={activity.id}>
                  <CategoryTitle>{activity.name}</CategoryTitle>
                  <ActivityWrapper>
                    {activity.categoryActivity.map(({id, name, isSelect}) => (
                      <CategoryBtn
                        key={id}
                        text={name}
                        onPress={() => {
                          categoriesClick(id);
                        }}
                        isSelect={isSelect}
                      />
                    ))}
                  </ActivityWrapper>
                </CategoryWrapper>
              ))}
            </SubjectWrapper>
          </ContainerCard>
        </ScrollWrapper>
      </ScrollContainer>
      <StartNextBtn
        StartNextPage={'togetherPostIntroduce'}
        text={'다음'}
        navigation={navigation}
        isActive={isActive}
        callBack={createUserCategory}
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

const SubjectWrapper = styled.View`
  display: flex;
  width: 100%;
  margin-bottom: 50px;
`;

const SubjectText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #6f6f6f;
  margin-bottom: 5px;
`;

const CategoryWrapper = styled.View`
  flex: 9;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
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
