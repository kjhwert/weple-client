import React from 'react';
import styled from 'styled-components/native';

interface IProps {}

export default ({navigation, menuList}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <SetUpWrapper>
              <SetUpTitleText>내 정보 관리</SetUpTitleText>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('setProfile');
                  }}>
                  <SetUpListText>프로필 수정</SetUpListText>
                  <MoreImage source={require('../../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('setPassword');
                  }}>
                  <SetUpListText>비밀번호 변경</SetUpListText>
                  <MoreImage source={require('../../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('setPersonal');
                  }}>
                  <SetUpListText>개인정보보호 설정</SetUpListText>
                  <MoreImage source={require('../../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('setAlarm');
                  }}>
                  <SetUpListText>알림 설정</SetUpListText>
                  <MoreImage source={require('../../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>

              <SetUpTitleText>고객센터</SetUpTitleText>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('setNotice');
                  }}>
                  <SetUpListText>공지사항</SetUpListText>
                  <MoreImage source={require('../../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('setEvent');
                  }}>
                  <SetUpListText>이벤트</SetUpListText>
                  <MoreImage source={require('../../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('setAsk');
                  }}>
                  <SetUpListText>1:1 문의</SetUpListText>
                  <MoreImage source={require('../../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('setFaq');
                  }}>
                  <SetUpListText>FAQ</SetUpListText>
                  <MoreImage source={require('../../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('setClause');
                  }}>
                  <SetUpListText>약관 및 개인정보보호정책</SetUpListText>
                  <MoreImage source={require('../../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    navigation.navigate('aboutApp');
                  }}>
                  <SetUpListText>이 앱에 대해서</SetUpListText>
                  <MoreImage source={require('../../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn onPress={() => {}}>
                  <SetUpListText>회원탈퇴</SetUpListText>
                  <MoreImage source={require('../../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn onPress={() => {}}>
                  <SetUpListText>로그아웃</SetUpListText>
                  <MoreImage source={require('../../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
            </SetUpWrapper>
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

const SetUpWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  width: 100%;
`;

const SetUpTitleText = styled.Text`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  color: #2c2c2c;
  padding: 20px;
  background-color: #ededed;
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
  color: #7f7f7f;
  width: 85%;
`;

const MoreImage = styled.Image`
  width: 13px;
  height: 13px;
`;
