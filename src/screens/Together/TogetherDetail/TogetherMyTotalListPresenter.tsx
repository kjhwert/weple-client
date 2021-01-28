import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {togetherDate} from '../../../module/common';
import TogetherContext from '../../../module/context/TogetherContext';
import {getComma} from '../../../components/CommonTime';

interface IProps {
  navigation: any;
  userList: any;
}

export default ({navigation, userList}: IProps) => {
  const {getTogetherThumbnail, getTogetherActivityImage}: any = useContext(TogetherContext);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <RecruitTogetherWrapper>
              <RecruitTogetherBtn>
                <RecruitTogetherText>내가 개설한 모임</RecruitTogetherText>
                <RecruitTogetherNumber>{userList.length}</RecruitTogetherNumber>
              </RecruitTogetherBtn>
            </RecruitTogetherWrapper>
            {userList.map((item, idx) =>
              item.isOnProcess === '0' ? (
                <RecruitWrapperBlur key={idx}>
                  <RecruitImageWrapper
                    onPress={() => {
                      navigation.navigate('togetherMyDetail', {id: item.id});
                    }}>
                    <RecruitImage source={getTogetherThumbnail(item.thumbnail)} />
                    <RecordWrapper>
                      <RecordImage source={getTogetherActivityImage(item.activityImage)} />
                      <RecordText>{item.distance}KM</RecordText>
                    </RecordWrapper>
                  </RecruitImageWrapper>
                  <RecruitTextWrapper>
                    <RecruitTitleBtn
                      onPress={() => {
                        navigation.navigate('togetherMyDetail', {id: item.id});
                      }}>
                      <RecruitTitle>{item.title}</RecruitTitle>
                    </RecruitTitleBtn>
                    <RecruitAddress>{item.togetherPlace}</RecruitAddress>
                    <EntryFee>참가비 {getComma(item.togetherPrice)}원</EntryFee>
                    <Deadline>{togetherDate(item.limitDate)}</Deadline>
                  </RecruitTextWrapper>
                </RecruitWrapperBlur>
              ) : (
                <RecruitWrapper key={idx}>
                  <RecruitImageWrapper
                    onPress={() => {
                      navigation.navigate('togetherMyDetail', {id: item.id});
                    }}>
                    <RecruitImage source={getTogetherThumbnail(item.thumbnail)} />
                    <RecordWrapper>
                      <RecordImage source={getTogetherActivityImage(item.activityImage)} />
                      <RecordText>{item.distance}KM</RecordText>
                    </RecordWrapper>
                  </RecruitImageWrapper>
                  <RecruitTextWrapper>
                    <RecruitTitleBtn
                      onPress={() => {
                        navigation.navigate('togetherMyDetail', {id: item.id});
                      }}>
                      <RecruitTitle>{item.title}</RecruitTitle>
                    </RecruitTitleBtn>
                    <RecruitAddress>{item.togetherPlace}</RecruitAddress>
                    <EntryFee>참가비 {getComma(item.togetherPrice)}원</EntryFee>
                    <Deadline>{togetherDate(item.limitDate)}</Deadline>
                  </RecruitTextWrapper>
                </RecruitWrapper>
              ),
            )}
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

const RecruitTogetherWrapper = styled.View`
  display: flex;
  flex-flow: row;
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #eee;
`;

const RecruitTogetherBtn = styled.View`
  width: 70%;
  flex-flow: row wrap;
  padding: 5px 0;
  align-items: center;
  justify-content: flex-start;
`;

const RecruitTogetherText = styled.Text`
  font-size: 13px;
  color: #333;
  font-weight: bold;
  text-align: left;
  margin-right: 5px;
`;

const RecruitTogetherNumber = styled.Text`
  color: #007bf1;
  font-weight: bold;
  font-size: 13px;
  margin-right: 3px;
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

const RecruitWrapperBlur = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-color: #eee;
  opacity: 0.5;
  /* background-color: rgba(0, 0, 0, 0.1); */
`;
