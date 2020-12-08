import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
  isOpen: boolean;
}

export default ({navigation, eventData}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            {eventData.map((item, idx) => (
              <EventWrapper key={idx}>
                <EventImageWrapper onPress={() => {}}>
                  <EventImage source={item.image} />
                </EventImageWrapper>
                <EventTextWrapper>
                  <EventOpenWrapper isOpen={item.isOpen}>
                    <EventOpenText>
                      {item.isOpen ? '진행중' : '진행종료'}
                    </EventOpenText>
                  </EventOpenWrapper>
                  <EventTitleBtn onPress={() => {}}>
                    <EventTitle>{item.title}</EventTitle>
                  </EventTitleBtn>
                  <EventContent>{item.content}</EventContent>
                  <EventDate>{item.date}</EventDate>
                </EventTextWrapper>
              </EventWrapper>
            ))}
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
  justify-content: flex-start;
  border-bottom-width: 1px;
  border-color: #f3f3f3;
  padding: 20px;
`;

const EventImageWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 45%;
  border-width: 1px;
  border-color: #dfdfdf;
  margin-right: 10px;
`;

const EventImage = styled.Image`
  width: 100%;
  height: 100px;
`;

const EventTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
`;

const EventOpenWrapper = styled.View`
  margin-right: 5px;
  width: 40%;
  border-radius: 5px;
  padding: 4px;
  background-color: ${(props: IProps) =>
    props.isOpen ? '#007bf1' : '#b3b3b3'};
`;

const EventOpenText = styled.Text`
  font-size: 11px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const EventTitleBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
`;

const EventTitle = styled.Text`
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  color: #333333;
  padding: 5px 0;
`;

const EventContent = styled.Text`
  width: 100%;
  font-size: 10px;
  color: #686868;
  padding: 5px 0;
`;

const EventDate = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #bebebe;
`;
