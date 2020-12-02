import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../../../components/ContainerCard';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  return (
    <Container>
      <ContainerCard>
        <AskDetailWrapper>
          <AskDetailTextWrapper>
            <AskDetailTitle>안녕하세요. 문의드립니다.</AskDetailTitle>
            <AskDetailDate>2020-01-01 11:11:11</AskDetailDate>
          </AskDetailTextWrapper>
          <FollowBtn>
            <FollowBtnText>답변완료</FollowBtnText>
          </FollowBtn>
        </AskDetailWrapper>

        <AskWrapper>
          <AskText>
            제가 문의하고 싶은 내용은 이것입니다. 제가 문의하고 싶은 내용은
            이것입니다. 제가 문의하고 싶은 내용은 이것입니다.
          </AskText>
        </AskWrapper>

        <AnswerDetailWrapper>
          <AskDetailTextWrapper>
            <AskDetailTitle>문의에 대한 답변 내용입니다.</AskDetailTitle>
            <AskDetailDate>2020-01-01 11:11:11</AskDetailDate>
          </AskDetailTextWrapper>
        </AnswerDetailWrapper>

        <AskWrapper>
          <AskText>
            문의에 대한 답변입니다. 문의에 대한 답변입니다. 문의에 대한
            답변입니다. 문의에 대한 답변입니다. 감사합니다.
          </AskText>
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
  background-color: #00bbc7;
`;

const FollowBtnText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;

const AskWrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 20px 10px;
  border-width: 1px;
  border-color: #bcbcbc;
  background-color: #f4f4f4;
`;

const AskText = styled.Text`
  font-size: 13px;
  color: #555555;
  text-align: left;
  margin-bottom: 5px;
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
