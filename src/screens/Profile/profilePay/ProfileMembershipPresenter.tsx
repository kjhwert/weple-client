import React from 'react';
import styled from 'styled-components/native';
import ContainerCard from '../../../components/ContainerCard';
import NextBtn from '../../../components/NextBtn';

interface IProps {
  navigation: any;
  isClick: boolean;
}

export default ({navigation, member}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <ContainerCard>
            {member.map((item, idx) => (
              <MemberWrapper key={idx}>
                <MembershipWrapper onPress={() => {}}>
                  <MembershipPeriod>{item.period}</MembershipPeriod>
                  <MembershipMark></MembershipMark>
                </MembershipWrapper>
                <MemberTextWrapper>
                  <MemberBtn>
                    <MemberText>{item.titel}</MemberText>
                  </MemberBtn>
                  <CommentText>{item.comment}</CommentText>
                  <MoneyText>{item.money}</MoneyText>
                </MemberTextWrapper>
              </MemberWrapper>
            ))}
          </ContainerCard>
        </ScrollWrapper>
      </ScrollContainer>
      <NextBtn nextPage={'profileActiveMain'} navigation={navigation}>
        {`결제`}
      </NextBtn>
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

const MemberWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: #e4e4e4;
`;

const MembershipWrapper = styled.TouchableOpacity`
  display: flex;
  width: 20%;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: #007bf1;
`;

const MembershipPeriod = styled.Text`
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

const MembershipMark = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background-color: #fff;
  position: absolute;
  left: -6px;
  border-right-width: 1px;
  border-color: #e4e4e4;
`;

const MemberTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  margin: 10px;
`;

const MemberBtn = styled.TouchableOpacity`
  display: flex;
  width: 100%;
`;

const MemberText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #040404;
  margin-bottom: 5px;
`;

const CommentText = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #8f8f8f;
  margin-bottom: 5px;
`;

const MoneyText = styled.Text`
  width: 100%;
  font-size: 11px;
  color: #505050;
`;
