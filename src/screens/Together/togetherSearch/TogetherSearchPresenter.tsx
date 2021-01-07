import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
}

export default ({navigation, openClub}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <Wrapper>
              <ActiveSelectTitleWrapper>
                <CategoryTogetherBtn onPress={() => {}}>
                  <CategoryTogetherImage source={require('../../../assets/icon_category.png')} />
                  <CategoryTogetherText>카테고리</CategoryTogetherText>
                </CategoryTogetherBtn>
                <LocationBtn
                  onPress={() => {
                    navigation.navigate('togetherMain');
                  }}>
                  <LocationImage source={require('../../../assets/icon_location.png')} />
                </LocationBtn>
              </ActiveSelectTitleWrapper>
            </Wrapper>

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

const Wrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 10px 20px;
  background-color: #f3f3f3;
`;

const ActiveSelectTitleWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CategoryTogetherBtn = styled.TouchableOpacity`
  width: 85px;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #e7e7e7;
  background-color: #ffffff;
  padding: 6px 0;
`;

const CategoryTogetherImage = styled.Image`
  width: 15px;
  height: 15px;
`;

const CategoryTogetherText = styled.Text`
  font-size: 12px;
  color: #666666;
  font-weight: bold;
  text-align: center;
  margin-left: 10px;
`;

const LocationBtn = styled.TouchableOpacity`
  width: 10%;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

const LocationImage = styled.Image`
  width: 20px;
  height: 20px;
`;

const RecruitWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 20px;
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
  padding: 5px 0;
`;

const EntryFee = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #000;
  font-weight: bold;
  padding-bottom: 5px;
`;

const Deadline = styled.Text`
  width: 100%;
  font-size: 10px;
  color: #007bf1;
  font-weight: bold;
`;
