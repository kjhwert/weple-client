import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../../../components/ContainerCard';
import {getTotalTime} from '../../../../../components/CommonTime';

interface IProps {
  inquryAskDetail: any;
}

export default ({inquryAskDetail}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            <AskDetailWrapper>
              <AskDetailTextWrapper>
                <AskDetailTitle>{inquryAskDetail.requestTitle}</AskDetailTitle>
                <AskDetailDate>{getTotalTime(inquryAskDetail.requestDate)}</AskDetailDate>
              </AskDetailTextWrapper>
              <FollowBtn backgroundColor={inquryAskDetail.requestStatus}>
                <FollowBtnText>{inquryAskDetail.requestStatus ? '답변완료' : '미답변'}</FollowBtnText>
              </FollowBtn>
            </AskDetailWrapper>
            <AskWrapper vertical={true}>
              <AskText>{inquryAskDetail.requestDescription}</AskText>
            </AskWrapper>
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

const AskDetailWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const AskDetailTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 72%;
  height: 100%;
  margin-right: 5px;
`;

const AskDetailTitle = styled.Text`
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

const AskDetailDate = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #999;
`;

const FollowBtn = styled.TouchableOpacity`
  width: 23%;
  padding: 7px;
  border-radius: 5px;
  background-color: ${({backgroundColor}: {backgroundColor: string}) => (backgroundColor ? '#00bbc7' : '#bcbcbc')};
`;

const FollowBtnText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;

const AskWrapper = styled.ScrollView`
  display: flex;
  width: 100%;
  height: 300px;
  padding: 10px;
  border-width: 1px;
  border-color: #bcbcbc;
  background-color: #f4f4f4;
`;

const AskText = styled.Text`
  font-size: 13px;
  color: #555555;
  text-align: left;
  margin-bottom: 20px;
`;
