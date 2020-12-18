import React, {useContext} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import CheckBox from '@react-native-community/checkbox';
import {IMapGroup} from '../../../module/type/map';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {MAPBOX_TOKEN} from '../RecordPresenter';
import RecordContext from '../../../module/context/RecordContext';
import {IRecordContext} from '../../../module/type/recordContext';
import {
  ACTIVE_BUTTON,
  INACTIVE_BUTTON,
  MAPBOX_STYLE,
} from '../../../module/common';

interface IProps {
  navigation: any;
  mapGroup: Array<IMapGroup>;
}

interface IStyledMapWrapper {
  isLastChild?: boolean;
  isActive?: boolean;
}

MapboxGL.setAccessToken(MAPBOX_TOKEN);

export default ({navigation, mapGroup, FreeMap, MembershipMap}: IProps) => {
  const {
    mapboxRecord: {map},
    setRecordMap,
  }: IRecordContext = useContext(RecordContext);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            {mapGroup.map(({id, name, maps}) => (
              <MapGroupWrapper key={id}>
                <MapStyleTitle>{name}</MapStyleTitle>
                <MapContainer>
                  {maps.map(({id, style, thumbnail}, idx) => (
                    <MapWrapper
                      key={id}
                      isLastChild={(idx + 1) % 3 !== 0}
                      isActive={map.id === id}>
                      <ActivityImage source={{uri: thumbnail}} />
                      <CheckBox
                        style={{
                          position: 'absolute',
                          right: 3,
                          top: 1,
                        }}
                        boxType={'circle'}
                        disabled={false}
                        value={map.id === id}
                        onValueChange={() => {
                          if (setRecordMap) {
                            setRecordMap({id, style});
                          }
                        }}
                        tintColors={{true: ACTIVE_BUTTON}}
                      />
                    </MapWrapper>
                  ))}
                </MapContainer>
              </MapGroupWrapper>
            ))}
            {/*<MapStyleTitle>무료</MapStyleTitle>*/}
            {/*<ActivityWrapper>*/}
            {/*  {FreeMap.map((item, idx) => (*/}
            {/*    <ActivityImageWrapper key={idx}>*/}
            {/*      <ActivityImage onPress={() => {}} source={item.image} />*/}
            {/*      <CheckBox*/}
            {/*        style={{*/}
            {/*          position: 'absolute',*/}
            {/*          right: 8,*/}
            {/*          top: 5,*/}
            {/*        }}*/}
            {/*        boxType={'circle'}*/}
            {/*        disabled={false}*/}
            {/*        value={false}*/}
            {/*        onValueChange={() => {}}*/}
            {/*      />*/}
            {/*    </ActivityImageWrapper>*/}
            {/*  ))}*/}
            {/*</ActivityWrapper>*/}

            {/*<MapStyleTitle>멤버 전용</MapStyleTitle>*/}
            {/*<ActivityWrapper>*/}
            {/*  {MembershipMap.map((item, idx) => (*/}
            {/*    <ActivityImageWrapper key={idx}>*/}
            {/*      <ActivityImage onPress={() => {}} source={item.image} />*/}
            {/*      <CheckBox*/}
            {/*        style={{*/}
            {/*          position: 'absolute',*/}
            {/*          right: 8,*/}
            {/*          top: 5,*/}
            {/*        }}*/}
            {/*        boxType={'circle'}*/}
            {/*        disabled={false}*/}
            {/*        value={false}*/}
            {/*        onValueChange={() => {}}*/}
            {/*      />*/}
            {/*    </ActivityImageWrapper>*/}
            {/*  ))}*/}
            {/*</ActivityWrapper>*/}
          </ContainerCard>
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

const MapStyleTitle = styled.Text`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 10px 0;
  font-size: 15px;
  color: #181818;
  font-weight: bold;
  text-align: left;
`;

const ActivityWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
`;

const MapGroupWrapper = styled.View`
  width: 100%;
`;

const MapContainer = styled.View`
  display: flex;
  flex-flow: row wrap;
  padding-top: 10px;
  width: 100%;
`;

const MapWrapper = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border-width: 1px;
  border-color: ${({isActive}: IStyledMapWrapper) =>
    isActive ? ACTIVE_BUTTON : INACTIVE_BUTTON};
  width: 32%;
  margin-bottom: 20px;
  margin-right: ${({isLastChild}: IStyledMapWrapper) =>
    isLastChild === true ? 5 : 0}px;
`;

const ActivityImageWrapper = styled.TouchableOpacity`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border-width: 1px;
  border-color: #c1c1c1;
  width: 32%;
  margin-bottom: 20px;
`;

const ActivityImage = styled.Image`
  width: 100%;
  height: 100px;
`;
