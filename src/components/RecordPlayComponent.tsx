import React, {useContext, useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import {BASE_URL, secondsToTimeFormat} from '../module/common';
import {IShowFeed} from '../module/type/feedContext';
import FeedContext from '../module/context/FeedContext';
import {webViewJavaScriptCode} from '../module/map/webViewJavaScript';
import WebView from 'react-native-webview';

interface IProps {
  navigation: any;
  route: {
    params: {
      feed: IShowFeed;
    };
  };
}

export default ({navigation}: IProps) => {
  const {show, changeTabBarInvisible}: any = useContext(FeedContext);
  const webViewRef = useRef<any>(null);

  useEffect(() => {
    changeTabBarInvisible();
  }, []);
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <MapPlayWrapper>
            <WebView
              ref={(ref) => (webViewRef.current = ref)}
              source={{
                uri: `${BASE_URL}/public/map/test.html`,
              }}
              injectedJavaScript={webViewJavaScriptCode({
                coordinates: show.coordinates,
                map: {id: show.mapId, style: show.mapStyle},
                music: {id: show.musicId, url: show.musicUrl},
              })}
            />
          </MapPlayWrapper>
          <Card>
            <RecordWrapper>
              <ActiveTextWrapper>
                <ActiveLeftImgWrapper color={show.activityColor}>
                  <ActiveImage source={{uri: `${BASE_URL}/${show.activityImage}`}} />
                </ActiveLeftImgWrapper>
                <ActiveBtnWrapper>
                  <ActiveNumber>{show.distance}</ActiveNumber>
                  <ActiveText>Kilometer</ActiveText>
                </ActiveBtnWrapper>
                <ActiveBtnWrapper>
                  <ActiveNumber>{secondsToTimeFormat(show.duration)}</ActiveNumber>
                  <ActiveText>Duration</ActiveText>
                </ActiveBtnWrapper>
                <ActiveBtnWrapper>
                  <ActiveNumber>{show.calorie}</ActiveNumber>
                  <ActiveText>Calorie</ActiveText>
                </ActiveBtnWrapper>
              </ActiveTextWrapper>
            </RecordWrapper>

            <SnsIconWrapper>
              <KakaoIconBtn onPress={() => {}}>
                <LogoImage source={require('../assets/logo_kakao.jpg')} />
                <KakaoIconText>카카오톡 공유하기</KakaoIconText>
              </KakaoIconBtn>
              <FaceBookIconBtn onPress={() => {}}>
                <LogoImage source={require('../assets/logo_facebook.png')} />
                <FaceBookIconText>페이스북 공유하기</FaceBookIconText>
              </FaceBookIconBtn>
              <InstagramIconBtn onPress={() => {}}>
                <LogoImage source={require('../assets/logo_instagram.png')} />
                <InstagramIconText>인스타그램 공유하기</InstagramIconText>
              </InstagramIconBtn>
            </SnsIconWrapper>
          </Card>
        </ScrollWrapper>
      </ScrollContainer>
    </Container>
  );
};

const MapPlayWrapper = styled.View`
  width: 100%;
  height: 200px;
`;

const ActiveText = styled.Text`
  font-size: 10px;
  color: #ababab;
  font-weight: bold;
  text-align: center;
`;

const ActiveNumber = styled.Text`
  font-size: 12px;
  color: #ababab;
  font-weight: bold;
  text-align: center;
`;

const RecordWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 20px;
  background-color: #151517;
`;

const ActiveLeftImgWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 50px;
  padding: 10px 5px;
  background-color: ${({color}: {color: string}) => (color ? color : '#007bf1')};
`;

const ActiveImage = styled.Image`
  width: 25px;
  height: 25px;
`;

const ActiveTextWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ActiveBtnWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
`;

const Container = styled.View`
  flex: 1;
`;

const ScrollContainer = styled.View`
  height: 100%;
  background-color: #212326;
`;

const ScrollWrapper = styled.ScrollView``;

const Card = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #212326;
`;

const SnsIconWrapper = styled.View`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

const LogoImage = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 5px;
`;

const KakaoIconBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-width: 1px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #151517;
`;

const KakaoIconText = styled.Text`
  color: #ebebeb;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  text-align: center;
`;

const FaceBookIconBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-width: 1px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #151517;
`;

const FaceBookIconText = styled.Text`
  color: #ebebeb;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  text-align: center;
`;

const InstagramIconBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-width: 1px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #151517;
`;

const InstagramIconText = styled.Text`
  color: #ebebeb;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  text-align: center;
`;
