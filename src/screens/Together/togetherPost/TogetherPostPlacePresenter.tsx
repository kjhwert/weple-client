import React, {useContext} from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {InputBox} from '../../../components/CommonInput';
import {StartNextBtn} from '../../../components/CommonBtn';
import TogetherContext from '../../../module/context/TogetherContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {createRoom, onChangeRoom}: any = useContext(TogetherContext);

  return (
    <Container>
      <ContainerCard>
        <PlaceWrapper>
          <InputBox
            title={'모임 날짜, 시간을 선택해주세요. [필수]'}
            placeholder="날짜와 시간을 선택해주세요."
            name="meetingDate"
          />

          <PlaceTitle>시작할 위치를 입력해주세요. [필수]</PlaceTitle>
          <PlaceInput
            placeholder="예&#41; 서울역 3번출구 앞"
            name="togetherPlace"
            value={createRoom.togetherPlace}
            onChange={onChangeRoom}
          />

          <PlaceTitle>최대 인원을 입력해주세요. [필수]</PlaceTitle>
          <PlaceInput
            placeholder="숫자를 입력해주세요."
            name="maxMember"
            value={createRoom.maxMember}
            onChange={onChangeRoom}
          />

          <PlaceTitle>참가비를 입력해주세요. [선택]</PlaceTitle>
          <PlaceInput
            placeholder="원단위로 입력해주세요."
            name="togetherPrice"
            value={createRoom.togetherPrice}
            onChange={onChangeRoom}
          />
          <PlaceInfoText>참가비는 만나서 각자 사용할 예상 금액입니다.</PlaceInfoText>
        </PlaceWrapper>
      </ContainerCard>

      <StartNextBtn StartNextPage={'togetherPostmethod'} text={'다음'} navigation={navigation} isActive={true} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const PlaceWrapper = styled.View`
  flex: 9;
  display: flex;
  width: 100%;
`;

const PlaceTitle = styled.Text`
  font-size: 12px;
  color: #6f6f6f;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const PlaceInput = styled.TextInput`
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #acacac;
  font-size: 15px;
  color: #6f6f6f;
`;

const PlaceInfoText = styled.Text`
  font-size: 11px;
  color: #69b6ff;
  font-weight: bold;
  text-align: left;
  bottom: 10px;
  padding: 0 5px;
`;
