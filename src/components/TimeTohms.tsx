import React from 'react';
import styled from 'styled-components/native';
import {secondsToHms} from '../module/common';

interface IProps {
  duration: number;
}

export default ({duration}: IProps) => {
  const {hour, minute, second} = secondsToHms(duration);
  return (
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
  );
};

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
