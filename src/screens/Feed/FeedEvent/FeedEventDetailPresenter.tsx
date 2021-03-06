import React from 'react';
import styled from 'styled-components/native';
import {IEventTypes} from '../../../module/type/event';
import {BASE_URL} from '../../../module/common';

interface IProps {
  navigation: any;
  event: IEventTypes;
}

export default ({navigation, event}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <EventWrapper>
              <EventTextWrapper>
                <EventTitle>{event.title}</EventTitle>
                <EventContent>{event.description}</EventContent>
              </EventTextWrapper>
            </EventWrapper>
            <EventImageWrapper>
              <EventImage source={{uri: `${BASE_URL}/${event.image}`}} />
            </EventImageWrapper>
          </ContainerCard>
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

const ContainerCard = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const EventWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const EventImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const EventImage = styled.Image`
  width: 100%;
  height: 150px;
`;

const EventTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const EventTitle = styled.Text`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: #333333;
  padding: 5px 0;
`;

const EventContent = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #686868;
  padding: 5px 0;
`;

const EventDate = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #bebebe;
  padding: 5px 0;
`;
