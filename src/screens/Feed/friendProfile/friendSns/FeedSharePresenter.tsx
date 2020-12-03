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
          <ContainerCard>
            <PostWrapper>
              <PostImageWrapper>
                <PostImage
                  source={require('../../../../assets/photo_1.jpeg')}
                />
              </PostImageWrapper>
              <ShareInfoText>공유하실 플랫폼을 선택하세요.</ShareInfoText>
              <IconWrapper>
                <IconImageWrapper>
                  <IconBtn>
                    <IconImage
                      source={require('../../../../assets/kakaoLogo.jpg')}
                    />
                    <IconText>카카오톡</IconText>
                  </IconBtn>
                  <IconBtn>
                    <IconImage
                      source={require('../../../../assets/facebookLogo.png')}
                    />
                    <IconText>페이스북</IconText>
                  </IconBtn>
                  <IconBtn>
                    <IconImage
                      source={require('../../../../assets/instagramLogo.png')}
                    />
                    <IconText>인스타그램</IconText>
                  </IconBtn>
                </IconImageWrapper>
              </IconWrapper>
            </PostWrapper>
          </ContainerCard>
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

const ContainerCard = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const PostWrapper = styled.View`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

const PostImageWrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 20px;
`;

const ShareInfoText = styled.Text`
  width: 100%;
  font-size: 15px;
  color: #9b9a9a;
  text-align: center;
  padding: 20px;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 230px;
  border-radius: 5px;
`;

const IconWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const IconImageWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
`;

const IconBtn = styled.TouchableOpacity``;

const IconImage = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 50px;
`;

const IconText = styled.Text`
  font-size: 13px;
  color: #353535;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;
