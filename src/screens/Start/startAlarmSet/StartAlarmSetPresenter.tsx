import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import {SnsBtn, StartNextBtn} from '../../../components/SnsAccountBtn';

interface IProps {
  navigation: any;
  alarmType: any;
  alarmTypeClick: Function;
  isActive: boolean;
}

export default ({navigation, alarmType, alarmTypeClick, isActive}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <AlarmWrapper>
          <AlarmTitle>당신에 대한 알림</AlarmTitle>
          <AlarmContent>
            {'...좋아요를 받았을 때\n...팔로우 요청을 받았을 때'}
          </AlarmContent>
        </AlarmWrapper>

        <AlarmBtnWrapper>
          <SnsBtn
            text={'알람 설정 켜기'}
            isSelect={alarmType === 'ON'}
            onPress={() => {
              alarmTypeClick('ON');
            }}
          />
          <SnsBtn
            text={'나중에 설정하기'}
            isSelect={alarmType === 'OFF'}
            onPress={() => {
              alarmTypeClick('OFF');
            }}
          />
        </AlarmBtnWrapper>
      </ContainerCard>

      <StartNextBtn
        StartNextPage={'welcome'}
        text={'다음'}
        navigation={navigation}
        isActive={isActive}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const AlarmWrapper = styled.View`
  display: flex;
  width: 100%;
`;

const AlarmTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

const AlarmContent = styled.Text`
  font-size: 13px;
  text-align: left;
  line-height: 25px;
  color: #6f6f6f;
  padding: 30px 0px 60px 0px;
`;

const AlarmBtnWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
