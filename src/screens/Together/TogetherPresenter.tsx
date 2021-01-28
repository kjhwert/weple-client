import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {togetherDate} from '../../module/common';
import {getComma} from '../../components/CommonTime';
import TogetherContext from '../../module/context/TogetherContext';

interface IProps {
  navigation: any;
  userList: any;
  togetherPaging: any;
  togetherMenu: any;
  isMapView: boolean;
  turnMapView: Function;
  setLocationPaging: () => void;
  setFollowerPaging: () => void;
  setEndSoonPaging: () => void;
}

export default ({
  navigation,
  userList,
  togetherPaging,
  togetherMenu,
  isMapView,
  turnMapView,
  setLocationPaging,
  setFollowerPaging,
  setEndSoonPaging,
}: IProps) => {
  const {getTogetherThumbnail, getTogetherActivityImage}: any = useContext(TogetherContext);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <RecruitTogetherWrapper>
              <RecruitTogetherBtn
                onPress={() => {
                  navigation.navigate('togetherMyTotalList');
                }}>
                <RecruitTogetherText>내가 개설한 모임</RecruitTogetherText>
                <RecruitTogetherNumber>{userList.togetherCount}</RecruitTogetherNumber>
                <RecruitTogetherMoreImage source={require('../../assets/more.png')} />
              </RecruitTogetherBtn>
            </RecruitTogetherWrapper>
            {userList?.togetherCount <= 0 ? (
              <Wrapper>
                <TogetherOpenWrapper>
                  <OpenBtnWrapper
                    onPress={() => {
                      navigation.navigate('togetherPostSubject');
                    }}>
                    <OpenBtnImage source={require('../../assets/icon_plus.png')} />
                  </OpenBtnWrapper>
                  <TogetherOpenText>모임을 만들어주세요</TogetherOpenText>
                </TogetherOpenWrapper>
              </Wrapper>
            ) : (
              <>
                {userList.togethers.map((item, idx) => (
                  <RecruitWrapper key={idx}>
                    <RecruitImageWrapper>
                      <RecruitImage source={getTogetherThumbnail(item.feed.thumbnail)} />
                      <RecordWrapper backgroundColor={item.activity.color}>
                        <RecordImage source={getTogetherActivityImage(item.activity.image)} />
                        <RecordText>{item.feed.distance}KM</RecordText>
                      </RecordWrapper>
                    </RecruitImageWrapper>
                    <RecruitTextWrapper>
                      <RecruitTitleBtn>
                        <RecruitTitle>{item.title}</RecruitTitle>
                      </RecruitTitleBtn>
                      <RecruitAddress>{item.togetherPlace}</RecruitAddress>
                      <EntryFee>참가비 {getComma(item.togetherPrice)}원</EntryFee>
                      <Deadline>{togetherDate(item.limitDate)}</Deadline>
                    </RecruitTextWrapper>
                  </RecruitWrapper>
                ))}
                <RecruitBtnWrapper>
                  <RecruitBtn
                    onPress={() => {
                      navigation.navigate('togetherPostSubject');
                    }}>
                    <RecruitBtnText>모임 개설하기</RecruitBtnText>
                  </RecruitBtn>
                </RecruitBtnWrapper>
              </>
            )}

            <Line></Line>
            <MenuBarWrapper>
              {['내 주변', '팔로워', '모집임박'].map((name, idx) => (
                <MenuWrapper key={idx} focused={togetherPaging.id === idx}>
                  <MenuBtn
                    onPress={() => {
                      switch (idx) {
                        case 0:
                          return setLocationPaging();
                        case 1:
                          return setFollowerPaging();
                        case 2:
                          return setEndSoonPaging();
                      }
                    }}>
                    <MenuText focused={togetherPaging.id === idx}>{name}</MenuText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>

            <RecruitTogetherWrapper>
              <RecruitTogetherWrap>
                <RecruitTogetherText>내 주변 개설 모임</RecruitTogetherText>
              </RecruitTogetherWrap>
              <LocationBtn
                onPress={() => {
                  turnMapView();
                }}>
                <LocationImage source={require('../../assets/icon_location.png')} />
              </LocationBtn>
            </RecruitTogetherWrapper>

            {isMapView ? (
              <MapImageWrap>
                <MapImage source={require('../../assets/mapStyle_3.png')} />
              </MapImageWrap>
            ) : (
              <>
                {togetherMenu?.map((item, idx) => (
                  <RecruitWrapper
                    key={idx}
                    onPress={() => {
                      navigation.navigate('togetherMyDetail', {id: item.id});
                    }}>
                    <RecruitImageWrapper>
                      <RecruitImage source={getTogetherThumbnail(item.thumbnail)} />
                      <RecordWrapper backgroundColor={item.activityColor}>
                        <RecordImage source={getTogetherActivityImage(item.activityImage)} />
                        <RecordText>{item.distance}KM</RecordText>
                      </RecordWrapper>
                    </RecruitImageWrapper>
                    <RecruitTextWrapper>
                      <RecruitTitleBtn
                        onPress={() => {
                          navigation.navigate('togetherDetail', {id: item.id});
                        }}>
                        <RecruitTitle>{item.title}</RecruitTitle>
                      </RecruitTitleBtn>
                      <RecruitAddress>{item.place}</RecruitAddress>
                      <EntryFee>참가비 {getComma(item.price)}원</EntryFee>
                      <Deadline>{togetherDate(item.limitDate)}</Deadline>
                    </RecruitTextWrapper>
                  </RecruitWrapper>
                ))}
              </>
            )}
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

const RecruitTogetherWrapper = styled.View`
  display: flex;
  flex-flow: row;
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #eee;
`;

const RecruitTogetherBtn = styled.TouchableOpacity`
  width: 70%;
  flex-flow: row wrap;
  padding: 5px 0;
  align-items: center;
  justify-content: flex-start;
`;

const RecruitTogetherText = styled.Text`
  font-size: 13px;
  color: #333;
  font-weight: bold;
  text-align: left;
  margin-right: 5px;
`;

const RecruitTogetherWrap = styled.View`
  width: 70%;
  flex-flow: row wrap;
  padding: 5px 0;
  align-items: center;
  justify-content: flex-start;
`;

const Wrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 20px;
`;

const TogetherOpenWrapper = styled.View`
  display: flex;
  width: 100%;
  height: 180px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #fcfcfd;
  border-width: 1px;
  border-color: #d2d2d2;
`;

const OpenBtnWrapper = styled.TouchableOpacity`
  width: 40%;
  align-items: center;
  justify-content: center;
`;

const OpenBtnImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const TogetherOpenText = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
  font-weight: bold;
  padding-top: 20px;
`;

const RecruitTogetherNumber = styled.Text`
  color: #007bf1;
  font-weight: bold;
  font-size: 13px;
  margin-right: 3px;
`;

const RecruitTogetherMoreImage = styled.Image`
  width: 6px;
  height: 10px;
`;

const LocationBtn = styled.TouchableOpacity`
  width: 30%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
`;

const LocationImage = styled.Image`
  width: 20px;
  height: 20px;
`;

const MapImageWrap = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const MapImage = styled.Image`
  width: 100%;
`;

const RecruitWrapper = styled.TouchableOpacity`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

const RecruitImageWrapper = styled.TouchableOpacity`
  display: flex;
  width: 45%;
  border-width: 1px;
  border-color: #dfdfdf;
  margin-right: 10px;
`;

const RecruitImage = styled.Image`
  width: 100%;
  height: 100px;
`;

const RecordWrapper = styled.View`
  display: flex;
  flex-flow: row;
  width: 65%;
  align-items: center;
  justify-content: center;
  background-color: ${({backgroundColor}: {backgroundColor: string}) =>
    backgroundColor ? backgroundColor : '#bcbcbc'};
  position: absolute;
  margin-top: 10px;
  padding: 2px;
`;

const RecordText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const RecordImage = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

const RecruitTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
`;

const RecruitTitleBtn = styled.TouchableOpacity`
  width: 100%;
`;

const RecruitTitle = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #000;
`;

const RecruitAddress = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #777;
  padding: 5px 0;
`;

const EntryFee = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #000;
  font-weight: bold;
  padding-bottom: 5px;
`;

const Deadline = styled.Text`
  width: 100%;
  font-size: 10px;
  color: #007bf1;
  font-weight: bold;
`;

const RecruitBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const RecruitBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #fff;
  border-width: 1px;
  border-color: #007bf1;
`;

const RecruitBtnText = styled.Text`
  color: #007bf1;
  font-size: 15px;
  font-weight: bold;
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
