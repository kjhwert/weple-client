import React from 'react';
import styled from 'styled-components/native';
import Share from 'react-native-share';
import {ITogether} from '../../../module/type/together';

interface IProps {
  navigation: any;
  route: {
    params: {
      together: ITogether;
    };
  };
}

export default ({navigation, route}: IProps) => {
  const {id, thumbnail, title} = route.params.together;
  const share = async () => {
    try {
      await Share.open({url: `http://app.goweple.com?id=${id}&share=together&thumbnail=${thumbnail}&title=${title}`});
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <PostImageWrapper>
              <ShareInfoTitle>공유하기</ShareInfoTitle>
              <ShareInfoText>위플의 게시물을 다른 어플로 공유해주세요.</ShareInfoText>
              <PostImage source={require('../../../assets/photo_1.jpeg')} />
            </PostImageWrapper>

            <SnsIconWrapper>
              <KakaoIconBtn onPress={share}>
                <LogoImage source={require('../../../assets/logo_kakao.jpg')} />
                <KakaoIconText>카카오톡 공유하기</KakaoIconText>
              </KakaoIconBtn>
              <FaceBookIconBtn onPress={share}>
                <LogoImage source={require('../../../assets/logo_facebook.png')} />
                <FaceBookIconText>페이스북 공유하기</FaceBookIconText>
              </FaceBookIconBtn>
              <InstagramIconBtn onPress={share}>
                <LogoImage source={require('../../../assets/logo_instagram.png')} />
                <InstagramIconText>인스타그램 공유하기</InstagramIconText>
              </InstagramIconBtn>
            </SnsIconWrapper>
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

const PostImageWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const ShareInfoTitle = styled.Text`
  width: 100%;
  font-size: 19px;
  font-weight: bold;
  color: #ffffff;
`;

const ShareInfoText = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #bababa;
  padding: 10px 0;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 5px;
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
