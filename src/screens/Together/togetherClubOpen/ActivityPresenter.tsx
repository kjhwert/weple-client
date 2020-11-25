import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
  isClick: boolean;
}

export default ({navigation, menuList, ActivityData}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <ActivityTitleWrapper>
              <ActivityTitle>활동을 선택해주세요.</ActivityTitle>
            </ActivityTitleWrapper>
            <Line></Line>
            <MenuBarWrapper>
              {menuList.map((item, idx) => (
                <MenuWrapper key={idx} isClick={item.isClick}>
                  <MenuBtn onPress={() => {}}>
                    <MenuText>{item.name}</MenuText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>

            {ActivityData.map((item, idx) => (
              <ActivityWrapper key={idx}>
                <ActivityImageWrapper
                  onPress={() => {
                    navigation.navigate('clubOpen');
                  }}>
                  <ActivityImage source={item.image} />
                </ActivityImageWrapper>
              </ActivityWrapper>
            ))}

            <NextBtnWrapper>
              <NextButton
                onPress={() => {
                  navigation.navigate('clubOpen');
                }}>
                <NextText>다음</NextText>
              </NextButton>
            </NextBtnWrapper>
          </Card>
        </ScrollWrapper>
      </ScrollContainer>
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

const Card = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Line = styled.View`
  width: 100%;
  padding: 5px;
  background-color: #f3f3f3;
`;

const ActivityTitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px;
`;

const ActivityTitle = styled.Text`
  font-size: 13px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
`;

const ActivityWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 100%;
`;

const ActivityImageWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  border-width: 1px;
`;

const ActivityImage = styled.Image`
  width: 100%;
  height: 100px;
`;

const MenuBarWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const MenuWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-width: 3px;
  border-color: ${(props: IProps) => (props.isClick ? '#007bf1' : '#fff')};
`;

const MenuBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
`;

const MenuText = styled.Text`
  font-size: 15px;
  color: ${(props: IProps) => (props.isClick ? '#007bf1' : '#3a3636')};
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;

const NextBtnWrapper = styled.View`
  flex: 1;
  display: flex;
  width: 100%;
  padding: 20px;
`;

const NextButton = styled.TouchableOpacity`
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #b2b2b2;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
