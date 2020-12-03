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
            <MapPlayWrapper>
              <MapPlayImage source={require('../../assets/map_1.png')} />
              <PlayBtn onPress={() => {}}>
                <PlayImage source={require('../../assets/play_icon.png')} />
              </PlayBtn>
            </MapPlayWrapper>

            <ProfileTopWrapper>
              <ProfileWrapper>
                <ProfileImage source={require('../../assets/profile_1.png')} />
                <ProfileTextWrapper>
                  <ProfileNameBtn onPress={() => {}}>
                    <ProfileName>GilDong Hong</ProfileName>
                  </ProfileNameBtn>
                  <PostTime>10분 전</PostTime>
                </ProfileTextWrapper>
                <FollowBtn onPress={() => {}}>
                  <FollowBtnText>팔로우</FollowBtnText>
                </FollowBtn>
              </ProfileWrapper>

              <RecordWrapper>
                <ActiveTextWrapper>
                  <ActiveLeftImgWrapper>
                    <ActiveImage source={require('../../assets/cycle.png')} />
                  </ActiveLeftImgWrapper>
                  <ActiveBtnWrapper>
                    <ActiveBtn>
                      <KmIconImg
                        source={require('../../assets/ruler_icon.png')}
                      />
                    </ActiveBtn>
                    <ActiveNumber>5,650</ActiveNumber>
                    <ActiveText>Killometer</ActiveText>
                  </ActiveBtnWrapper>

                  <ActiveBtnWrapper>
                    <ActiveBtn>
                      <ClockIconImg
                        source={require('../../assets/clock_icon.png')}
                      />
                    </ActiveBtn>
                    <FollowerNumber>2:35:08</FollowerNumber>
                    <ActiveText>Duration</ActiveText>
                  </ActiveBtnWrapper>

                  <ActiveBtnWrapper>
                    <ActiveBtn>
                      <HeartbeatIconImg
                        source={require('../../assets/heartbeat_icon.png')}
                      />
                    </ActiveBtn>
                    <FollowingNumber>420</FollowingNumber>
                    <ActiveText>Calorie</ActiveText>
                  </ActiveBtnWrapper>
                </ActiveTextWrapper>
              </RecordWrapper>
              <IconWrapper>
                <IconBtnText>
                  <IconBtn>
                    <IconImage
                      source={require('../../assets/heart_icon.png')}
                    />
                  </IconBtn>
                  <IconBtn>
                    <IconText>좋아요</IconText>
                    <IconTextNumber>(56)</IconTextNumber>
                  </IconBtn>
                </IconBtnText>
                <IconBtnText>
                  <IconBtn>
                    <IconImage
                      source={require('../../assets/comment_icon.png')}
                    />
                  </IconBtn>
                  <IconBtn>
                    <IconText>댓글</IconText>
                    <IconTextNumber>(30)</IconTextNumber>
                  </IconBtn>
                </IconBtnText>
                <ShareIconBtnText>
                  <IconBtn>
                    <IconImage
                      source={require('../../assets/share_icon_2.png')}
                    />
                  </IconBtn>
                  <IconBtn>
                    <IconText>공유</IconText>
                  </IconBtn>
                </ShareIconBtnText>
              </IconWrapper>
            </ProfileTopWrapper>

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

                  <ActiveDetailTimeText>
                    2.5km 이동 후 오후 16:05
                  </ActiveDetailTimeText>
                </DetailTextWrapper>
              </ActiveDetailTextWrapper>

              <ActiveDetailImageWrapper>
                <ActiveDetailImage
                  source={require('../../assets/photo_3.jpeg')}
                />
              </ActiveDetailImageWrapper>
              <ActiveDetailTextWrapper>
                <ActiveSmallMarkWrapper>
                  <ActiveSmallMark></ActiveSmallMark>
                </ActiveSmallMarkWrapper>
                <DetailTextWrapper>
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

            <RecordLastWrapper>
              <ActiveTextWrapper>
                <ActiveLastImgWrapper>
                  <ActiveLastImage source={require('../../assets/cycle.png')} />
                </ActiveLastImgWrapper>
                <ActiveLastWrapper>
                  <ActiveLastNumber>5,650</ActiveLastNumber>
                  <ActiveLastText>Killometer</ActiveLastText>
                </ActiveLastWrapper>

                <ActiveLastWrapper>
                  <ActiveLastNumber>2:35:08</ActiveLastNumber>
                  <ActiveLastText>Duration</ActiveLastText>
                </ActiveLastWrapper>
                <ActiveLastWrapper>
                  <ActiveLastNumber>420</ActiveLastNumber>
                  <ActiveLastText>Calorie</ActiveLastText>
                </ActiveLastWrapper>
              </ActiveTextWrapper>
            </RecordLastWrapper>
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
  width: 45px;
  height: 45px;
`;

const ProfileTopWrapper = styled.View`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  margin-top: 20px;
  margin-bottom: 40px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #e1e1e1;
`;

const ProfileWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 15px;
  background-color: #007bf1;
`;

const ProfileTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
`;

const ProfileNameBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
  align-items: center;
  justify-content: flex-start;
`;

const ProfileName = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #303030;
`;

const PostTime = styled.Text`
  font-size: 11px;
  color: #5f5e5e;
  padding-bottom: 5px;
`;

const FollowBtn = styled.TouchableOpacity`
  width: 22%;
  padding: 7px;
  align-items: center;
  justify-content: flex-end;
  border-radius: 5px;
  background-color: #007bf1;
`;

const FollowBtnText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

const RecordWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  border-width: 1px;
  border-color: #e1e1e1;
`;

const ActiveLeftImgWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 80px;
  padding: 10px 5px;
  background-color: #007bf1;
`;

const ActiveImage = styled.Image`
  width: 50px;
  height: 30px;
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

const ActiveBtn = styled.View`
  width: 100%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const KmIconImg = styled.Image`
  width: 45px;
  height: 15px;
`;

const ClockIconImg = styled.Image`
  width: 20px;
  height: 20px;
`;

const HeartbeatIconImg = styled.Image`
  width: 25px;
  height: 20px;
`;

const ActiveNumber = styled.Text`
  font-size: 12px;
  color: #007bf1;
  font-weight: bold;
  text-align: center;
  padding: 5px 0;
`;

const FollowerNumber = styled.Text`
  font-size: 12px;
  color: #00bbc7;
  font-weight: bold;
  text-align: center;
  padding: 5px 0;
`;

const FollowingNumber = styled.Text`
  font-size: 12px;
  color: #8784ff;
  font-weight: bold;
  text-align: center;
  padding: 5px 0;
`;

const ActiveText = styled.Text`
  font-size: 10px;
  color: #ababab;
  font-weight: bold;
  text-align: center;
`;

const IconWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const IconBtnText = styled.View`
  width: 36%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const IconBtn = styled.TouchableOpacity`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const IconImage = styled.Image`
  width: 16px;
  height: 14px;
  margin-right: 8px;
`;

const IconText = styled.Text`
  font-size: 12px;
  color: #474747;
  font-weight: bold;
  text-align: center;
  margin-right: 3px;
`;

const ShareIconBtnText = styled.View`
  width: 25%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const IconTextNumber = styled.Text`
  font-size: 12px;
  color: #007bf1;
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
  width: 16px;
  height: 16px;
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

const RecordLastWrapper = styled.View`
  display: flex;
  width: 90%;
  align-items: center;
  margin: 40px 0;
  border-width: 1px;
  border-color: #e1e1e1;
`;

const ActiveLastImgWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 80px;
  padding: 10px 5px;
  background-color: #007bf1;
`;

const ActiveLastImage = styled.Image`
  width: 50px;
  height: 30px;
`;

const ActiveLastWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
`;

const ActiveLastNumber = styled.Text`
  font-size: 14px;
  color: #2f2f2f;
  font-weight: bold;
  text-align: center;
`;

const ActiveLastText = styled.Text`
  font-size: 10px;
  color: #ababab;
  font-weight: bold;
  text-align: center;
  padding: 5px 0;
`;
