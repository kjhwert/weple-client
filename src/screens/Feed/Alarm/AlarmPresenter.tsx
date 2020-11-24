import React from 'react';
import styled from 'styled-components/native';

interface IContainerProps {
  isNew: boolean;
}

export default ({navigation, alarmData}) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {alarmData.map((item, idx) => (
              <AlarmWrapper key={idx}>
                <AlarmMarkWrapper>
                  <AlarmMark isNew={item.isNew}></AlarmMark>
                </AlarmMarkWrapper>
                <AlarmTextWrapper>
                  <AlarmText>{item.title}</AlarmText>
                  <AlarmDateText>{item.date}</AlarmDateText>
                </AlarmTextWrapper>
              </AlarmWrapper>
            ))}
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

const AlarmWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  border-bottom-width: 3px;
  border-color: #f3f3f3;
`;

const AlarmMarkWrapper = styled.View`
  width: 10%;
  padding: 10px;
  align-items: flex-start;
  justify-content: center;
`;

const AlarmMark = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: ${(props: IContainerProps) =>
    props.isNew ? '#ff0d0d' : '#b5b5b5'};
`;

const AlarmTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
`;

const AlarmText = styled.Text`
  font-size: 17px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
`;

const AlarmDateText = styled.Text`
  font-size: 15px;
  color: #7f7f7f;
  padding-bottom: 5px;
`;
