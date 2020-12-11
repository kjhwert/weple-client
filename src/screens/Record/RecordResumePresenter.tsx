import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export default ({navigation}) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <MapPlayWrapper onPress={() => {}}>
              <MapPlayImage source={require('../../assets/map_2.png')} />
            </MapPlayWrapper>

            <RecordWrapper>
              <RecordTextWrapper>
                <RecordCheckWrapper>
                  <RecordNumber>0.0</RecordNumber>
                  <RecordUnitText>Killometer</RecordUnitText>
                </RecordCheckWrapper>
                <RecordCheckWrapper>
                  <RecordNumber>0</RecordNumber>
                  <RecordUnitText>Km/h</RecordUnitText>
                </RecordCheckWrapper>
                <RecordCheckWrapper>
                  <RecordNumber>0:00</RecordNumber>
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
                <IconBtn>
                  <IconImage
                    source={require('../../assets/record_camera.png')}
                  />
                </IconBtn>

                <LinearGradient
                  colors={['#61d7ff', '#00bdfd', '#007bf1']}
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
                  <ResumeBtnWrapper>
                    <ResumeBtn
                      onPress={() => {
                        navigation.navigate('recordMain');
                      }}>
                      <ResumeBtnText>재개</ResumeBtnText>
                    </ResumeBtn>
                  </ResumeBtnWrapper>
                </LinearGradient>

                <LinearGradient
                  colors={['#61d7ff', '#00bdfd', '#007bf1']}
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 1}}
                  style={{
                    width: 70,
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}>
                  <FinishBtnWrapper>
                    <FinishBtn
                      onPress={() => {
                        navigation.navigate('recordFinish');
                      }}>
                      <FinishBtnText>완료</FinishBtnText>
                    </FinishBtn>
                  </FinishBtnWrapper>
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

const MapPlayWrapper = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const MapPlayImage = styled.Image`
  width: 100%;
  height: 300px;
`;

const RecordWrapper = styled.View`
  display: flex;
  width: 90%;
  align-items: center;
  margin-top: 20px;
  padding: 10px 0;
  border-width: 1px;
  border-color: #eeeeee;
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
  width: 15%;
  align-items: flex-start;
`;

const IconImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const ResumeBtnWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 23%;
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
  color: #007bf1;
  font-weight: bold;
  text-align: center;
`;

const FinishBtnWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 23%;
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
