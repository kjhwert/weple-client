import React, {useContext} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../../../components/ContainerCard';
import {DuplicateInputBox, TextLimitBox} from '../../../../../components/CommonInput';
import {StartNextBtn} from '../../../../../components/CommonBtn';
import UserContext from '../../../../../module/context/UserContext';

interface IProps {
  navigation: any;
  profileData: any;
  onChangeProfile: Function;
  profileInfoChange: Function;
  activeFlag: any;
  isActive: boolean;
  hasNickName: Function;
  showPicker: Function;
  onChangeNickName: (e: string) => void;
  onChangeDescription: (e: string) => void;
}

export default ({
  navigation,
  profileData,
  onChangeProfile,
  profileInfoChange,
  activeFlag,
  isActive,
  hasNickName,
  showPicker,
  onChangeNickName,
  onChangeDescription,
}: IProps) => {
  const {getProfileUri}: any = useContext(UserContext);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <ProfileTopWrapper>
              <ProfileMainImage source={getProfileUri()} />
              <EditBtnWrapper
                onPress={() => {
                  showPicker();
                }}>
                <EditBtn>
                  <EditImage source={require('../../../../../assets/edit_icon.png')} />
                </EditBtn>
              </EditBtnWrapper>
            </ProfileTopWrapper>
            <SignUpWrapper>
              {/*<DuplicateInputBox*/}
              {/*  title={'닉네임'}*/}
              {/*  placeholder="닉네임을 입력하세요."*/}
              {/*  name="nickName"*/}
              {/*  value={profileData.nickName}*/}
              {/*  onChange={onChangeProfile}*/}
              {/*  activeFlag={activeFlag.nickNameFlag}*/}
              {/*/>*/}
              <DuplicateInputBoxWrapper>
                <DuplicateInputBoxTitle>닉네임</DuplicateInputBoxTitle>
                <DuplicateInputBoxData
                  placeholder={'닉네임을 입력하세요.'}
                  onChangeText={onChangeNickName}
                  autoFocus={true}
                  value={profileData.nickName}
                />
              </DuplicateInputBoxWrapper>
              <DuplicateBtn
                onPress={() => {
                  hasNickName();
                }}>
                <DuplicateText>중복확인</DuplicateText>
              </DuplicateBtn>
            </SignUpWrapper>
            <IntroduceWrapper>
              <TextLimitWrapper>
                <TextLimitTitle>간략하게 자신을 소개해주세요 (최대 100자)</TextLimitTitle>
                <TextLimitData
                  value={profileData.description}
                  onChangeText={onChangeDescription}
                  multiline={true}
                  maxLength={100}
                  textAlignVertical={'top'}
                />
              </TextLimitWrapper>
            </IntroduceWrapper>
          </ContainerCard>
        </ScrollWrapper>
      </ScrollContainer>
      <StartNextBtn text={'저장'} navigation={navigation} isActive={isActive} callBack={profileInfoChange} />
    </Container>
  );
};

const TextLimitWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const TextLimitTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const TextLimitData = styled.TextInput`
  width: 100%;
  height: 100px;
  max-height: 100px;
  padding: 10px;
  margin-bottom: 100px;
  border-width: 1px;
  border-color: #b5b5b5;
  font-size: 14px;
  color: #6f6f6f;
`;

const DuplicateInputBoxWrapper = styled.View`
  display: flex;
  width: 70%;
`;

const DuplicateInputBoxTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const DuplicateInputBoxData = styled.TextInput`
  padding: 5px 10px;
  border-bottom-width: 1px;
  border-color: #acacac;
  font-size: 15px;
  color: #6f6f6f;
`;
const Container = styled.View`
  flex: 1;
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
