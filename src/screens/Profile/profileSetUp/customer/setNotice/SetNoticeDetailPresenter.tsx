import React from 'react';
import styled from 'styled-components/native';
import {getDate} from '../../../../../components/CommonTime';

interface IProps {
  noticeDetail: any;
}

export default ({noticeDetail}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <NoticeWrapper>
              <NoticeTextWrapper>
                <NoticeTitle>{noticeDetail.title}</NoticeTitle>
                <NoticeDate>{getDate(noticeDetail.createdAt)}</NoticeDate>
              </NoticeTextWrapper>
              <NoticeContent>{noticeDetail.description}</NoticeContent>
            </NoticeWrapper>
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

const NoticeWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const NoticeTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #d4d4d4;
`;

const NoticeTitle = styled.Text`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: #747474;
  padding: 5px 0;
`;

const NoticeDate = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #9d9d9d;
  padding: 5px 0 10px 0;
`;

const NoticeContent = styled.Text`
  width: 100%;
  font-size: 13px;
  color: #555555;
  padding: 10px 0;
`;
