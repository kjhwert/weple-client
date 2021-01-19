import React from 'react';
import styled from 'styled-components/native';
import {getDate} from '../../../../../components/CommonTime';

interface IProps {
  navigation: any;
  noticeList: any;
  pagingInfo: any;
  getNoticeList: Function;
}

export default ({navigation, noticeList, pagingInfo, getNoticeList}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {noticeList.map((item, idx) => (
              <NoticeWrapper key={idx}>
                <NoticeBtnWrapper>
                  <NoticeBtn
                    onPress={() => {
                      navigation.navigate('setNoticeDetail', {id: item.id});
                    }}>
                    <NoticeTitleText>{item.title}</NoticeTitleText>
                  </NoticeBtn>
                  <NoticeDateText>{getDate(item.createdAt)}</NoticeDateText>
                </NoticeBtnWrapper>
              </NoticeWrapper>
            ))}
          </Card>
          {pagingInfo.hasNextPage && (
            <MoreBtnWrapper>
              <MoreButton
                onPress={() => {
                  getNoticeList(pagingInfo.page + 1);
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

const NoticeWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  width: 100%;
  padding: 10px 20px;
  border-bottom-width: 2px;
  border-color: #f3f3f3;
`;

const NoticeBtnWrapper = styled.View`
  display: flex;
  flex-flow: column;
  width: 80%;
`;

const NoticeBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 5px 0;
  align-items: flex-start;
  justify-content: flex-start;
`;

const NoticeTitleText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
`;

const NoticeDateText = styled.Text`
  font-size: 11px;
  color: #7f7f7f;
  padding-bottom: 5px;
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
