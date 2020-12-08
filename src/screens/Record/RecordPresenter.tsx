import React, {useContext} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import MapboxGL from '@react-native-mapbox-gl/maps';
import RecordContext from '../../module/context/RecordContext';
import KeepAwake from 'react-native-keep-awake';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoia2pod2VydCIsImEiOiJja2g0M2s5Mm8wYXU4MnNvYWh0Nzc1ZXhyIn0.plvnGOmcjL1bMP2P7vuSTg',
);

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {
    recordSetting,
    record,
    initialRecordStart,
    changeStartStatus,
    finishRecording,
    onUpdateUserPosition,
  }: any = useContext(RecordContext);
  return (
    <Container>
      {recordSetting.awake && <KeepAwake />}
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <MapboxGL.MapView
              style={{width: '100%', height: 300}}
              styleURL={'mapbox://styles/kjhwert/ckh44m2dc04f419o8odhe7dz8'}
              localizeLabels={true}>
              <MapboxGL.Camera zoomLevel={15} followUserLocation={true} />
              <MapboxGL.UserLocation
                onUpdate={(location) => onUpdateUserPosition(location)}
              />
              <MapboxGL.ShapeSource
                id="line1"
                shape={{
                  type: 'FeatureCollection',
                  features: [
                    {
                      type: 'Feature',
                      properties: {},
                      geometry: {
                        type: 'LineString',
                        coordinates: record.coordinates,
                      },
                    },
                  ],
                }}>
                <MapboxGL.LineLayer
                  id="linelayer1"
                  style={{lineColor: 'red'}}
                />
              </MapboxGL.ShapeSource>
            </MapboxGL.MapView>

            <RecordWrapper>
              <RecordTextWrapper>
                <RecordCheckWrapper>
                  <RecordNumber>0.0</RecordNumber>
                  <RecordUnitText>Killometer</RecordUnitText>
                </RecordCheckWrapper>
                <RecordCheckWrapper>
                  <RecordNumber>{record.speed}</RecordNumber>
                  <RecordUnitText>Km/h</RecordUnitText>
                </RecordCheckWrapper>
                <RecordCheckWrapper>
                  <RecordNumber>{record.duration}</RecordNumber>
                  <RecordUnitText>Duration</RecordUnitText>
                </RecordCheckWrapper>
                <RecordCheckWrapper>
                  <RecordNumber>0.0</RecordNumber>
                  <RecordUnitText>Kcal</RecordUnitText>
                </RecordCheckWrapper>
              </RecordTextWrapper>
            </RecordWrapper>

            <IconWrapper>
              <IconImageWrapper>
                <IconBtn
                  onPress={() => {
                    navigation.navigate('recordSet');
                  }}>
                  <IconImage source={require('../../assets/camera.png')} />
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
                      <ResumeBtn
                        onPress={() => {
                          changeStartStatus();
                        }}>
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
                          initialRecordStart();
                        }}>
                        <StartBtnText>시작</StartBtnText>
                      </StartBtn>
                    )}
                    {recordSetting.isInit && recordSetting.isStart && (
                      <StopBtn
                        onPress={() => {
                          changeStartStatus();
                        }}>
                        <StopBtnText>{'중지'}</StopBtnText>
                      </StopBtn>
                    )}
                    {recordSetting.isInit && !recordSetting.isStart && (
                      <FinishBtn
                        onPress={() => {
                          finishRecording();
                          navigation.navigate('recordFinish');
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

const RecordWrapper = styled.View`
  display: flex;
  width: 90%;
  align-items: center;
  margin-top: 20px;
  padding: 10px 0;
  border-width: 1px;
  border-color: #eeeeee;
  box-shadow: 0px 3px 6px #e1e1e1;
`;

const RecordTextWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const RecordCheckWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
`;

const RecordNumber = styled.Text`
  font-size: 21px;
  color: #2f2f2f;
  font-weight: bold;
  text-align: center;
`;

const RecordUnitText = styled.Text`
  font-size: 12px;
  color: #ababab;
  font-weight: bold;
  text-align: center;
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
  width: 33px;
  height: 29px;
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
