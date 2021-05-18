import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {getComma, getTotalTime} from '../../../components/CommonTime';
import TogetherContext from '../../../module/context/TogetherContext';
import {TextTitleBox, TextBox} from '../../../components/CommonInput';
import {ModifyBtn} from '../../../components/CommonBtn';

interface IProps {
  listCountDetail: any;
  listDetail: any;
  activeFlag: any;
  isActive: any;
  onChangeTogether: any;
  modifyTogetherData: Function;
  deleteTogetherData: Function;
  blankValidation: Function;
  onChangeTitle: (e: string) => void;
  onChangeDescription: (e: string) => void;
  onChangeRecommend: (e: string) => void;
  onChangeNotice: (e: string) => void;
}

export default ({
  listDetail,
  listCountDetail,
  onChangeTogether,
  modifyTogetherData,
  deleteTogetherData,
  activeFlag,
  isActive,
  blankValidation,
  onChangeTitle,
  onChangeDescription,
  onChangeRecommend,
  onChangeNotice,
}: IProps) => {
  const {getTogetherThumbnail}: any = useContext(TogetherContext);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <JoinImageWrapper>
            <JoinImage source={getTogetherThumbnail(listDetail.thumbnail)} />
          </JoinImageWrapper>
          <Card>
            <JoinWrapper>
              <JoinInfoWrapper>
                <JoinTitleWrapper>
                  <InputBoxWrapper>
                    <InputDataBox
                      onChangeText={onChangeTitle}
                      autoFocus={true}
                      multiline={true}
                      value={listDetail.title}
                    />
                  </InputBoxWrapper>
                  {/*<TextTitleBox*/}
                  {/*  name="title"*/}
                  {/*  value={listDetail.title}*/}
                  {/*  onChange={onChangeTogether}*/}
                  {/*  activeFlag={activeFlag.titleFlag}*/}
                  {/*/>*/}
                </JoinTitleWrapper>
                <JoinTextWrapper>
                  <JoinInfoTitle>최대 참여인원</JoinInfoTitle>
                  <JoinInfoContent>{listDetail.maxMember}명</JoinInfoContent>
                  <JoinInfoTitle>현재 참여인원</JoinInfoTitle>
                  <JoinInfoContent>{listCountDetail.userCount}명</JoinInfoContent>
                  <JoinInfoTitle>참가비</JoinInfoTitle>
                  <JoinInfoContent>{getComma(listDetail.togetherPrice)}원</JoinInfoContent>
                  <JoinInfoTitle>지역</JoinInfoTitle>
                  <JoinInfoContent>{listDetail.address}</JoinInfoContent>
                  <JoinInfoTitle>모임일시</JoinInfoTitle>
                  <JoinInfoContent>{getTotalTime(listDetail.togetherDate)}</JoinInfoContent>
                  <JoinInfoTitle>모임위치</JoinInfoTitle>
                  <JoinInfoContent>{listDetail.togetherPlace}</JoinInfoContent>
                </JoinTextWrapper>
              </JoinInfoWrapper>
              <ModifyContentWrapper>
                <ModifyTitle>모임하기 설명</ModifyTitle>
                <InputBoxWrapper>
                  <TextBoxData
                    value={listDetail.description}
                    onChangeText={onChangeDescription}
                    multiline={true}
                    textAlignVertical={'top'}
                  />
                </InputBoxWrapper>
                {/*<TextBox*/}
                {/*  name="description"*/}
                {/*  value={listDetail.description}*/}
                {/*  onChange={onChangeTogether}*/}
                {/*  activeFlag={activeFlag.descriptionFlag}*/}
                {/*/>*/}
                <ModifyTitle>이런 분들께 추천합니다.</ModifyTitle>
                <InputBoxWrapper>
                  <TextBoxData
                    value={listDetail.recommend}
                    onChangeText={onChangeRecommend}
                    multiline={true}
                    textAlignVertical={'top'}
                  />
                </InputBoxWrapper>
                {/*<TextBox*/}
                {/*  name="recommend"*/}
                {/*  value={listDetail.recommend}*/}
                {/*  onChange={onChangeTogether}*/}
                {/*  activeFlag={activeFlag.recommendFlag}*/}
                {/*/>*/}
                <NoticeWrap>
                  <ModifyTitle>공지사항</ModifyTitle>
                  <InputBoxWrapper>
                    <TextBoxData
                      value={listDetail.notice}
                      onChangeText={onChangeNotice}
                      multiline={true}
                      textAlignVertical={'top'}
                    />
                  </InputBoxWrapper>
                </NoticeWrap>
              </ModifyContentWrapper>
              <ButtonWrap>
                <ModifyBtn
                  text={'수정완료'}
                  validation={blankValidation}
                  isActive={isActive}
                  callBack={modifyTogetherData}
                />
                <DeleteButton
                  onPress={() => {
                    deleteTogetherData();
                  }}>
                  <ButtonText>삭제하기</ButtonText>
                </DeleteButton>
              </ButtonWrap>
            </JoinWrapper>
          </Card>
        </ScrollWrapper>
      </ScrollContainer>
    </Container>
  );
};

const TextBoxTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const TextBoxData = styled.TextInput`
  width: 100%;
  height: 150px;
  max-height: 150px;
  padding: 10px;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: #acacac;
  font-size: 15px;
  color: #6f6f6f;
`;

const InputDataBox = styled.TextInput`
  padding: 5px 10px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: #acacac;
  font-size: 15px;
  font-weight: bold;
  color: #222;
`;

const InputBoxWrapper = styled.View`
  display: flex;
  width: 100%;
`;

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
  padding: 20px;
`;

const JoinImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const JoinImage = styled.Image`
  width: 100%;
  height: 240px;
`;

const JoinWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  border-width: 1px;
  border-color: #e2e2e2;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  shadow-color: grey;
  shadow-offset: 0px 0px;
  elevation: 0.5;
`;

const JoinInfoWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #dcdcdc;
`;

const JoinTitleWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const JoinInfoTitle = styled.Text`
  width: 35%;
  font-size: 12px;
  font-weight: bold;
  color: #878787;
  padding: 5px 0;
`;

const JoinInfoContent = styled.Text`
  width: 65%;
  font-size: 12px;
  color: #333333;
  padding: 5px 0;
  text-align: right;
`;
const JoinTextWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 0 20px 0;
`;

const ModifyContentWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
`;

const ModifyTitle = styled.Text`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: #2e2e2e;
  text-align: left;
  margin-bottom: 5px;
`;

const NoticeWrap = styled.View`
  display: flex;
  width: 100%;
  margin-bottom: 80px;
`;

const ButtonWrap = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const DeleteButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px;
  background-color: #f1004f;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
