import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
  isClick: boolean;
}

export default ({navigation, menuList, openClub}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <RecruitTogetherWrapper>
              <RecruitTogetherBtn
                onPress={() => {
                  navigation.navigate('togetherOpen');
                }}>
                <RecruitTogetherText>내가 개설한 함께</RecruitTogetherText>
                <RecruitTogetherNumber>8</RecruitTogetherNumber>
                <RecruitTogetherMoreImage
                  source={require('../../assets/more.png')}
                />
              </RecruitTogetherBtn>
            </RecruitTogetherWrapper>

            <RecruitWrapper>
              <RecruitImageWrapper
                onPress={() => {
                  navigation.navigate('togetherModify');
                }}>
                <RecruitImage source={require('../../assets/photo_4.jpeg')} />
                <RecordWrapper>
                  <RecordImage source={require('../../assets/cycle.png')} />
                  <RecordText>21.7 KM</RecordText>
                </RecordWrapper>
              </RecruitImageWrapper>
              <RecruitTextWrapper>
                <RecruitTitleBtn
                  onPress={() => {
                    navigation.navigate('togetherModify');
                  }}>
                  <RecruitTitle>강변북로 라이딩</RecruitTitle>
                </RecruitTitleBtn>
                <RecruitAddress>서울특별시 마포구 공덕동 118-1</RecruitAddress>
                <EntryFee>참가비 10,000원</EntryFee>
                <Deadline>모집마감 18시간 전</Deadline>
              </RecruitTextWrapper>
            </RecruitWrapper>
            <RecruitBtnWrapper>
              <RecruitBtn
                onPress={() => {
                  navigation.navigate('togetherPostSubject');
                }}>
                <RecruitBtnText>함께 개설하기</RecruitBtnText>
              </RecruitBtn>
            </RecruitBtnWrapper>
            <Line></Line>

            <MenuBarWrapper>
              {menuList.map((item, idx) => (
                <MenuWrapper key={idx} isClick={item.isClick}>
                  <MenuBtn onPress={() => {}}>
                    <MenuText isClick={item.isClick}>{item.name}</MenuText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>

            <RecruitTogetherWrapper>
              <RecruitTogetherBtn
                onPress={() => {
                  navigation.navigate('togetherSearch');
                }}>
                <RecruitTogetherText>내 주변 개설 함께</RecruitTogetherText>
                <RecruitTogetherNumber>8</RecruitTogetherNumber>
                <RecruitTogetherMoreImage
                  source={require('../../assets/more.png')}
                />
              </RecruitTogetherBtn>
            </RecruitTogetherWrapper>

            {openClub.map((item, idx) => (
              <RecruitWrapper key={idx}>
                <RecruitImageWrapper
                  onPress={() => {
                    navigation.navigate('togetherDetail');
                  }}>
                  <RecruitImage source={item.image} />
                  <RecordWrapper>
                    <RecordImage source={item.iconImage} />
                    <RecordText>{item.distance}KM</RecordText>
                  </RecordWrapper>
                </RecruitImageWrapper>
                <RecruitTextWrapper>
                  <RecruitTitleBtn
                    onPress={() => {
                      navigation.navigate('togetherDetail');
                    }}>
                    <RecruitTitle>{item.title}</RecruitTitle>
                  </RecruitTitleBtn>
                  <RecruitAddress>{item.address}</RecruitAddress>
                  <EntryFee>참가비 {item.pay}원</EntryFee>
                  <Deadline>모집마감 {item.endTime}시간 전</Deadline>
                </RecruitTextWrapper>
              </RecruitWrapper>
            ))}
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

const Line = styled.View`
  width: 100%;
  padding: 5px;
  background-color: #f3f3f3;
`;

const RecruitTogetherWrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 10px 20px;
`;

const RecruitTogetherBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
  align-items: center;
  justify-content: flex-start;
`;

const RecruitTogetherText = styled.Text`
  font-size: 13px;
  color: #333;
  font-weight: bold;
  text-align: left;
  margin-right: 5px;
`;

const RecruitTogetherNumber = styled.Text`
  color: #007bf1;
  font-weight: bold;
  font-size: 13px;
  margin-right: 3px;
`;

const RecruitTogetherMoreImage = styled.Image`
  width: 6px;
  height: 10px;
`;

const RecruitWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 20px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

const RecruitImageWrapper = styled.TouchableOpacity`
  display: flex;
  width: 45%;
  border-width: 1px;
  border-color: #dfdfdf;
  margin-right: 10px;
`;

const RecruitImage = styled.Image`
  width: 100%;
  height: 100px;
`;

const RecordWrapper = styled.View`
  display: flex;
  flex-flow: row;
  width: 65%;
  align-items: center;
  justify-content: center;
  background-color: #007bf1;
  position: absolute;
  margin-top: 10px;
  padding: 2px;
`;

const RecordText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const RecordImage = styled.Image`
  width: 22px;
  height: 13px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

const RecruitTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
`;

const RecruitTitleBtn = styled.TouchableOpacity`
  width: 100%;
`;

const RecruitTitle = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #000;
`;

const RecruitAddress = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #777;
  padding: 5px 0 10px 0;
`;

const EntryFee = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #000;
  font-weight: bold;
  padding: 5px 0;
`;

const Deadline = styled.Text`
  width: 100%;
  font-size: 10px;
  color: #007bf1;
  font-weight: bold;
`;

const RecruitBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const RecruitBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #fff;
  border-width: 1px;
  border-color: #b5b5b5;
`;

const RecruitBtnText = styled.Text`
  color: #6f6f6f;
  font-size: 15px;
  font-weight: bold;
`;

const MenuBarWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const MenuWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-width: 3px;
  border-color: ${(props: IProps) => (props.isClick ? '#007bf1' : '#fff')};
`;

const MenuBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
`;

const MenuText = styled.Text`
  font-size: 15px;
  color: ${(props: IProps) => (props.isClick ? '#007bf1' : '#3a3636')};
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;
