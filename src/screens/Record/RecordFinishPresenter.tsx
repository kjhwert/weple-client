import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <MapPlayWrapper onPress={() => {}}>
              <MapPlayImage source={require('../../assets/map_1.png')} />
              <PlayBtn>
                <PlayImage source={require('../../assets/play_icon.png')} />
              </PlayBtn>
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
                  <MoreImage source={require('../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('recordMusic');
                  }}>
                  <SetUpListText>음악선택</SetUpListText>
                  <MoreImage source={require('../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
            </SetUpWrapper>

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
                <ActiveDetailTitle>오후 15:35에 출발</ActiveDetailTitle>
              </ActiveDetailTitleWrapper>

              <ActiveDetailImageWrapper>
                <ActiveDetailMapImage
                  source={require('../../assets/map_2.png')}
                />
              </ActiveDetailImageWrapper>
              <ActiveDetailTextWrapper>
                <ActiveSmallMarkWrapper>
                  <ActiveSmallMark></ActiveSmallMark>
                </ActiveSmallMarkWrapper>
                <DetailTextWrapper>
                  <ActiveDetailText>"965m"</ActiveDetailText>
                  {/* <ActiveDetailTimeLine></ActiveDetailTimeLine> */}
                  <ActiveDetailTimeText>
                    2.5km 이동 후 오후 16:05
                  </ActiveDetailTimeText>
                </DetailTextWrapper>
              </ActiveDetailTextWrapper>

              <ActiveDetailImageWrapper>
                <ActiveDetailImage
                  source={require('../../assets/photo_3.jpeg')}
                />
                <ImgChangeBtn>
                  <ChangeImage source={require('../../assets/edit_icon.png')} />
                  <ChangeImageText>이미지 변경</ChangeImageText>
                </ImgChangeBtn>
              </ActiveDetailImageWrapper>
              <ActiveDetailTextWrapper>
                <ActiveSmallMarkWrapper>
                  <ActiveSmallMark></ActiveSmallMark>
                </ActiveSmallMarkWrapper>
                <DetailTextWrapper>
                  {/* <ActiveDetailTimeLine></ActiveDetailTimeLine> */}
                  <ActiveDetailTimeText>
                    12.5km 이동 후 오후 16:35에 촬영
                  </ActiveDetailTimeText>
                </DetailTextWrapper>
              </ActiveDetailTextWrapper>

              <ActiveDetailFinishTitleWrapper>
                <ActiveMarkFinishWrapper>
                  <ActiveFinishMark>
                    <FinishImage
                      source={require('../../assets/finish_icon.png')}
                    />
                  </ActiveFinishMark>
                </ActiveMarkFinishWrapper>
                <ActiveDetailFinishTitle>
                  오후 17:10에 끝맞쳤습니다.
                </ActiveDetailFinishTitle>
              </ActiveDetailFinishTitleWrapper>
            </ActiveDetailWrapper>
            <NextBtn
              onPress={() => {
                navigation.navigate('recordMain');
              }}>
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
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const MapPlayImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const PlayBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  position: absolute;
`;

const PlayImage = styled.Image`
  width: 35px;
  height: 35px;
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
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

const SetUpListText = styled.Text`
  font-size: 13px;
  text-align: left;
  color: #333333;
  width: 85%;
`;

const MoreImage = styled.Image`
  width: 15px;
  height: 12px;
`;

const RecordWrapper = styled.View`
  display: flex;
  width: 90%;
  align-items: center;
  margin: 30px 0;
  padding: 10px 0;
  border-width: 1px;
  border-color: #e1e1e1;
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

const ActiveDetailWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
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
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: #3065f4;
`;

const ActiveDetailTitleWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const ActiveDetailTitle = styled.Text`
  width: 80%;
  font-size: 15px;
  font-weight: bold;
  color: #1c1c1c;
  padding: 10px 0;
  margin-bottom: 20px;
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

const ActiveDetailText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #353434;
  margin-top: 10px;
`;

const ActiveDetailTimeText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #494848;
  margin-top: 10px;
`;

const ActiveDetailImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ActiveDetailMapImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const ActiveDetailImage = styled.Image`
  width: 100%;
  height: 250px;
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

const ImgChangeBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: absolute;
`;

const ChangeImage = styled.Image`
  width: 45px;
  height: 45px;
`;

const ChangeImageText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
`;

const NextBtn = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  background-color: #b2b2b2;
  margin-top: 50px;
`;

const NextText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
