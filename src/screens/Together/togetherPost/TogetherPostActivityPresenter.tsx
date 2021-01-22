import React, {useContext} from 'react';
import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';
import {StartNextBtn} from '../../../components/CommonBtn';
import TogetherContext from '../../../module/context/TogetherContext';

interface IProps {
  navigation: any;
  feedActiveList: any;
  toggleCheckBox: any;
  setToggleCheckBox: any;
  isActive: boolean;
  setFeedId: Function;
  togetherPaging: any;
  setMyfeedPaging: () => void;
  setLikefeedPaging: () => void;
}

export default ({
  navigation,
  feedActiveList,
  toggleCheckBox,
  setToggleCheckBox,
  isActive,
  setFeedId,
  togetherPaging,
  setMyfeedPaging,
  setLikefeedPaging,
}: IProps) => {
  const {getTogetherThumbnail}: any = useContext(TogetherContext);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <ActivityTitle>활동을 선택해주세요.</ActivityTitle>
            <Line></Line>
            <MenuBarWrapper>
              {['내 활동', '인기 활동'].map((name, idx) => (
                <MenuWrapper key={idx} focused={togetherPaging.id === idx}>
                  <MenuBtn
                    onPress={() => {
                      switch (idx) {
                        case 0:
                          return setMyfeedPaging();
                        case 1:
                          return setLikefeedPaging();
                      }
                    }}>
                    <MenuText focused={togetherPaging.id === idx}>{name}</MenuText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>
            <ActivityWrapper>
              {feedActiveList.map((item, idx) => (
                <ActivityImageWrapper key={idx}>
                  <ActivityImage source={getTogetherThumbnail(item.thumbnail)} />
                  <ActivityTextWrapper>
                    <ActivityKind backgroundColor={item.activityColor}>{item.activityName}</ActivityKind>
                    <ActivityDistance>{item.distance}KM</ActivityDistance>
                  </ActivityTextWrapper>
                  <AddressWrap>
                    <ActivityAddress>{item.address}</ActivityAddress>
                  </AddressWrap>
                  <CheckBox
                    style={{
                      position: 'absolute',
                      right: 8,
                      bottom: 180,
                    }}
                    boxType={'circle'}
                    disabled={false}
                    value={item.id === toggleCheckBox}
                    onValueChange={(e) => {
                      setToggleCheckBox(e ? item.id : '');
                    }}
                    tintColors={{true: '#007bf1', false: '#c1c1c1'}}
                  />
                </ActivityImageWrapper>
              ))}
            </ActivityWrapper>
          </Card>
        </ScrollWrapper>
      </ScrollContainer>
      <StartNextBtn
        StartNextPage={'togetherPost'}
        text={'다음'}
        navigation={navigation}
        isActive={isActive}
        callBack={setFeedId}
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

const Card = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
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
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
`;

const ActivityWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 80px;
`;

const ActivityImageWrapper = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  border-width: 1px;
  border-top-width: 0px;
  border-color: #e9e9e9;
  border-radius: 5px;
  width: 48%;
  margin-bottom: 20px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: grey;
  shadow-offset: 0px 0px;
`;

const ActivityImage = styled.Image`
  width: 100%;
  height: 120px;
  flex-flow: row wrap;
  justify-content: flex-start;
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const ActivityTextWrapper = styled.View`
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 20px;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const ActivityKind = styled.Text`
  width: 42%;
  height: 100%;
  padding: 3px 0;
  font-size: 9px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  background-color: ${({backgroundColor}: {backgroundColor: string}) =>
    backgroundColor ? backgroundColor : '#b3b3b3'};
`;

const ActivityDistance = styled.Text`
  width: 42%;
  height: 100%;
  padding: 3px 0;
  font-size: 9px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  background-color: #000;
`;

const AddressWrap = styled.View`
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 40px;
  justify-content: flex-start;
  padding: 3px 5px;
  margin-bottom: 20px;
`;

const ActivityAddress = styled.Text`
  font-size: 11px;
  color: #656565;
  text-align: left;
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
  border-color: ${({focused}: {focused: boolean}) => (focused ? '#007bf1' : '#fff')};
`;

const MenuBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
`;

const MenuText = styled.Text`
  font-size: 16px;
  color: ${({focused}: {focused: boolean}) => (focused ? '#007bf1' : '#333')};
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;
