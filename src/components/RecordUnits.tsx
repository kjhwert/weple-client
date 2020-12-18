import React from 'react';
import styled from 'styled-components/native';
import {secondsToHms} from '../module/common';

interface IProps {
  distance: number;
  speed: number;
  duration: number;
  calorie: number;
}

export default ({distance, speed, duration, calorie}: IProps) => {
  const {hour, minute, second} = secondsToHms(duration);

  return (
    <RecordWrapper>
      <RecordTextWrapper>
        <RecordCheckWrapper>
          <RecordNumber>
            {distance}
            <UnitNumber> km</UnitNumber>
          </RecordNumber>
          <RecordUnitText>Distance</RecordUnitText>
        </RecordCheckWrapper>
        <RecordCheckWrapper>
          <RecordNumber>
            {speed}
            <UnitNumber> km/h</UnitNumber>
          </RecordNumber>
          <RecordUnitText>Speed</RecordUnitText>
        </RecordCheckWrapper>
        <RecordCheckWrapper>
          <RecordDurationContainer>
            {hour > 0 && (
              <RecordDurationWrapper>
                <RecordNumber>{hour}</RecordNumber>
                <UnitNumber>h </UnitNumber>
              </RecordDurationWrapper>
            )}
            {minute > 0 && (
              <RecordDurationWrapper>
                <RecordNumber>{minute}</RecordNumber>
                <UnitNumber>m </UnitNumber>
              </RecordDurationWrapper>
            )}
            {second >= 0 && (
              <RecordDurationWrapper>
                <RecordNumber>{second}</RecordNumber>
                <UnitNumber>s</UnitNumber>
              </RecordDurationWrapper>
            )}
          </RecordDurationContainer>
          <RecordUnitText>Duration</RecordUnitText>
        </RecordCheckWrapper>
        <RecordCheckWrapper>
          <RecordNumber>
            {calorie}
            <UnitNumber> kcal</UnitNumber>
          </RecordNumber>
          <RecordUnitText>Calorie</RecordUnitText>
        </RecordCheckWrapper>
      </RecordTextWrapper>
    </RecordWrapper>
  );
};

const RecordWrapper = styled.View`
  display: flex;
  width: 90%;
  align-items: center;
  margin-top: 20px;
  padding: 10px 0;
  border-width: 1px;
  border-color: #eeeeee;
  box-shadow: 0px 3px 6px #e1e1e1;
`;

const RecordTextWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const RecordCheckWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
`;

const RecordDurationContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const RecordDurationWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const RecordNumber = styled.Text`
  font-size: 18px;
  color: #2f2f2f;
  font-weight: bold;
  text-align: center;
`;

const UnitNumber = styled.Text`
  font-size: 12px;
`;

const RecordUnitText = styled.Text`
  font-size: 12px;
  color: #ababab;
  font-weight: bold;
  text-align: center;
`;
