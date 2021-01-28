import React from 'react';
import styled from 'styled-components/native';
import {BASE_URL} from '../../../../../module/common';
import {getDate} from '../../../../../components/CommonTime';

interface IProps {
  navigation: any;
  eventList: any;
  pagingInfo: any;
  getEventList: Function;
}

export default ({navigation, eventList, pagingInfo, getEventList}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {eventList.map((item, idx) => (
              <EventWrapper key={idx}>
                <EventImageWrapper
                  onPress={() => {
                    navigation.navigate('setEventDetail', {id: item.id});
                  }}>
                  <EventImage source={{uri: BASE_URL + '/' + item.image}} />
                </EventImageWrapper>
                <EventTextWrapper>
                  <EventOpenWrapper backgroundColor={item.isOnGoing}>
                    <EventOpenText>{item.isOnGoing ? '진행중' : '진행종료'}</EventOpenText>
                  </EventOpenWrapper>
                  <EventTitleBtn
                    onPress={() => {
                      navigation.navigate('setEventDetail', {id: item.id});
                    }}>
                    <EventTitle>{item.title}</EventTitle>
                  </EventTitleBtn>
                  <EventContent>{item.description}</EventContent>
                  <EventDate>{getDate(item.createdAt)}</EventDate>
                </EventTextWrapper>
              </EventWrapper>
            ))}
          </Card>
          {pagingInfo.hasNextPage && (
            <MoreBtnWrapper>
              <MoreButton
                onPress={() => {
                  getEventList(pagingInfo.page + 1);
                }}>
                <MoreBtnText>더보기</MoreBtnText>
              </MoreButton>
            </MoreBtnWrapper>
          )}
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
  flex: 9;
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
  background-color: ${({backgroundColor}: {backgroundColor: string}) => (backgroundColor ? '#007bf1' : '#b3b3b3')};
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
  padding-top: 5px;
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

const MoreBtnWrapper = styled.View`
  display: flex;
  flex-flow: row;
  width: 100%;
  padding: 20px 0;
  margin: 10px 0;
  flex: 1;
`;

const MoreButton = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 0;
  align-items: center;
  position: absolute;
  bottom: 0px;
`;

const MoreBtnText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #333;
`;
