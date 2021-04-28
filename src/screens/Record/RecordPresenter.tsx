import React, {useContext} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import MapboxGL from '@react-native-mapbox-gl/maps';
import KeepAwake from 'react-native-keep-awake';
import RecordUnits from '../../components/RecordUnits';
import {MAPBOX_STYLE, MAPBOX_TOKEN} from '../../module/common';
import {View} from 'react-native';
import RecordContext2, {IRecordContext2} from '../../module/context/RecordContext2';

MapboxGL.setAccessToken(MAPBOX_TOKEN);

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {settings, records, duration, onInitRecord, onChangeRecord, onFinishRecord, onTakePicture} = useContext(
    RecordContext2,
  ) as IRecordContext2;

  const getLastCoordinates = () => {
    if (records.coordinates.length > 0) {
      return records.coordinates[records.coordinates.length - 1];
    }

    return [126.97842453212644, 37.566629386346264];
  };

  const renderAnnotations = () => {
    return (
      <MapboxGL.PointAnnotation key="pointAnnotation" id="pointAnnotation" coordinate={getLastCoordinates()}>
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: '#00cccc',
            borderRadius: 50,
            borderColor: '#fff',
            borderWidth: 3,
          }}
        />
      </MapboxGL.PointAnnotation>
    );
  };

  const renderCamera = () => {
    return (
      <MapboxGL.Camera
        zoomLevel={14}
        centerCoordinate={getLastCoordinates()}
        animationMode={'flyTo'}
        animationDuration={0}></MapboxGL.Camera>
    );
  };

  return (
    <Container>
      {settings.awake && <KeepAwake />}
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <MapboxGL.MapView style={{width: '100%', height: 300}} styleURL={MAPBOX_STYLE} localizeLabels={true}>
              {renderCamera()}
              {renderAnnotations()}
            </MapboxGL.MapView>

            <RecordUnits
              distance={records.distance}
              speed={records.speed.length > 0 ? records.speed[records.speed.length - 1] : 0}
              calorie={records.calorie}
              duration={duration}
            />
            <IconWrapper>
              <IconImageWrapper>
                <IconBtn onPress={onTakePicture}>
                  <IconImage source={require('../../assets/record_camera.png')} />
                </IconBtn>

                {settings.isInit && !settings.isStart && (
                  <LinearGradient
                    colors={['#79a6fa', '#3065f4', '#4e3adf']}
                    start={{x: 1, y: 0}}
                    end={{x: 0, y: 1}}
                    style={{
                      width: 70,
                      height: 70,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 50,
                      marginRight: 10,
                    }}>
                    <StartBtnWrapper>
                      <ResumeBtn onPress={onChangeRecord}>
                        <ResumeBtnText>재개</ResumeBtnText>
                      </ResumeBtn>
                    </StartBtnWrapper>
                  </LinearGradient>
                )}

                <LinearGradient
                  colors={['#79a6fa', '#3065f4', '#4e3adf']}
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 1}}
                  style={{
                    width: 70,
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}>
                  <StartBtnWrapper>
                    {!settings.isInit && !settings.isStart && (
                      <StartBtn onPress={onInitRecord}>
                        <StartBtnText>시작</StartBtnText>
                      </StartBtn>
                    )}
                    {settings.isInit && settings.isStart && (
                      <StopBtn onPress={onChangeRecord}>
                        <StopBtnText>{'중지'}</StopBtnText>
                      </StopBtn>
                    )}
                    {settings.isInit && !settings.isStart && (
                      <FinishBtn
                        onPress={() => {
                          onFinishRecord(navigation);
                        }}>
                        <FinishBtnText>완료</FinishBtnText>
                      </FinishBtn>
                    )}
                  </StartBtnWrapper>
                </LinearGradient>
              </IconImageWrapper>
            </IconWrapper>
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

const IconWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const IconImageWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  margin-top: 30px;
  width: 100%;
`;

const IconBtn = styled.TouchableOpacity`
  width: 20%;
  align-items: flex-start;
`;

const IconImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const StartBtnWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 40%;
`;

const StartBtn = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  justify-content: center;
`;

const StartBtnText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const StopBtn = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  justify-content: center;
`;

const StopBtnText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const FinishBtn = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  justify-content: center;
`;

const FinishBtnText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const ResumeBtn = styled.TouchableOpacity`
  width: 63px;
  height: 63px;
  background-color: #fff;
  border-radius: 50px;
  justify-content: center;
`;

const ResumeBtnText = styled.Text`
  font-size: 18px;
  color: #3065f4;
  font-weight: bold;
  text-align: center;
`;
