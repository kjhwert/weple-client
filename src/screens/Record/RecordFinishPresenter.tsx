import React, {useContext} from 'react';
import styled from 'styled-components/native';
import WebView from 'react-native-webview';
import RecordContext from '../../module/context/RecordContext';
import RecordUnits from '../../components/RecordUnits';
import {showDateToAmPmHourMinute} from '../../module/common';
import {webViewJavaScriptCode} from '../../module/map/webViewJavaScript';

interface IProps {
  navigation: any;
  getAverageSpeed: (speed: Array<number>) => number;
}

export default ({navigation, getAverageSpeed}: IProps) => {
  const {
    recordSetting,
    mapboxRecord,
    record,
    webViewRef,
    createFeed,
  }: any = useContext(RecordContext);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <MapPlayWrapper>
              <WebView
                ref={(ref) => (webViewRef.current = ref)}
                source={{
                  uri: 'http://ttamna-api.hlabpartner.com/public/map/test.html',
                }}
                injectedJavaScript={webViewJavaScriptCode({
                  coordinates: mapboxRecord.coordinates,
                  map: mapboxRecord.map,
                  music: mapboxRecord.music,
                })}
              />
            </MapPlayWrapper>

            <SetUpWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('recordMapStyle');
                  }}>
                  <SetUpListText>지도 스타일 변경</SetUpListText>
                  <MoreImage source={require('../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('recordActiveType');
                  }}>
                  <SetUpListText>활동</SetUpListText>
                  <SetUpTypeWrapper>
                    <SetUpTypeText>{recordSetting.activity.name}</SetUpTypeText>
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
                    <SetUpTypeText>{mapboxRecord.music.title}</SetUpTypeText>
                    <MoreImage source={require('../../assets/set_more.png')} />
                  </SetUpTypeWrapper>
                </SetBtn>
              </SetBtnWrapper>
            </SetUpWrapper>

            <RecordUnits
              distance={mapboxRecord.distance}
              speed={getAverageSpeed(mapboxRecord.speed)}
              calorie={record.calorie}
              duration={record.duration}
            />

            <ActiveDetailWrapper>
              <ActiveVerticalLine></ActiveVerticalLine>
              <ActiveDetailTitleWrapper>
                <ActiveMarkWrapper>
                  <ActiveStartMark>
                    <StartImage
                      source={require('../../assets/start_icon.png')}
                    />
                  </ActiveStartMark>
                </ActiveMarkWrapper>
                <ActiveDetailTitle>
                  {recordSetting.startDate &&
                    showDateToAmPmHourMinute(recordSetting.startDate)}
                  에 출발
                </ActiveDetailTitle>
              </ActiveDetailTitleWrapper>

              {mapboxRecord.images.map((image: any, idx: number) => (
                <ActiveDetailWrapper key={idx}>
                  <ActiveDetailImageWrapper>
                    <ActiveDetailImage
                      source={{uri: image.uri}}
                      resizeMode="contain"
                      style={{aspectRatio: 1}}
                    />
                  </ActiveDetailImageWrapper>
                  <ActiveDetailTextWrapper>
                    <ActiveSmallMarkWrapper>
                      <ActiveSmallMark></ActiveSmallMark>
                      <ActiveSmallestMark></ActiveSmallestMark>
                    </ActiveSmallMarkWrapper>
                    <DetailTextWrapper>
                      <ActiveDetailTimeText>
                        {mapboxRecord.distance}km 이동 후{' '}
                        {image.timestamp &&
                          showDateToAmPmHourMinute(image.timestamp)}
                      </ActiveDetailTimeText>
                    </DetailTextWrapper>
                  </ActiveDetailTextWrapper>
                </ActiveDetailWrapper>
              ))}
              <ActiveDetailFinishTitleWrapper>
                <ActiveMarkFinishWrapper>
                  <ActiveFinishMark>
                    <FinishImage
                      source={require('../../assets/finish_icon.png')}
                    />
                  </ActiveFinishMark>
                </ActiveMarkFinishWrapper>
                <ActiveDetailFinishTitle>
                  {recordSetting.endDate &&
                    showDateToAmPmHourMinute(recordSetting.endDate)}
                  에 끝마쳤습니다.
                </ActiveDetailFinishTitle>
              </ActiveDetailFinishTitleWrapper>
            </ActiveDetailWrapper>
            <NextBtn onPress={() => createFeed(navigation)}>
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

const SetBtn = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SetUpTypeWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SetUpTypeText = styled.Text`
  font-size: 12px;
  margin-right: 10px;
  color: #b5b5b5;
`;

const SetUpListText = styled.Text`
  font-size: 13px;
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

const ActiveDetailImageWrapper = styled.View`
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

const AlertImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

const AlertImage = styled.Image`
  width: 70px;
  height: 70px;
`;

const AlertTitleText = styled.Text`
  font-size: 14px;
  color: #181818;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
`;

const AlertContentText = styled.Text`
  font-size: 12px;
  color: #878787;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
`;

const ConfirmButton = styled.TouchableOpacity`
  display: flex;
  width: 50%;
  padding: 10px;
  background-color: #007bf1;
`;

const ConfirmFullButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px;
  background-color: #007bf1;
  position: absolute;
  bottom: 0;
`;

const ConfirmButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const AlertBtnWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`;

const CancelButton = styled.TouchableOpacity`
  display: flex;
  width: 50%;
  padding: 10px;
  background-color: #efefef;
`;

const CancelButtonText = styled.Text`
  font-size: 14px;
  color: #4e4e4e;
  font-weight: bold;
  text-align: center;
`;
