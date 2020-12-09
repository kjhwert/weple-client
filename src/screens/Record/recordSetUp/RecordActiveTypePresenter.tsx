import React, {useContext} from 'react';
import styled from 'styled-components/native';
import RecordContext from '../../../module/context/RecordContext';

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
    caloriesPerMinute: number;
  }>;
}

export default ({navigation, activities}: IProps) => {
  const {setActivityCategory}: any = useContext(RecordContext);
  return (
    <Container>
      <ScrollContainer>
        {activities.map((activity) => (
          <CategoryWrapper key={activity.id}>
            <CategoryTitle>{activity.name}</CategoryTitle>
            <ActivityWrapper>
              {activity.categoryActivity.map(
                ({id, name, caloriesPerMinute}) => (
                  <CategoryBtn
                    key={id}
                    onPress={() => {
                      setActivityCategory({
                        id,
                        name,
                        caloriesPerMinute,
                      });
                      navigation.goBack();
                    }}>
                    <CategoryText>{name}</CategoryText>
                  </CategoryBtn>
                ),
              )}
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
  border-color: #bfbfbf;
  padding: 10px;
  margin: 0 10px 10px 0;
`;

const CategoryText = styled.Text`
  color: #6f6f6f;
  font-size: 14px;
  text-align: center;
`;
