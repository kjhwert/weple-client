import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../../../components/ContainerCard';

interface IProps {
  inquryAnswerDetail: any;
}

export default ({inquryAnswerDetail}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <AskDetailWrapper>
          <AskDetailTextWrapper>
            <AskDetailTitle>{inquryAnswerDetail.requestTitle}</AskDetailTitle>
            <AskDetailDate>{inquryAnswerDetail.requestDate}</AskDetailDate>
          </AskDetailTextWrapper>
          <FollowBtn backgroundColor={inquryAnswerDetail.requestStatus}>
            <FollowBtnText>{inquryAnswerDetail.requestStatus ? '답변완료' : '미답변'}</FollowBtnText>
          </FollowBtn>
        </AskDetailWrapper>

        <AskWrapper vertical={true}>
          <AskText>{inquryAnswerDetail.requestDescription}</AskText>
        </AskWrapper>

        <AnswerDetailWrapper>
          <AskDetailTextWrapper>
            <AskDetailTitle>문의에 대한 답변입니다.</AskDetailTitle>
            <AskDetailDate>{inquryAnswerDetail.responseDate}</AskDetailDate>
          </AskDetailTextWrapper>
        </AnswerDetailWrapper>
        <AskWrapper>
          <AskText>{inquryAnswerDetail.responseDescription}</AskText>
        </AskWrapper>
      </ContainerCard>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const AskDetailWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
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
  font-size: 15px;
  font-weight: bold;
  color: #747474;
  padding-bottom: 5px;
`;

const AskDetailDate = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #999;
  padding-bottom: 5px;
`;

const FollowBtn = styled.TouchableOpacity`
  width: 23%;
  padding: 7px;
  align-items: center;
  justify-content: center;
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
  height: 200px;
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

const AnswerDetailWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 20px;
`;
