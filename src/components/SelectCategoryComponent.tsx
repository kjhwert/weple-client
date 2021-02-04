import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import ContainerCard from './ContainerCard';
import {categoryApi} from '../module/api';
import TogetherContext from '../module/context/TogetherContext';
import AlertContext from '../module/context/AlertContext';
import {IActivityGroup} from '../module/type/together';

export default () => {
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const {searchCategories, changeSearchCategoriesStatus}: any = useContext(TogetherContext);
  const [categories, setCategories] = useState<Array<IActivityGroup>>([]);

  const getCategories = async () => {
    const {statusCode, message, data} = await categoryApi.activities();
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    setCategories(data);
  };

  const hasCategories = (id: number) => {
    const isAdded = searchCategories.find((categoryId: number) => categoryId === id);
    if (isAdded) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <InfoText>1개 이상 선택해주세요.</InfoText>
            {categories.map((activity) => (
              <CategoryWrapper key={activity.id}>
                <CategoryTitle>{activity.name}</CategoryTitle>
                <ActivityWrapper>
                  {activity.categoryActivity.map(({id, name}) => (
                    <Category
                      onPress={() => {
                        changeSearchCategoriesStatus(id);
                      }}
                      isSelected={hasCategories(id)}
                      key={id}>
                      <CategoryText isSelected={hasCategories(id)}>{name}</CategoryText>
                    </Category>
                  ))}
                </ActivityWrapper>
              </CategoryWrapper>
            ))}
          </ContainerCard>
        </ScrollWrapper>
      </ScrollContainer>
      <ActiveButton onPress={() => {}}>
        <ActiveButtonText>적용</ActiveButtonText>
      </ActiveButton>
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
  background-color: #007bf1;
`;

const ActiveButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const Container = styled.View`
  flex: 1;
`;

const Category = styled.TouchableOpacity`
  max-width: 40%;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({isSelected}: {isSelected: boolean}) => (isSelected ? '#007bf1' : '#bfbfbf')};
  padding: 10px;
  margin: 0 20px 10px 0;
`;

const CategoryText = styled.Text`
  color: ${({isSelected}: {isSelected: boolean}) => (isSelected ? '#007bf1' : '#6f6f6f')};
  font-size: 14px;
  text-align: center;
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
