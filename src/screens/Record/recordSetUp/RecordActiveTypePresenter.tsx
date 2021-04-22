import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {ACTIVE_BUTTON, ACTIVE_TEXT, INACTIVE_BUTTON, INACTIVE_TEXT} from '../../../module/common';
import {ICategoryActivity} from '../../../module/type/category-activity';
import RecordContext2, {IRecordContext2} from '../../../module/context/RecordContext2';

interface IProps {
  navigation: any;
  activities: Array<ICategoryActivity>;
}

interface IStyledProps {
  isActive: boolean;
}

export default ({navigation, activities}: IProps) => {
  const {settings, onChangeSettingActivity} = useContext(RecordContext2) as IRecordContext2;
  return (
    <Container>
      <ScrollContainer>
        {activities.map((activity) => (
          <CategoryWrapper key={activity.id}>
            <CategoryTitle>{activity.name}</CategoryTitle>
            <ActivityWrapper>
              {activity.categoryActivity.map((activity) => (
                <CategoryBtn
                  key={activity.id}
                  isActive={settings.activity.id === activity.id}
                  onPress={() => {
                    onChangeSettingActivity(activity);
                    navigation.goBack();
                  }}>
                  <CategoryText isActive={settings.activity.id === activity.id}>{activity.name}</CategoryText>
                </CategoryBtn>
              ))}
            </ActivityWrapper>
          </CategoryWrapper>
        ))}
      </ScrollContainer>
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
  flex: 1;
  padding: 20px;
`;

const ScrollContainer = styled.ScrollView``;

const CategoryWrapper = styled.View``;

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

const CategoryBtn = styled.TouchableOpacity`
  min-width: 18%;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({isActive}: IStyledProps) => (isActive ? ACTIVE_BUTTON : INACTIVE_BUTTON)};
  padding: 10px;
  margin: 0 10px 10px 0;
`;

const CategoryText = styled.Text`
  font-size: 14px;
  text-align: center;
  color: ${({isActive}: IStyledProps) => (isActive ? ACTIVE_TEXT : INACTIVE_TEXT)};
`;
