import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import NextBtn from '../../../components/NextBtn';

export default ({navigation}) => {
  return (
    <Container>
      <ContainerCard>
        <PlaceWrapper>
          <PlaceTitle>함께할 날짜, 시간을 선택해주세요. [필수]</PlaceTitle>
          <PlaceInput placeholder="날짜와 시간을 선택해주세요." />
          <PlaceTitle>시작할 위치를 입력해주세요. [필수]</PlaceTitle>
          <PlaceInput placeholder="예) 서울역 3번출구 앞" />
          <PlaceTitle>최대 인원을 입력해주세요. [필수]</PlaceTitle>
          <PlaceInput placeholder="숫자를 입력해주세요." />
          <PlaceTitle>참가비를 입력해주세요. [선택]</PlaceTitle>
          <PlaceInput placeholder="원단위로 입력해주세요." />
          <PlaceInfoText>
            참가비는 만나서 각자 사용할 예상 금액입니다.
          </PlaceInfoText>
        </PlaceWrapper>
      </ContainerCard>
      <NextBtn nextPage={'togetherPostmethod'} navigation={navigation}>
        {`다음`}
      </NextBtn>
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
  font-size: 12px;
  color: #6f6f6f;
`;

const PlaceInfoText = styled.Text`
  font-size: 11px;
  color: #69b6ff;
  font-weight: bold;
  text-align: left;
`;
