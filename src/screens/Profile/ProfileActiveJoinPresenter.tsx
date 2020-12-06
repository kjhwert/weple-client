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
          <Card>
            <BackgroundLine>
              <ProfileTopWrapper>
                <ProfileImageWrapper>
                  <ProfileMainImage
                    source={require('../../assets/profile_1.png')}
                  />
                  <EditCard
                    onPress={() => {
                      navigation.navigate('setProfile');
                    }}>
                    <EditImage source={require('../../assets/edit_icon.png')} />
                    <EditBtnText>프로필 수정</EditBtnText>
                  </EditCard>
                </ProfileImageWrapper>
                <ProfileNickName>GilDong Hong</ProfileNickName>
                <ActiveTextWrapper>
                  <ActiveBtnWrapper>
                    <ActiveBtn onPress={() => {}}>
                      <ActiveNumber>846</ActiveNumber>
                    </ActiveBtn>
                    <ActiveText>활동들</ActiveText>
                  </ActiveBtnWrapper>
                  <ActiveBtnWrapper>
                    <ActiveBtn
                      onPress={() => {
                        navigation.navigate('followerMember');
                      }}>
                      <FollowerNumber>1,226</FollowerNumber>
                    </ActiveBtn>
                    <ActiveText>팔로워</ActiveText>
                  </ActiveBtnWrapper>
                  <ActiveBtnWrapper>
                    <ActiveBtn
                      onPress={() => {
                        navigation.navigate('followingMember');
                      }}>
                      <FollowingNumber>987</FollowingNumber>
                    </ActiveBtn>
                    <ActiveText>팔로워 중</ActiveText>
                  </ActiveBtnWrapper>
                  <ActiveBtnWrapper>
                    <ActiveBtn
                      onPress={() => {
                        navigation.navigate('profilePoint');
                      }}>
                      <PointNumber>30</PointNumber>
                    </ActiveBtn>
                    <ActiveText>포인트</ActiveText>
                  </ActiveBtnWrapper>
                </ActiveTextWrapper>
                <ActiveIntroduceText>
                  {
                    "Hello, I'm GilDong. My hobby is riding a bicycle. My hobby is riding a bicycle."
                  }
                </ActiveIntroduceText>
                <PayBtnWrapper>
                  <PaymentBtn
                    onPress={() => {
                      navigation.navigate('profilePay');
                    }}>
                    <PayBtnText>결제내역</PayBtnText>
                  </PaymentBtn>
                  <MembershipBtn
                    onPress={() => {
                      navigation.navigate('profileMembership');
                    }}>
                    <PayBtnText>멤버쉽</PayBtnText>
                  </MembershipBtn>
                  <PointBtn
                    onPress={() => {
                      navigation.navigate('profilePoint');
                    }}>
                    <PayBtnText>포인트</PayBtnText>
                  </PointBtn>
                </PayBtnWrapper>
              </ProfileTopWrapper>
            </BackgroundLine>

            <MenuBarWrapper>
              {menuList.map((item, idx) => (
                <MenuWrapper key={idx} isClick={item.isClick}>
                  <MenuBtn
                    onPress={() => {
                      navigation.navigate('profileActiveMain');
                    }}>
                    <MenuText isClick={item.isClick}>{item.name}</MenuText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>
            <ProfileActiveTitleWrapper>
              <ProfileTitleBtn onPress={() => {}}>
                <ProfileActiveTitle>
                  <BoldText>GilDong</BoldText>님이 참여중인 함께
                </ProfileActiveTitle>
                <ProfileActiveNumber>8</ProfileActiveNumber>
              </ProfileTitleBtn>
              <SortBtn>
                <SortImage source={require('../../assets/sort_icon.png')} />
              </SortBtn>
            </ProfileActiveTitleWrapper>
            {openClub.map((item, idx) => (
              <RecruitWrapper key={idx}>
                <RecruitImageWrapper onPress={() => {}}>
                  <RecruitImage source={item.image} />
                  <RecordWrapper>
                    <RecordImage source={item.iconImage} />
                    <RecordText>{item.distance}KM</RecordText>
                  </RecordWrapper>
                </RecruitImageWrapper>
                <RecruitTextWrapper>
                  <RecruitTitle>{item.title}</RecruitTitle>
                  <RecruitAddress>{item.address}</RecruitAddress>
                  <EntryFee>참가비 {item.pay}원</EntryFee>
                  <Deadline>모집마감 {item.endTime}시간 전</Deadline>
                </RecruitTextWrapper>
              </RecruitWrapper>
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
  background-color: #fff;
`;

const Line = styled.View`
  width: 100%;
  padding: 5px;
  background-color: #f3f3f3;
`;

const BackgroundLine = styled.View`
  width: 100%;
  padding: 10px 15px;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
`;

const ProfileTopWrapper = styled.View`
  display: flex;
  width: 100%;
  border-radius: 5px;
  border-width: 1px;
  border-color: #e1e1e1;
  background-color: white;
  padding: 20px;
`;

const ProfileImageWrapper = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileMainImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

const EditCard = styled.TouchableOpacity`
  width: 30%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const EditImage = styled.Image`
  width: 18px;
  height: 18px;
`;

const EditBtnText = styled.Text`
  color: #b0b0b0;
  font-size: 10px;
  font-weight: bold;
  margin-left: 5px;
`;

const ProfileNickName = styled.Text`
  font-size: 15px;
  color: #333;
  font-weight: bold;
  text-align: center;
  padding: 5px;
`;

const ActiveTextWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const ActiveBtnWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 25%;
`;

const ActiveBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const ActiveNumber = styled.Text`
  font-size: 20px;
  color: #007bf1;
  font-weight: bold;
  text-align: center;
`;

const FollowerNumber = styled.Text`
  font-size: 20px;
  color: #00bbc7;
  font-weight: bold;
  text-align: center;
`;

const FollowingNumber = styled.Text`
  font-size: 20px;
  color: #8784ff;
  font-weight: bold;
  text-align: center;
`;

const PointNumber = styled.Text`
  font-size: 20px;
  color: #ffb284;
  font-weight: bold;
  text-align: center;
`;

const ActiveText = styled.Text`
  font-size: 13px;
  color: #ababab;
  font-weight: bold;
  text-align: center;
`;

const ActiveIntroduceText = styled.Text`
  font-size: 14px;
  color: #989898;
  padding: 10px;
`;

const PayBtnWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;
`;

const PaymentBtn = styled.TouchableOpacity`
  width: 18%;
  padding: 5px;
  align-items: center;
  border-radius: 5px;
  background-color: #007bf1;
`;

const MembershipBtn = styled.TouchableOpacity`
  width: 18%;
  padding: 5px;
  align-items: center;
  border-radius: 5px;
  background-color: #00bbc7;
  margin-left: 5px;
`;

const PointBtn = styled.TouchableOpacity`
  width: 18%;
  padding: 5px;
  align-items: center;
  border-radius: 5px;
  background-color: #ffb284;
  margin-left: 5px;
`;

const PayBtnText = styled.Text`
  color: #fff;
  font-size: 10px;
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
  color: ${(props: IProps) => (props.isClick ? '#007bf1' : '#333')};
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;

const ProfileActiveTitleWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
`;

const ProfileTitleBtn = styled.TouchableOpacity`
  width: 85%;
  flex-flow: row wrap;
`;

const ProfileActiveTitle = styled.Text`
  font-size: 15px;
  color: #333;
  text-align: left;
  margin-right: 5px;
`;

const BoldText = styled.Text`
  font-weight: bold;
`;

const ProfileActiveNumber = styled.Text`
  color: #007bf1;
  font-weight: bold;
  font-size: 15px;
`;

const SortBtn = styled.TouchableOpacity`
  width: 15%;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

const SortImage = styled.Image`
  width: 23px;
  height: 18px;
`;

const RecruitWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 20px;
  border-top-width: 1px;
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

const RecruitTitle = styled.Text`
  width: 100%;
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
