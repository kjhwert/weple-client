import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
}

export default ({navigation, member}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {member.map((item, idx) => (
              <MemberWrapper key={idx}>
                <ProfileImageWrap>
                  <ProfileImage source={item.image} />
                </ProfileImageWrap>
                <MemberRecordWrapper>
                  <MemberNameBtn onPress={() => {}}>
                    <MemberName>{item.name}</MemberName>
                  </MemberNameBtn>
                  <RecordWrapper>
                    <BestRecordWrap>
                      <ImageColor1>
                        <BestImage source={item.bestOneImage} />
                      </ImageColor1>
                      <BestRecordText>{item.bestOneText} km</BestRecordText>
                    </BestRecordWrap>

                    <BestRecordWrap>
                      <ImageColor2>
                        <BestImage source={item.bestTwoImage} />
                      </ImageColor2>
                      <BestRecordText>{item.bestTwoText} km</BestRecordText>
                    </BestRecordWrap>

                    <BestRecordWrap>
                      <ImageColor3>
                        <BestImage source={item.bestThreeImage} />
                      </ImageColor3>
                      <BestRecordText>{item.bestThreeText} km</BestRecordText>
                    </BestRecordWrap>
                  </RecordWrapper>
                </MemberRecordWrapper>
              </MemberWrapper>
            ))}
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

const MemberWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #e0e0e0;
`;

const ProfileImageWrap = styled.View`
  width: 20%;
  align-items: flex-start;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const MemberRecordWrapper = styled.View`
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`;

const MemberNameBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row;
  padding: 5px 0;
`;

const MemberName = styled.Text`
  font-size: 13px;
  color: #333;
`;

const RecordWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

const BestRecordWrap = styled.View`
  display: flex;
  flex-flow: row;
  width: 33%;
  align-items: center;
`;

const ImageColor1 = styled.View`
  width: 25px;
  height: 10px;
  padding: 10px 0px;
  border-radius: 5px;
  background-color: #007bf1;
  align-items: center;
  justify-content: center;
`;

const ImageColor2 = styled.View`
  width: 25px;
  height: 10px;
  padding: 10px 0px;
  border-radius: 5px;
  background-color: #8784ff;
  align-items: center;
  justify-content: center;
`;

const ImageColor3 = styled.View`
  width: 25px;
  height: 10px;
  padding: 10px 0px;
  border-radius: 5px;
  background-color: #00bbc7;
  align-items: center;
  justify-content: center;
`;

const BestImage = styled.Image`
  width: 15px;
  height: 13px;
`;

const BestRecordText = styled.Text`
  font-size: 10px;
  color: #6d6d6d;
  text-align: left;
  width: 68%;
  margin-left: 5px;
`;
