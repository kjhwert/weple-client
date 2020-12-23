import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../../../components/ContainerCard';
import NextBtn from '../../../../../components/NextBtn';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
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
              <SignUpTitle>닉네임</SignUpTitle>
              <NickNameWrapper>
                <NickNameInput
                  placeholder="닉네임을 입력하세요."
                  autoFocus={true}
                />
                <DuplicateBtn>
                  <DuplicateText>중복확인</DuplicateText>
                </DuplicateBtn>
              </NickNameWrapper>
            </SignUpWrapper>

            <IntroduceWrapper>
              <IntroduceTitle>
                간략하게 자신을 소개해주세요 (최대 500자)
              </IntroduceTitle>
              <IntroduceInput multiline={true} maxLength={500} />
            </IntroduceWrapper>
          </ContainerCard>
        </ScrollWrapper>
      </ScrollContainer>
      <NextBtn nextPage={'profileActiveMain'} navigation={navigation}>
        {`저장`}
      </NextBtn>
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
`;

const SignUpTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const NickNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const NickNameInput = styled.TextInput`
  width: 70%;
  padding: 5px 10px;
  border-bottom-width: 1px;
  border-color: #acacac;
  font-size: 14px;
  color: #6f6f6f;
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
  padding: 10px;
  margin-bottom: 100px;
  border-width: 1px;
  border-color: #b5b5b5;
  border-radius: 5px;
  font-size: 14px;
  color: #6f6f6f;
  max-height: 150px;
`;
