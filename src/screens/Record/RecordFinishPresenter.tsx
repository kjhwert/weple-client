import React, {useContext} from 'react';
import styled from 'styled-components/native';
import WebView from 'react-native-webview';
import RecordUnits from '../../components/RecordUnits';
import {BASE_URL, FONT_SIZE_2, MAPBOX_TOKEN, showDateToAmPmHourMinute} from '../../module/common';
import {webViewJavaScriptCode} from '../../module/map/webViewJavaScript';
import MapboxGL from '@react-native-mapbox-gl/maps';
import RecordContext2, {IRecordContext2} from '../../module/context/RecordContext2';
import {Image, Platform} from 'react-native';
import ViewShot from 'react-native-view-shot';

MapboxGL.setAccessToken(MAPBOX_TOKEN);

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {
    thumbnailRef,
    state: {duration, settings, records},
    webViewRef,
    onCreateRecord,
    onChangeImage,
    onChangeTitle,
  } = useContext(RecordContext2) as IRecordContext2;

  const getCenterCoordinates = () => {
    if (records.coordinates.length > 0) {
      return records.coordinates[Math.floor(records.coordinates.length / 2)];
    }

    return [126.97842453212644, 37.566629386346264];
  };

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <MapPlayWrapper>
              <WebView
                ref={(ref) => (webViewRef.current = ref)}
                source={{
                  uri: `${BASE_URL}/public/map/test.html`,
                }}
                injectedJavaScript={webViewJavaScriptCode({
                  coordinates: JSON.stringify(records.coordinates),
                  map: records.map,
                  music: records.music,
                  images: records.images,
                })}
              />
            </MapPlayWrapper>

            <SetUpWrapper>
              <SetBtnWrapperTitle>
                <SetUpListText>제목</SetUpListText>
                <TitleTextInput
                  placeholder="제목을 입력해주세요."
                  value={records.title}
                  onChangeText={onChangeTitle}
                  style={{textAlign: 'right'}}
                />
              </SetBtnWrapperTitle>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('recordMapStyle');
                  }}>
                  <SetUpListText>지도 스타일 변경</SetUpListText>
                  <SetUpTypeWrapper>
                    <SetUpTypeText>{records.map.name}</SetUpTypeText>
                    <MoreImage source={require('../../assets/set_more.png')} />
                  </SetUpTypeWrapper>
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('recordActiveType');
                  }}>
                  <SetUpListText>활동</SetUpListText>
                  <SetUpTypeWrapper>
                    <SetUpTypeText>{settings.activity.name}</SetUpTypeText>
                    <MoreImage source={require('../../assets/set_more.png')} />
                  </SetUpTypeWrapper>
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('recordMusic');
                  }}>
                  <SetUpListText>음악선택</SetUpListText>
                  <SetUpTypeWrapper>
                    <SetUpTypeText>{records.music.title}</SetUpTypeText>
                    <MoreImage source={require('../../assets/set_more.png')} />
                  </SetUpTypeWrapper>
                </SetBtn>
              </SetBtnWrapper>
            </SetUpWrapper>

            <RecordUnits
              distance={records.distance}
              speed={records.speed}
              calorie={records.calorie}
              duration={duration}
            />

            <ActiveDetailWrapper>
              <ActiveVerticalLine></ActiveVerticalLine>
              <ActiveDetailTitleWrapper>
                <ActiveMarkWrapper>
                  <ActiveStartMark>
                    <StartImage source={require('../../assets/start_icon.png')} />
                  </ActiveStartMark>
                </ActiveMarkWrapper>
                <ActiveDetailTitle>
                  {settings.startDate && showDateToAmPmHourMinute(settings.startDate)}에 출발
                </ActiveDetailTitle>
              </ActiveDetailTitleWrapper>
              <ViewShot ref={thumbnailRef} style={{width: '100%', height: 200}}>
                <Image
                  source={require('../../assets/ttamnaLogo.png')}
                  style={{
                    width: 30,
                    height: 30,
                    position: 'absolute',
                    top: 5,
                    left: 10,
                    zIndex: 100,
                    resizeMode: 'contain',
                  }}
                />
                <MapboxGL.MapView
                  style={{width: '100%', height: 200}}
                  styleURL={records.map.style}
                  localizeLabels={true}
                  zoomEnabled={false}
                  scrollEnabled={false}
                  pitchEnabled={false}
                  rotateEnabled={false}>
                  <MapboxGL.Camera
                    zoomLevel={13}
                    centerCoordinate={getCenterCoordinates()}
                    animationMode={'moveTo'}
                    animationDuration={0}
                  />
                  {records.coordinates.length > 0 && (
                    <MapboxGL.ShapeSource
                      id="shapeSource"
                      shape={{
                        type: 'Feature',
                        id: 'shapeSource',
                        properties: {},
                        geometry: {
                          type: 'LineString',
                          coordinates: records.coordinates,
                        },
                      }}>
                      <MapboxGL.LineLayer
                        id="lineLayer"
                        style={{
                          lineWidth: 5,
                          lineJoin: 'bevel',
                          lineColor: '#007bf1',
                        }}
                      />
                    </MapboxGL.ShapeSource>
                  )}
                </MapboxGL.MapView>
              </ViewShot>

              {records.images.map((image, idx: number) => (
                <ActiveDetailWrapper key={idx}>
                  <ActiveDetailImageWrapper
                    onPress={() => {
                      onChangeImage(idx);
                    }}>
                    <ActiveDetailImage source={{uri: image.uri}} resizeMode="contain" style={{aspectRatio: 1}} />
                    <Image
                      source={require('../../assets/edit_icon.png')}
                      style={{
                        width: 40,
                        height: 40,
                        position: 'absolute',
                        alignSelf: 'center',
                      }}
                    />
                  </ActiveDetailImageWrapper>
                  <ActiveDetailTextWrapper>
                    <ActiveSmallMarkWrapper>
                      <ActiveSmallMark></ActiveSmallMark>
                      <ActiveSmallestMark></ActiveSmallestMark>
                    </ActiveSmallMarkWrapper>
                    <DetailTextWrapper>
                      <ActiveDetailTimeText>
                        {records.distance}km 이동 후 {image.timestamp && showDateToAmPmHourMinute(image.timestamp)}
                      </ActiveDetailTimeText>
                    </DetailTextWrapper>
                  </ActiveDetailTextWrapper>
                </ActiveDetailWrapper>
              ))}
              <ActiveDetailFinishTitleWrapper>
                <ActiveMarkFinishWrapper>
                  <ActiveFinishMark>
                    <FinishImage source={require('../../assets/finish_icon.png')} />
                  </ActiveFinishMark>
                </ActiveMarkFinishWrapper>
                <ActiveDetailFinishTitle>
                  {settings.endDate && showDateToAmPmHourMinute(settings.endDate)}에 끝마쳤습니다.
                </ActiveDetailFinishTitle>
              </ActiveDetailFinishTitleWrapper>
            </ActiveDetailWrapper>
            <NextBtn onPress={() => onCreateRecord(navigation)}>
              <NextText>게시하기</NextText>
            </NextBtn>
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

const MapPlayWrapper = styled.View`
  width: 100%;
  height: 200px;
`;

const SetUpWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  width: 100%;
`;

const SetBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 20px 30px;
  border-bottom-width: 1px;
  border-color: #eeeeee;
`;

const SetBtnWrapperTitle = styled.View`
  display: flex;
  width: 100%;
  padding: ${Platform.OS === 'android' ? '5px' : '20px'} 30px;
  border-bottom-width: 1px;
  border-color: #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SetBtn = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SetBtnView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: blue;
`;

const SetUpTypeWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleTextInput = styled.TextInput`
  font-size: ${FONT_SIZE_2}px;
`;

const SetUpTypeText = styled.Text`
  font-size: ${FONT_SIZE_2}px;
  margin-right: 10px;
  color: #b5b5b5;
`;

const SetUpListText = styled.Text`
  font-size: ${FONT_SIZE_2}px;
  text-align: left;
  color: #333333;
`;

const MoreImage = styled.Image`
  width: 8px;
  height: 12px;
`;

const ActiveDetailWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-top: 10px;
`;

const ActiveVerticalLine = styled.View`
  width: 8%;
  height: 100%;
  border-right-width: 3px;
  border-color: #3065f4;
  position: absolute;
`;

const ActiveMarkWrapper = styled.View`
  width: 15%;
  align-items: center;
`;

const ActiveStartMark = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #3065f4;
  align-items: center;
  justify-content: center;
`;

const StartImage = styled.Image`
  width: 11px;
  height: 16px;
  position: absolute;
`;

const ActiveMarkFinishWrapper = styled.View`
  width: 15%;
  align-items: center;
`;

const ActiveFinishMark = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #3065f4;
  align-items: center;
  justify-content: center;
`;

const FinishImage = styled.Image`
  width: 14px;
  height: 16px;
  position: absolute;
`;

const ActiveSmallMarkWrapper = styled.View`
  width: 15%;
  align-items: center;
  margin-top: 20px;
`;

const ActiveSmallMark = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 50px;
  background-color: #3065f4;
`;

const ActiveSmallestMark = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: #fff;
  position: absolute;
  top: 3px;
`;

const ActiveDetailTitleWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
`;

const ActiveDetailTitle = styled.Text`
  width: 80%;
  font-size: 15px;
  font-weight: bold;
  color: #1c1c1c;
`;

const ActiveDetailTextWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-bottom: 30px;
`;

const DetailTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  width: 80%;
`;

const ActiveDetailTimeText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #494848;
  margin-top: 20px;
`;

const ActiveDetailImageWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ActiveDetailImage = styled.Image`
  width: 100%;
`;

const ActiveDetailFinishTitleWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
`;

const ActiveDetailFinishTitle = styled.Text`
  width: 80%;
  font-size: 15px;
  font-weight: bold;
  color: #1c1c1c;
`;

const NextBtn = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  background-color: #007bf1;
  margin-top: 50px;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
