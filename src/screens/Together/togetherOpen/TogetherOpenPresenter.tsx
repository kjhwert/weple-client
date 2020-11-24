import React from 'react';
import styled from 'styled-components/native';

interface IContainerProps {
  isClick: boolean;
}

export default ({navigation, menuList}) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <RecruitTogetherWrapper>
              <RecruitTogetherBtn>
                <RecruitTogetherText>내가 개설한 함께</RecruitTogetherText>
              </RecruitTogetherBtn>

              <TogetherOpenWrapper>
                <OpenBtnWrapper>
                  <TogetherOpenBtnText>+</TogetherOpenBtnText>
                </OpenBtnWrapper>
                <TogetherOpenText>함께하기를 만들어주세요</TogetherOpenText>
              </TogetherOpenWrapper>
            </RecruitTogetherWrapper>

            <Line></Line>
            <MenuBarWrapper>
              {menuList.map((item, idx) => (
                <MenuWrapper key={idx} isClick={item.isClick}>
                  <MenuBtn onPress={() => {}}>
                    <MenuText>{item.name}</MenuText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>

            <RecruitTogetherWrapper>
              <RecruitTogetherBtn>
                <RecruitTogetherText>내 주변 개설 함께</RecruitTogetherText>
                <RecruitTogetherNumber>8</RecruitTogetherNumber>
                <RecruitTogetherMoreImage
                  source={require('../../../assets/more.png')}
                />
              </RecruitTogetherBtn>
            </RecruitTogetherWrapper>
            <RecruitWrapper>
              <RecruitImageWrapper
                onPress={() => {
                  navigation.navigate('togetherDetail');
                }}>
                <RecruitImage
                  source={require('../../../assets/photo_2.jpeg')}
                />
              </RecruitImageWrapper>
              <RecruitTextWrapper>
                <RecruitTitle>강변북로 라이딩</RecruitTitle>
                <RecruitAddress>서울특별시 마포구 공덕동 118-1</RecruitAddress>
                <EntryFee>참가비 10,000원</EntryFee>
                <Deadline>모집마감 18시간 전</Deadline>
              </RecruitTextWrapper>
            </RecruitWrapper>
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

const Line = styled.View`
  width: 100%;
  padding: 5px;
  background-color: #f3f3f3;
`;

const RecruitTogetherWrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 20px;
`;

const RecruitTogetherBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
  align-items: center;
  justify-content: flex-start;
`;

const RecruitTogetherText = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  text-align: left;
  margin-right: 5px;
`;

const RecruitTogetherNumber = styled.Text`
  color: #007bf1;
  font-weight: bold;
  font-size: 16px;
`;

const RecruitTogetherMoreImage = styled.Image`
  width: 10px;
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
  align-items: center;
  justify-content: flex-start;
  width: 40%;
  border-width: 1px;
  border-color: #dfdfdf;
  margin-right: 10px;
`;

const RecruitImage = styled.Image`
  width: 100%;
  height: 100px;
`;

const TogetherOpenWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #fcfcfd;
  border-width: 1px;
  border-color: #4c585858;
`;

const OpenBtnWrapper = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #b8b8b8;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const TogetherOpenBtnText = styled.Text`
  width: 60px;
  height: 60px;
  font-size: 50px;
  text-align: center;
  color: #b8b8b8;
`;

const TogetherOpenText = styled.Text`
  color: #b4b4b4;
  font-size: 15px;
  font-weight: bold;
  padding: 20px;
`;

const RecruitTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 55%;
`;

const RecruitTitle = styled.Text`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: #000;
  padding: 5px 0;
`;

const RecruitAddress = styled.Text`
  width: 100%;
  font-size: 14px;
  color: #777;
  padding: 5px 0 10px 0;
`;

const EntryFee = styled.Text`
  width: 100%;
  font-size: 13px;
  color: #000;
  font-weight: bold;
  padding: 5px 0;
`;

const Deadline = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #007bf1;
  font-weight: bold;
  padding: 5px 0;
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
  border-color: ${(props: IContainerProps) =>
    props.isClick ? '#007bf1' : '#fff'};
`;

const MenuBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
`;

const MenuText = styled.Text`
  font-size: 18px;
  color: ${(props: IContainerProps) => (props.isClick ? '#007bf1' : '#333')};
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;
