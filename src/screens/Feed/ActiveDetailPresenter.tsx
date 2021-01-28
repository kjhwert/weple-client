import React, {useContext, useRef} from 'react';
import styled from 'styled-components/native';
import {IShowFeed} from '../../module/type/feedContext';
import {BASE_URL, secondsToTimeFormat, showDateToAmPmHourMinute, timeForToday} from '../../module/common';
import UserContext from '../../module/context/UserContext';
import {webViewJavaScriptCode} from '../../module/map/webViewJavaScript';
import WebView from 'react-native-webview';

interface IProps {
  navigation: any;
  feed: IShowFeed;
}

export default ({navigation, feed}: IProps) => {
  const {loginUser}: any = useContext(UserContext);
  const webViewRef = useRef<any>(null);

  const isLoginUserFeed = (id: number) => {
    return loginUser.id === id;
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
                  coordinates: feed.coordinates,
                  map: {id: feed.mapId, style: feed.mapStyle},
                  music: {id: feed.musicId, url: feed.musicUrl},
                })}
              />
            </MapPlayWrapper>

            <ProfileTopWrapper>
              <ProfileWrapper>
                <ProfileInfoWrapper>
                  <ProfileImage
                    source={{uri: `${BASE_URL}/${feed.userImage ? feed.userImage : 'public/user/no_profile.png'}`}}
                  />
                  <ProfileTextWrapper>
                    <ProfileNameBtn onPress={() => {}}>
                      <ProfileName>{feed.userNickName}</ProfileName>
                    </ProfileNameBtn>
                    <PostTime>{timeForToday(feed.createdAt)}</PostTime>
                  </ProfileTextWrapper>
                </ProfileInfoWrapper>
                {!isLoginUserFeed(feed.userId) && (
                  <FollowBtn onPress={() => {}}>
                    <FollowBtnText>{feed.isUserFollowed ? '팔로우' : '팔로잉'}</FollowBtnText>
                  </FollowBtn>
                )}
              </ProfileWrapper>
              <RecordWrapper>
                <ActiveTextWrapper>
                  <ActiveLeftImgWrapper color={feed.activityColor}>
                    <ActiveImage source={{uri: `${BASE_URL}/${feed.activityImage}`}} />
                  </ActiveLeftImgWrapper>
                  <ActiveBtnWrapper>
                    <ActiveBtn>
                      <KmIconImg source={require('../../assets/icon_ruler.png')} />
                    </ActiveBtn>
                    <ActiveNumber>{feed.distance}</ActiveNumber>
                    <ActiveText>Kilometer</ActiveText>
                  </ActiveBtnWrapper>
                  <ActiveBtnWrapper>
                    <ActiveBtn>
                      <ClockIconImg source={require('../../assets/icon_clock.png')} />
                    </ActiveBtn>
                    <FollowerNumber>{secondsToTimeFormat(feed.duration)}</FollowerNumber>
                    <ActiveText>Duration</ActiveText>
                  </ActiveBtnWrapper>
                  <ActiveBtnWrapper>
                    <ActiveBtn>
                      <HeartbeatIconImg source={require('../../assets/icon_heartbeat.png')} />
                    </ActiveBtn>
                    <FollowingNumber>{feed.calorie}</FollowingNumber>
                    <ActiveText>Calorie</ActiveText>
                  </ActiveBtnWrapper>
                </ActiveTextWrapper>
              </RecordWrapper>
              <IconWrapper>
                <IconBtnText>
                  <IconBtn>
                    <IconImage source={require('../../assets/icon_heart.png')} />
                  </IconBtn>
                  <IconBtn
                    onPress={() => {
                      navigation.navigate('friendLike', {id: feed.id});
                    }}>
                    <IconText>좋아요</IconText>
                    <IconTextNumber>{`(${feed.likeCount})`}</IconTextNumber>
                  </IconBtn>
                </IconBtnText>
                <IconBtnText>
                  <IconBtn>
                    <IconImage source={require('../../assets/icon_comment.png')} />
                  </IconBtn>
                  <IconBtn
                    onPress={() => {
                      navigation.navigate('friendComment', {id: feed.id});
                    }}>
                    <IconText>댓글</IconText>
                    <IconTextNumber>{`(${feed.commentCount})`}</IconTextNumber>
                  </IconBtn>
                </IconBtnText>
                <ShareIconBtnText>
                  <IconBtn>
                    <IconImage source={require('../../assets/icon_share_2.png')} />
                  </IconBtn>
                  <IconBtn
                    onPress={() => {
                      navigation.navigate('friendShare');
                    }}>
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
                    <StartImage source={require('../../assets/start_icon.png')} />
                  </ActiveStartMark>
                </ActiveMarkWrapper>
                <ActiveDetailTitle>{showDateToAmPmHourMinute(new Date(feed.startDate))} 에 출발</ActiveDetailTitle>
              </ActiveDetailTitleWrapper>

              <ActiveDetailImageWrapper>
                <ActiveDetailMapImage source={{uri: `${BASE_URL}/${feed.thumbnail}`}} />
              </ActiveDetailImageWrapper>
              <ActiveDetailTextWrapper>
                <ActiveSmallMarkWrapper>
                  <ActiveSmallMark></ActiveSmallMark>
                  <ActiveSmallestMark></ActiveSmallestMark>
                </ActiveSmallMarkWrapper>
                <DetailTextWrapper>
                  <ActiveDetailTimeText>{`${feed.distance}km 이동 후 ${showDateToAmPmHourMinute(
                    new Date(feed.endDate),
                  )}`}</ActiveDetailTimeText>
                </DetailTextWrapper>
              </ActiveDetailTextWrapper>

              {feed.images.map((image) => (
                <FeedImageWrapper key={image.id}>
                  <ActiveDetailImageWrapper>
                    <ActiveDetailImage source={{uri: `${BASE_URL}/${image.img}`}} />
                  </ActiveDetailImageWrapper>
                  <ActiveDetailTextWrapper>
                    <ActiveSmallMarkWrapper>
                      <ActiveSmallMark></ActiveSmallMark>
                      <ActiveSmallestMark></ActiveSmallestMark>
                    </ActiveSmallMarkWrapper>
                    <DetailTextWrapper>
                      <ActiveDetailTimeText>{image.distance}km 이동 후 1232에 촬영</ActiveDetailTimeText>
                    </DetailTextWrapper>
                  </ActiveDetailTextWrapper>
                </FeedImageWrapper>
              ))}

              <ActiveDetailFinishTitleWrapper>
                <ActiveMarkFinishWrapper>
                  <ActiveFinishMark>
                    <FinishImage source={require('../../assets/finish_icon.png')} />
                  </ActiveFinishMark>
                </ActiveMarkFinishWrapper>
                <ActiveDetailFinishTitle>
                  {showDateToAmPmHourMinute(new Date(feed.endDate))} 에 끝마쳤습니다.
                </ActiveDetailFinishTitle>
              </ActiveDetailFinishTitleWrapper>
            </ActiveDetailWrapper>

            <RecordLastWrapper>
              <ActiveTextWrapper>
                <ActiveLastImgWrapper color={feed.activityColor}>
                  <ActiveLastImage source={{uri: `${BASE_URL}/${feed.activityImage}`}} />
                </ActiveLastImgWrapper>
                <ActiveLastWrapper>
                  <ActiveLastNumber>{feed.distance}</ActiveLastNumber>
                  <ActiveLastText>Kilometer</ActiveLastText>
                </ActiveLastWrapper>

                <ActiveLastWrapper>
                  <ActiveLastNumber>{secondsToTimeFormat(feed.duration)}</ActiveLastNumber>
                  <ActiveLastText>Duration</ActiveLastText>
                </ActiveLastWrapper>
                <ActiveLastWrapper>
                  <ActiveLastNumber>{feed.calorie}</ActiveLastNumber>
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

const FeedImageWrapper = styled.View`
  width: 100%;
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
  justify-content: space-between;
  width: 100%;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const ProfileTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 15px;
`;

const ProfileNameBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
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
  border-radius: 5px;
  background-color: #007bf1;
`;

const ProfileInfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 60%;
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
  border-color: #ececec;
`;

const ActiveLeftImgWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 80px;
  padding: 10px 5px;
  background-color: ${({color}: {color: string}) => (color ? color : '#007bf1')};
`;

const ActiveImage = styled.Image`
  width: 40px;
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

const ActiveBtn = styled.View`
  width: 100%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const KmIconImg = styled.Image`
  width: 45px;
  height: 20px;
`;

const ClockIconImg = styled.Image`
  width: 21px;
  height: 21px;
`;

const HeartbeatIconImg = styled.Image`
  width: 24px;
  height: 24px;
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
  height: 16px;
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
  height: 160px;
`;

const ActiveDetailImage = styled.Image`
  width: 100%;
  height: 200px;
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
  margin: 30px 0;
  border-width: 1px;
  border-color: #ececec;
`;

const ActiveLastImgWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18%;
  height: 70px;
  padding: 5px;
  background-color: ${({color}: {color: string}) => (color ? color : '#007bf1')};
`;

const ActiveLastImage = styled.Image`
  width: 40px;
  height: 25px;
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
