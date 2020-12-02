import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  isNew: boolean;
}

export default ({navigation, alarmData}: IProps) => {
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
                <AlarmBtnWrapper>
                  <AlarmBtn onPress={() => {}}>
                    <AlarmTitleText>{item.title}</AlarmTitleText>
                  </AlarmBtn>
                  <AlarmDateText>{item.date}</AlarmDateText>
                </AlarmBtnWrapper>
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
  padding: 10px;
  border-bottom-width: 3px;
  border-color: #f3f3f3;
`;

const AlarmMarkWrapper = styled.View`
  width: 10%;
  padding: 10px;
  align-items: flex-start;
  justify-content: flex-start;
`;

const AlarmMark = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: ${(props: IProps) => (props.isNew ? '#ff0d0d' : '#b5b5b5')};
`;

const AlarmBtnWrapper = styled.View`
  display: flex;
  flex-flow: column;
  width: 80%;
`;

const AlarmBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 5px 0;
  align-items: flex-start;
  justify-content: flex-start;
`;

const AlarmTitleText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
`;

const AlarmDateText = styled.Text`
  font-size: 11px;
  color: #7f7f7f;
  padding-bottom: 5px;
`;
