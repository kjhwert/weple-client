import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import {togetherDate} from '../../module/common';
import {getComma} from '../../components/CommonTime';
import TogetherContext from '../../module/context/TogetherContext';
import {ITogethers} from '../../module/type/together';
import {NativeScrollEvent, NativeSyntheticEvent, RefreshControl, Text, View} from 'react-native';
import {MAPBOX_DEFAULT_STYLE} from '../../module/common';
import MapboxGL from '@react-native-mapbox-gl/maps';
import SearchComponent from '../../components/SearchComponent';
import Loading from '../../components/Loading';

interface IProps {
  navigation: any;
  togetherPaging: any;
  togethers: Array<ITogethers>;
  isMapView: boolean;
  turnMapView: Function;
  getLocation: () => void;
  getFollower: () => void;
  getEndSoon: () => void;
  getMoreTogethers: () => void;
  offMapView: () => void;
  sort: number;
  loading: boolean;
  getUserTogethers: () => void;
  getTogethers: () => void;
}

export default ({
  navigation,
  togetherPaging,
  togethers,
  isMapView,
  turnMapView,
  getLocation,
  getFollower,
  getEndSoon,
  getMoreTogethers,
  offMapView,
  sort,
  loading,
  getUserTogethers,
  getTogethers,
}: IProps) => {
  const {getTogetherThumbnail, getTogetherActivityImage, searchVisible, userTogethers}: any = useContext(
    TogetherContext,
  );

  const [selected, setSelected] = useState<ITogethers | null>(null);
  const [refresh, setRefresh] = useState(false);

  const onRefresh = async () => {
    setRefresh(true);
    await getUserTogethers();
    await getTogethers();
    setRefresh(false);
  };
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}: NativeScrollEvent) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 200;
  };

  const onScroll = async ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isCloseToBottom(nativeEvent)) {
      await getMoreTogethers();
    }
  };

  const togetherAnnotation = (together: ITogethers) => {
    return (
      <MapboxGL.PointAnnotation
        key={together.id}
        id={`${together.id}`}
        coordinate={[together.lat, together.lon]}
        onSelected={() => setSelected(together)}>
        {/*<MapboxMarkWrapper color={together.activityColor}>*/}
        {/*  <Image*/}
        {/*    source={{uri: `${BASE_URL}/${together.activityImage}`}}*/}
        {/*    style={{width: 20, height: 20}}*/}
        {/*    resizeMode={'cover'}*/}
        {/*  />*/}
        {/*</MapboxMarkWrapper>*/}
      </MapboxGL.PointAnnotation>
    );
  };

  return (
    <Container>
      {searchVisible && <SearchComponent navigation={navigation} stack={'together'} />}
      <ScrollContainer>
        <ScrollWrapper
          onScroll={onScroll}
          scrollEventThrottle={60}
          refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
          <Card>
            {userTogethers.togetherCount > 0 && (
              <RecruitTogetherWrapper>
                <RecruitTogetherBtn
                  onPress={() => {
                    navigation.navigate('togetherMyTotalList');
                  }}>
                  <RecruitTogetherText>내가 개설한 모임</RecruitTogetherText>
                  <RecruitTogetherNumber>{userTogethers.togetherCount}</RecruitTogetherNumber>
                  <RecruitTogetherMoreImage source={require('../../assets/more.png')} />
                </RecruitTogetherBtn>
              </RecruitTogetherWrapper>
            )}
            {userTogethers.togetherCount <= 0 ? (
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
                {userTogethers.togethers.map((together) => (
                  <RecruitWrapper
                    key={together.id}
                    onPress={() => {
                      navigation.navigate('togetherDetail', {id: together.id});
                    }}>
                    <RecruitImageWrapper>
                      <RecruitImage source={getTogetherThumbnail(together.feed.thumbnail)} />
                      <RecordWrapper backgroundColor={together.activity.color}>
                        <RecordImage source={getTogetherActivityImage(together.activity.image)} />
                        <RecordText>{together.feed.distance}KM</RecordText>
                      </RecordWrapper>
                    </RecruitImageWrapper>
                    <RecruitTextWrapper>
                      <RecruitTitleBtn>
                        <RecruitTitle>{together.title}</RecruitTitle>
                      </RecruitTitleBtn>
                      <RecruitAddress>{together.togetherPlace}</RecruitAddress>
                      <EntryFee>참가비 {getComma(together.togetherPrice)}원</EntryFee>
                      <Deadline>{togetherDate(together.limitDate)}</Deadline>
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
                <MenuWrapper key={idx} focused={sort === idx}>
                  <MenuBtn
                    onPress={() => {
                      switch (idx) {
                        case 0:
                          return getLocation();
                        case 1:
                          offMapView();
                          return getFollower();
                        case 2:
                          offMapView();
                          return getEndSoon();
                      }
                    }}>
                    <MenuText focused={sort === idx}>{name}</MenuText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>

            {togetherPaging.id === 0 && (
              <RecruitTogetherWrapper>
                <RecruitTogetherWrap>
                  <RecruitTogetherText>내 주변 개설 모임</RecruitTogetherText>
                </RecruitTogetherWrap>
                <LocationBtn
                  onPress={() => {
                    turnMapView();
                  }}>
                  <LocationImage
                    source={
                      isMapView ? require('../../assets/icon_list.png') : require('../../assets/icon_location.png')
                    }
                  />
                </LocationBtn>
              </RecruitTogetherWrapper>
            )}

            {isMapView ? (
              <>
                <MapboxGL.MapView
                  style={{width: '100%', height: 400}}
                  styleURL={MAPBOX_DEFAULT_STYLE}
                  zoomEnabled={false}
                  scrollEnabled={false}
                  rotateEnabled={false}>
                  <MapboxGL.Camera zoomLevel={12} centerCoordinate={[togetherPaging.lon, togetherPaging.lat]} />
                  {togethers.map((together) => togetherAnnotation(together))}
                </MapboxGL.MapView>
                {selected && (
                  <SelectedWrapper
                    onPress={() => {
                      navigation.navigate('togetherDetail', {id: selected.id});
                    }}>
                    <RecruitImageWrapper>
                      <RecruitImage source={getTogetherThumbnail(selected.thumbnail)} />
                      <RecordWrapper backgroundColor={selected.activityColor}>
                        <RecordImage source={getTogetherActivityImage(selected.activityImage)} />
                        <RecordText>{selected.distance}KM</RecordText>
                      </RecordWrapper>
                    </RecruitImageWrapper>
                    <RecruitTextWrapper>
                      <RecruitTitleBtn>
                        <RecruitTitle>{selected.title}</RecruitTitle>
                      </RecruitTitleBtn>
                      <RecruitAddress>{selected.place}</RecruitAddress>
                      <EntryFee>참가비 {getComma(selected.price)}원</EntryFee>
                      <Deadline>{togetherDate(selected.limitDate)}</Deadline>
                    </RecruitTextWrapper>
                  </SelectedWrapper>
                )}
              </>
            ) : (
              <>
                {loading ? (
                  <View style={{width: '100%', marginTop: 20}}>
                    <Loading />
                  </View>
                ) : togethers.length === 0 ? (
                  <View style={{width: '100%', marginTop: 20}}>
                    <Text style={{fontSize: 12, width: '100%', textAlign: 'center'}}>데이터가 없습니다.</Text>
                  </View>
                ) : (
                  togethers.map((together) => (
                    <RecruitWrapper
                      key={together.id}
                      onPress={() => {
                        navigation.navigate('togetherDetail', {id: together.id});
                      }}>
                      <RecruitImageWrapper>
                        <RecruitImage source={getTogetherThumbnail(together.thumbnail)} />
                        <RecordWrapper backgroundColor={together.activityColor}>
                          <RecordImage source={getTogetherActivityImage(together.activityImage)} />
                          <RecordText>{together.distance}KM</RecordText>
                        </RecordWrapper>
                      </RecruitImageWrapper>
                      <RecruitTextWrapper>
                        <RecruitTitleBtn>
                          <RecruitTitle>{together.title}</RecruitTitle>
                        </RecruitTitleBtn>
                        <RecruitAddress>{together.place}</RecruitAddress>
                        <EntryFee>참가비 {getComma(together.price)}원</EntryFee>
                        <Deadline>{togetherDate(together.limitDate)}</Deadline>
                      </RecruitTextWrapper>
                    </RecruitWrapper>
                  ))
                )}
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

const SelectedWrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px 20px;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const MapboxMarkWrapper = styled.View`
  border-radius: 50px;
  background-color: ${({color}: {color: string}) => color};
  width: 33px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const RecruitImageWrapper = styled.View`
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
  align-items: center;
  justify-content: center;
  background-color: ${({backgroundColor}: {backgroundColor: string}) =>
    backgroundColor ? backgroundColor : '#bcbcbc'};
  position: absolute;
  margin-top: 10px;
  padding: 5px 10px;
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

const RecruitTitleBtn = styled.View`
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
