import React, {useContext} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {InputBox, TextBox} from '../../../components/CommonInput';
import {StartNextBtn} from '../../../components/CommonBtn';
import TogetherContext from '../../../module/context/TogetherContext';

interface IProps {
  navigation: any;
  activeFlag: any;
  isActive: boolean;
  titleValidation: Function;
  blankValidation: Function;
}

export default ({navigation, activeFlag, isActive, titleValidation, blankValidation}: IProps) => {
  const {
    createRoom,
    onChangeRoom,
    onChangeTitle,
    onChangeDescription,
    onChangeRecommend,
    onChangeNotice,
  }: any = useContext(TogetherContext);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <IntroduceWrapper>
              <InputBoxWrapper>
                <InputBoxTitle>제목</InputBoxTitle>
                <InputBoxData
                  placeholder="제목을 10자 이상 입력해주세요."
                  onChangeText={onChangeTitle}
                  // borderColor={borderColor}
                  value={createRoom.title}
                />
              </InputBoxWrapper>
              {/*<InputBox*/}
              {/*  title={'제목'}*/}
              {/*  placeholder="제목을 10자 이상 입력해주세요."*/}
              {/*  name="title"*/}
              {/*  value={createRoom.title}*/}
              {/*  onChange={onChangeRoom}*/}
              {/*  // activeFlag={activeFlag.titleFlag}*/}
              {/*/>*/}
              <InputBoxWrapper>
                <TextBoxTitle>소개</TextBoxTitle>
                <TextBoxData
                  placeholder={'모임을 소개해주세요.'}
                  value={createRoom.description}
                  onChangeText={onChangeDescription}
                  multiline={true}
                  textAlignVertical={'top'}
                />
              </InputBoxWrapper>
              {/*<TextBox*/}
              {/*  title={'소개'}*/}
              {/*  placeholder="모임을 소개해주세요."*/}
              {/*  name="description"*/}
              {/*  value={createRoom.description}*/}
              {/*  onChange={onChangeRoom}*/}
              {/*  // activeFlag={activeFlag.descriptionFlag}*/}
              {/*/>*/}
              <InputBoxWrapper>
                <TextBoxTitle>이런분들께 추천해요</TextBoxTitle>
                <TextBoxData
                  placeholder={'추천 대상을 입력해주세요.'}
                  value={createRoom.recommend}
                  onChangeText={onChangeRecommend}
                  multiline={true}
                  textAlignVertical={'top'}
                />
              </InputBoxWrapper>
              {/*<TextBox*/}
              {/*  title={'이런분들께 추천해요'}*/}
              {/*  placeholder="추천 대상을 입력해주세요."*/}
              {/*  name="recommend"*/}
              {/*  value={createRoom.recommend}*/}
              {/*  onChange={onChangeRoom}*/}
              {/*  // activeFlag={activeFlag.recommendFlag}*/}
              {/*/>*/}
              <InputBoxWrapper>
                <TextBoxTitle>공지사항</TextBoxTitle>
                <TextBoxData
                  placeholder={'공지사항을 입력해주세요.'}
                  value={createRoom.notice}
                  onChangeText={onChangeNotice}
                  multiline={true}
                  textAlignVertical={'top'}
                />
              </InputBoxWrapper>
              {/*<TextBox*/}
              {/*  title={'공지사항'}*/}
              {/*  placeholder="공지사항을 입력해주세요."*/}
              {/*  name="notice"*/}
              {/*  value={createRoom.notice}*/}
              {/*  onChange={onChangeRoom}*/}
              {/*  // activeFlag={activeFlag.noticeFlag}*/}
              {/*/>*/}
            </IntroduceWrapper>
          </ContainerCard>
        </ScrollWrapper>
      </ScrollContainer>
      <StartNextBtn
        text={'다음'}
        StartNextPage={'togetherPostPlace'}
        navigation={navigation}
        isActive={isActive}
        // validation={() => {
        //   return titleValidation() && blankValidation();
        // }}
      />
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
  border-color: ${(props: IColorChangeProps) => (props.borderColor ? props.borderColor : '#acacac')};
  font-size: 15px;
  color: #6f6f6f;
`;

const InputBoxWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const InputBoxTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const InputBoxData = styled.TextInput`
  padding: 5px 10px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${(props: IColorChangeProps) => (props.borderColor ? props.borderColor : '#acacac')};
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

const IntroduceWrapper = styled.View`
  display: flex;
  width: 100%;
  margin-bottom: 100px;
`;
