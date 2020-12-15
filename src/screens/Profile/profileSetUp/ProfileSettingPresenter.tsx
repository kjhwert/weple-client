import React, {useContext} from 'react';
import styled from 'styled-components/native';
import AlertWrapper from '../../../components/AlertWrapper';
import UserContext from '../../../module/context/UserContext';
import {CommonActions} from '@react-navigation/native';

interface IProps {
  navigation: any;
  dropOutAlert: boolean;
  logOutAlert: boolean;
  dropOutAlertFrame: Function;
  logOutAlertFrame: Function;
}

export default ({
  navigation,
  dropOutAlert,
  logOutAlert,
  dropOutAlertFrame,
  logOutAlertFrame,
}: IProps) => {
  const {userLogout}: any = useContext(UserContext);

  return (
    <Container>
      {dropOutAlert && (
        <AlertWrapper>
          <AlertImageWrapper>
            <AlertImage
              source={require('../../../assets/alertWarn_icon.png')}
            />
          </AlertImageWrapper>
          <AlertTitleText>{'계정을 삭제하시겠습니까?'}</AlertTitleText>
          <AlertContentText>
            {'삭제된 데이터는 되돌릴 수 없습니다.'}
          </AlertContentText>
          <AlertBtnWrapper>
            <ConfirmButton
              onPress={() => {
                navigation.navigate('login');
              }}>
              <ConfirmButtonText>삭제</ConfirmButtonText>
            </ConfirmButton>
            <CancelButton
              onPress={() => {
                dropOutAlertFrame(false);
              }}>
              <CancelButtonText>취소</CancelButtonText>
            </CancelButton>
          </AlertBtnWrapper>
        </AlertWrapper>
      )}
      {logOutAlert && (
        <AlertWrapper>
          <AlertImageWrapper>
            <AlertImage
              source={require('../../../assets/alertCheck_icon.png')}
            />
          </AlertImageWrapper>
          <AlertTitleText>{'로그아웃 하시겠습니까?'}</AlertTitleText>
          <AlertBtnWrapper>
            <ConfirmButton
              onPress={() => {
                userLogout();
                logOutAlertFrame(false);

                navigation.dispatch(
                  CommonActions.reset({
                    index: 1,
                    routes: [{name: 'login'}],
                  }),
                );
              }}>
              <ConfirmButtonText>확인</ConfirmButtonText>
            </ConfirmButton>
            <CancelButton
              onPress={() => {
                logOutAlertFrame(false);
              }}>
              <CancelButtonText>취소</CancelButtonText>
            </CancelButton>
          </AlertBtnWrapper>
        </AlertWrapper>
      )}
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
                <SetBtn
                  onPress={() => {
                    dropOutAlertFrame(true);
                  }}>
                  <SetUpListText>회원탈퇴</SetUpListText>
                  <MoreImage source={require('../../../assets/set_more.png')} />
                </SetBtn>
              </SetBtnWrapper>
              <SetBtnWrapper>
                <SetBtn
                  onPress={() => {
                    logOutAlertFrame(true);
                  }}>
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

const AlertImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

const AlertImage = styled.Image`
  width: 70px;
  height: 70px;
`;

const AlertTitleText = styled.Text`
  font-size: 14px;
  color: #181818;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
`;

const AlertContentText = styled.Text`
  font-size: 12px;
  color: #878787;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
`;

const AlertBtnWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`;

const ConfirmButton = styled.TouchableOpacity`
  display: flex;
  width: 50%;
  padding: 10px;
  background-color: #007bf1;
`;

const ConfirmButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const CancelButton = styled.TouchableOpacity`
  display: flex;
  width: 50%;
  padding: 10px;
  background-color: #efefef;
`;

const CancelButtonText = styled.Text`
  font-size: 14px;
  color: #4e4e4e;
  font-weight: bold;
  text-align: center;
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
