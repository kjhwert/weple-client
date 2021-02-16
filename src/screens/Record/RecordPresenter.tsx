import React, {useContext} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import MapboxGL from '@react-native-mapbox-gl/maps';
import RecordContext from '../../module/context/RecordContext';
import KeepAwake from 'react-native-keep-awake';
import RecordUnits from '../../components/RecordUnits';
import {MAPBOX_STYLE, MAPBOX_TOKEN} from '../../module/common';

MapboxGL.setAccessToken(MAPBOX_TOKEN);

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {
    recordSetting,
    record,
    mapboxRecord,
    initializeRecordStart,
    onStartRecord,
    onPauseRecord,
    showCamera,
    finishRecording,
  }: any = useContext(RecordContext);

  return (
    <Container>
      {recordSetting.awake && <KeepAwake />}
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <MapboxGL.MapView style={{width: '100%', height: 300}} styleURL={MAPBOX_STYLE} localizeLabels={true}>
              {mapboxRecord.coordinates.length > 0 && (
                <MapboxGL.Camera
                  zoomLevel={15}
                  centerCoordinate={mapboxRecord.coordinates[mapboxRecord.coordinates.length - 1]}
                />
              )}
            </MapboxGL.MapView>

            <RecordUnits
              distance={mapboxRecord.distance}
              speed={mapboxRecord.speed.length > 0 ? mapboxRecord.speed[mapboxRecord.speed.length - 1] : 0}
              calorie={record.calorie}
              duration={record.duration}
            />
            <IconWrapper>
              <IconImageWrapper>
                <IconBtn
                  onPress={() => {
                    showCamera();
                  }}>
                  <IconImage source={require('../../assets/record_camera.png')} />
                </IconBtn>

                {recordSetting.isInit && !recordSetting.isStart && (
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
                      <ResumeBtn onPress={onStartRecord}>
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
                    {!recordSetting.isInit && !recordSetting.isStart && (
                      <StartBtn
                        onPress={() => {
                          initializeRecordStart();
                        }}>
                        <StartBtnText>시작</StartBtnText>
                      </StartBtn>
                    )}
                    {recordSetting.isInit && recordSetting.isStart && (
                      <StopBtn onPress={onPauseRecord}>
                        <StopBtnText>{'중지'}</StopBtnText>
                      </StopBtn>
                    )}
                    {recordSetting.isInit && !recordSetting.isStart && (
                      <FinishBtn
                        onPress={() => {
                          finishRecording && finishRecording(navigation);
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

const AlertBtnWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
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

const ConfirmButton = styled.TouchableOpacity`
  display: flex;
  width: 50%;
  padding: 10px;
  background-color: #007bf1;
`;

const ConfirmButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
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
