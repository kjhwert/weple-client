import React from 'react';
import styled from 'styled-components/native';
import NextBtn from '../../../components/NextBtn';

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
            <ActivityTitle>활동을 선택해주세요.</ActivityTitle>
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

            <ActivityWrapper>
              {ActivityData.map((item, idx) => (
                <ActivityImageWrapper key={idx}>
                  <ActivityImage onPress={() => {}} source={item.image} />
                  <ActivityTextWrapper>
                    <ActivityKind>{item.kind}</ActivityKind>
                    <ActivityDistance>{item.distance}KM</ActivityDistance>
                  </ActivityTextWrapper>
                  <ActivityAddress>{item.address}</ActivityAddress>
                </ActivityImageWrapper>
              ))}
            </ActivityWrapper>
          </Card>
          <NextBtn nextPage={'togetherPost'} navigation={navigation}>
            {`다음`}
          </NextBtn>
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

const ActivityTitle = styled.Text`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 20px;
  font-size: 13px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
`;

const ActivityWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 10px 0px;
  margin-bottom: 50px;
`;

const ActivityImageWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #4c585858;
  border-radius: 5px;
  width: 45%;
  margin-bottom: 20px;
`;

const ActivityImage = styled.Image`
  width: 100%;
  height: 120px;
  flex-flow: row wrap;
  border-radius: 5px;
`;

const ActivityTextWrapper = styled.View`
  display: flex;
  flex-flow: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const ActivityKind = styled.Text`
  width: 40%;
  height: 18px;
  font-size: 9px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  background-color: #919191;
  padding: 2px;
`;

const ActivityDistance = styled.Text`
  width: 40%;
  height: 18px;
  font-size: 9px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  background-color: #000;
  padding: 2px;
`;

const ActivityAddress = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #656565;
  text-align: center;
  margin-bottom: 20px;
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
