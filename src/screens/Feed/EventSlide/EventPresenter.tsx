import React from 'react';
import styled from 'styled-components/native';

interface IContainerProps {
  isOpen: boolean;
}

export default ({navigation, eventData}) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {eventData.map((item, idx) => (
              <EventWrapper key={idx}>
                <EventImageWrapper
                  onPress={() => {
                    navigation.navigate('eventDetail');
                  }}>
                  <EventImage source={item.image} />
                </EventImageWrapper>
                <EventTextWrapper>
                  <EventOpenWrapper isOpen={item.isOpen}>
                    <EventOpenText>
                      {item.isOpen ? '진행중' : '진행종료'}
                    </EventOpenText>
                  </EventOpenWrapper>
                  <EventTitle>{item.title}</EventTitle>
                  <EventContent>{item.content}</EventContent>
                  <EventDate>{item.date}</EventDate>
                </EventTextWrapper>
              </EventWrapper>
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

const EventWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  border-bottom-width: 3px;
  border-color: #f3f3f3;
  padding: 20px;
`;

const EventImageWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 40%;
  border-width: 1px;
  border-color: #dfdfdf;
  margin-right: 10px;
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
  width: 55%;
`;

const EventOpenWrapper = styled.View`
  margin-right: 5px;
  width: 40%;
  border-radius: 5px;
  padding: 5px;
  background-color: ${(props: IContainerProps) =>
    props.isOpen ? '#007bf1' : '#b3b3b3'};
`;

const EventOpenText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
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
  font-size: 14px;
  color: #686868;
  padding: 5px 0;
`;

const EventDate = styled.Text`
  width: 100%;
  font-size: 14px;
  color: #bebebe;
  padding: 5px 0;
`;
