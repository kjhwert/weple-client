import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import {BASE_URL, MAPBOX_DEFAULT_STYLE, MAPBOX_TOKEN, togetherDate} from '../../../module/common';
import TogetherContext from '../../../module/context/TogetherContext';
import {ITogethers} from '../../../module/type/together';
import Loading from '../../../components/Loading';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {Dimensions, Image} from 'react-native';
import {getComma} from '../../../components/CommonTime';

MapboxGL.setAccessToken(MAPBOX_TOKEN);

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {listIndex, searchIndex, mapIndex, listMoreIndex, searchLoading, searchPagination}: any = useContext(
    TogetherContext,
  );

  const [selected, setSelected] = useState<ITogethers | null>(null);
  const [isMapview, setIsMapview] = useState(false);

  const changeMapviewStatus = async () => {
    if (isMapview) {
      await listIndex();
    }
    if (!isMapview) {
      await mapIndex();
    }

    setIsMapview(!isMapview);
  };

  return (
    <Container>
      <ScrollContainer>
        <Wrapper>
          <ActiveSelectTitleWrapper>
            <CategoryTogetherBtn
              onPress={() => {
                navigation.navigate('togetherSearchCategories');
              }}>
              <CategoryTogetherImage source={require('../../../assets/icon_category.png')} />
              <CategoryTogetherText>카테고리</CategoryTogetherText>
            </CategoryTogetherBtn>
            <LocationBtn onPress={changeMapviewStatus}>
              <LocationImage
                source={
                  isMapview ? require('../../../assets/icon_list.png') : require('../../../assets/icon_location.png')
                }
              />
            </LocationBtn>
          </ActiveSelectTitleWrapper>
        </Wrapper>
        <ContainerCard>
          {searchLoading ? (
            <Loading />
          ) : isMapview ? (
            <>
              <MapboxGL.MapView style={{width: '100%', height: '100%'}} styleURL={MAPBOX_DEFAULT_STYLE}>
                <MapboxGL.Camera zoomLevel={12} centerCoordinate={[searchPagination.lon, searchPagination.lat]} />
                {searchIndex.map((together: ITogethers) => (
                  <MapboxGL.PointAnnotation
                    key={together.id}
                    id={`${together.id}`}
                    coordinate={[together.lat, together.lon]}
                    onSelected={() => {
                      setSelected(together);
                    }}>
                    <MapboxMarkWrapper color={together.activityColor}>
                      <Image source={{uri: `${BASE_URL}/${together.activityImage}`}} style={{width: 20, height: 20}} />
                    </MapboxMarkWrapper>
                  </MapboxGL.PointAnnotation>
                ))}
              </MapboxGL.MapView>
              {selected && (
                <SelectedWrapper
                  onPress={() => {
                    navigation.navigate('togetherDetail', {id: selected.id});
                  }}>
                  <RecruitImageWrapper>
                    <RecruitImage source={{uri: `${BASE_URL}/${selected.thumbnail}`}} />
                    <RecordWrapper backgroundColor={selected.activityColor}>
                      <RecordImage source={{uri: `${BASE_URL}/${selected.activityImage}`}} />
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
            <ScrollWrapper>
              {searchIndex.map(
                ({
                  id,
                  activityImage,
                  activityColor,
                  thumbnail,
                  distance,
                  title,
                  address,
                  price,
                  limitDate,
                }: ITogethers) => (
                  <RecruitWrapper
                    key={id}
                    onPress={() => {
                      navigation.navigate('togetherDetail', {id});
                    }}>
                    <RecruitImageWrapper>
                      <RecruitImage source={{uri: `${BASE_URL}/${thumbnail}`}} />
                      <RecordWrapper backgroundColor={activityColor}>
                        <RecordImage source={{uri: `${BASE_URL}/${activityImage}`}} />
                        <RecordText>{distance}KM</RecordText>
                      </RecordWrapper>
                    </RecruitImageWrapper>
                    <RecruitTextWrapper>
                      <RecruitTitle>{title}</RecruitTitle>
                      <RecruitAddress>{address}</RecruitAddress>
                      <EntryFee>참가비 {price}원</EntryFee>
                      <Deadline>{togetherDate(limitDate)}</Deadline>
                    </RecruitTextWrapper>
                  </RecruitWrapper>
                ),
              )}
            </ScrollWrapper>
          )}
        </ContainerCard>
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

const SelectedWrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  width: 100%;
  padding: 10px 20px;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const ScrollWrapper = styled.ScrollView``;

const MapboxMarkWrapper = styled.View`
  border-radius: 50px;
  background-color: ${({color}: {color: string}) => color};
  width: 33px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerCard = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 10px 20px;
  background-color: #f3f3f3;
`;

const ActiveSelectTitleWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CategoryTogetherBtn = styled.TouchableOpacity`
  width: 85px;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #e7e7e7;
  background-color: #ffffff;
  padding: 6px 0;
`;

const CategoryTogetherImage = styled.Image`
  width: 15px;
  height: 15px;
`;

const CategoryTogetherText = styled.Text`
  font-size: 12px;
  color: #666666;
  font-weight: bold;
  text-align: center;
  margin-left: 10px;
`;

const LocationBtn = styled.TouchableOpacity`
  width: 10%;
  flex-flow: row wrap;
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
  width: 50%;
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
  width: 22px;
  height: 13px;
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
