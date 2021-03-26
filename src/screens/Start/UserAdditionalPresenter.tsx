import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../components/ContainerCard';
import {CategoryBtn, StartNextBtn} from '../../components/CommonBtn';
import UserContext from '../../module/context/UserContext';

interface IGender {
  id: number;
  gender: string;
  isSelected: boolean;
}

interface IAgeGroup {
  id: number;
  age: number;
  title: string;
  isSelected: boolean;
}

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {changeGender, changeAgeGroup}: any = useContext(UserContext);
  const [genderGroup, setGenderGroup] = useState<Array<IGender>>([
    {id: 0, gender: '남성', isSelected: false},
    {id: 1, gender: '여성', isSelected: false},
  ]);

  const [ageGroup, setAgeGroup] = useState<Array<IAgeGroup>>([
    {id: 0, age: 10, title: '10대', isSelected: false},
    {id: 1, age: 20, title: '20대', isSelected: false},
    {id: 2, age: 30, title: '30대', isSelected: false},
    {id: 3, age: 40, title: '40대', isSelected: false},
    {id: 4, age: 50, title: '50대', isSelected: false},
    {id: 5, age: 60, title: '60대 이상', isSelected: false},
  ]);
  const [isActive, setIsActive] = useState({
    gender: false,
    age: false,
  });

  const selectGender = ({id, gender}: IGender) => {
    const newGenderGroup = genderGroup.map((item) => {
      if (item.id === id) {
        item.isSelected = true;
        return item;
      }

      item.isSelected = false;
      return item;
    });
    setGenderGroup(newGenderGroup);
    changeGender(gender);
    setIsActive({...isActive, gender: true});
  };

  const selectAgeGroup = ({id, age}: IAgeGroup) => {
    const newAgeGroup = ageGroup.map((item) => {
      if (item.id === id) {
        item.isSelected = true;
        return item;
      }

      item.isSelected = false;
      return item;
    });
    setAgeGroup(newAgeGroup);
    changeAgeGroup(age);
    setIsActive({...isActive, age: true});
  };

  return (
    <Container>
      <ContainerCard>
        <CategoryWrapper>
          <CategoryTitle>성별</CategoryTitle>
          <ActivityWrapper>
            {genderGroup.map((gender) => (
              <CategoryBtn
                key={gender.id}
                text={gender.gender}
                onPress={() => {
                  selectGender(gender);
                }}
                isSelect={gender.isSelected}
              />
            ))}
          </ActivityWrapper>
          <CategoryTitle>연령</CategoryTitle>
          {ageGroup.map((age) => (
            <CategoryBtn
              key={age.id}
              text={age.title}
              onPress={() => {
                selectAgeGroup(age);
              }}
              isSelect={age.isSelected}
            />
          ))}
        </CategoryWrapper>
      </ContainerCard>
      <StartNextBtn
        StartNextPage={'personalData'}
        text={'다음'}
        navigation={navigation}
        isActive={isActive.age && isActive.gender}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
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
