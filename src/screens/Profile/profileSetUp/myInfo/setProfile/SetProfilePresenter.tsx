import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../../../components/ContainerCard';
import {DuplicateInputBox} from '../../../../../components/CommonInput';
import {StartNextBtn} from '../../../../../components/CommonBtn';
import AlertWrapper from '../../../../../components/AlertWrapper';

interface IProps {
  navigation: any;
  profileData: any;
  onChangeProfile: Function;
  profileInfoChange: Function;
  isActive: boolean;
  alertFrame: any;
  clearAlertFrame: Function;
  hasNickName: Function;
}

export default ({
  navigation,
  profileData,
  onChangeProfile,
  profileInfoChange,
  isActive,
  alertFrame,
  clearAlertFrame,
  hasNickName,
}: IProps) => {
  return (
    <Container>
      {alertFrame.showAlert && alertFrame.usable && (
        <AlertWrapper>
          <AlertImageWrapper>
            <AlertImage
              source={require('../../../../../assets/alertCheck_icon.png')}
            />
          </AlertImageWrapper>
          <AlertTitleText>{'사용할 수 있는 닉네임입니다.'}</AlertTitleText>
          <AlertContentText>{'계속 진행하세요.'}</AlertContentText>
          <ConfirmButton
            onPress={() => {
              clearAlertFrame();
            }}>
            <ConfirmButtonText>확인</ConfirmButtonText>
          </ConfirmButton>
        </AlertWrapper>
      )}
      {alertFrame.showAlert && !alertFrame.usable && (
        <AlertWrapper>
          <AlertImageWrapper>
            <AlertImage
              source={require('../../../../../assets/alertWarn_icon.png')}
            />
          </AlertImageWrapper>
          <AlertTitleText>{'사용하실 수 없는 닉네임입니다.'}</AlertTitleText>
          <AlertContentText>{'다른 닉네임을 사용하세요.'}</AlertContentText>
          <ConfirmButton
            onPress={() => {
              clearAlertFrame();
            }}>
            <ConfirmButtonText>확인</ConfirmButtonText>
          </ConfirmButton>
        </AlertWrapper>
      )}

      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <ProfileTopWrapper>
              <ProfileMainImage
                source={require('../../../../../assets/profile_1.png')}
              />
              <EditBtnWrapper>
                <EditBtn>
                  <EditImage
                    source={require('../../../../../assets/edit_icon.png')}
                  />
                </EditBtn>
              </EditBtnWrapper>
            </ProfileTopWrapper>

            <SignUpWrapper>
              <DuplicateInputBox
                title={'닉네임'}
                placeholder="닉네임을 입력하세요."
                name="nickName"
                value={profileData.nickName}
                onChange={onChangeProfile}
                activeFlag={profileData.activeFlag}
              />
              <DuplicateBtn
                onPress={() => {
                  hasNickName();
                }}>
                <DuplicateText>중복확인</DuplicateText>
              </DuplicateBtn>
            </SignUpWrapper>

            <IntroduceWrapper>
              <IntroduceTitle>
                간략하게 자신을 소개해주세요 (최대 500자)
              </IntroduceTitle>
              <IntroduceInput
                multiline={true}
                maxLength={500}
                name="description"
                value={profileData.description}
                onChange={onChangeProfile}
              />
            </IntroduceWrapper>
          </ContainerCard>
        </ScrollWrapper>
      </ScrollContainer>
      <StartNextBtn
        text={'저장'}
        navigation={navigation}
        isActive={isActive}
        callBack={() => {
          hasNickName();
          profileInfoChange();
          navigation.navigate('profileActiveMain');
        }}
      />
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

const ConfirmButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px;
  background-color: #007bf1;
  position: absolute;
  bottom: 0;
`;

const ConfirmButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const ScrollContainer = styled.View`
  height: 100%;
  background-color: #fff;
`;

const ScrollWrapper = styled.ScrollView``;

const ProfileTopWrapper = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProfileMainImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const EditBtnWrapper = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  display: flex;
  position: absolute;
  bottom: 10px;
  align-items: flex-end;
  justify-content: center;
`;

const EditBtn = styled.View`
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #f4f4f4;
  border-radius: 50px;
  background-color: #fff;
`;

const EditImage = styled.Image`
  width: 18px;
  height: 18px;
  position: absolute;
`;

const SignUpWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
`;

const DuplicateBtn = styled.TouchableOpacity`
  width: 22%;
  align-items: center;
  border-radius: 5px;
  margin-left: 3%;
  padding: 10px 5px;
  background-color: #fff;
  border-width: 1px;
  border-color: #b5b5b5;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const DuplicateText = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
`;

const IntroduceWrapper = styled.View`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

const IntroduceTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const IntroduceInput = styled.TextInput`
  width: 100%;
  max-height: 100px;
  padding: 10px;
  margin-bottom: 100px;
  border-width: 1px;
  border-color: #b5b5b5;
  border-radius: 5px;
  font-size: 14px;
  color: #6f6f6f;
`;
