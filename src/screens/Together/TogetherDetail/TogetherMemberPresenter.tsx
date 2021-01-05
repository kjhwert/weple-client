import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
}

export default ({navigation, member}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {member.map((item, idx) => (
              <MemberWrapper key={idx}>
                <ProfileImage source={item.image} />
                <MemberRecordWrapper>
                  <MemberNameBtn onPress={() => {}}>
                    <MemberText>{item.name}</MemberText>
                  </MemberNameBtn>
                  <BestRecordWrap>
                    <BestRecordText>{item.bestText}</BestRecordText>
                  </BestRecordWrap>
                  <BestRecordWrap>
                    <BestRecordText>{item.bestText}</BestRecordText>
                  </BestRecordWrap>
                  <BestRecordWrap>
                    <BestRecordText>{item.bestText}</BestRecordText>
                  </BestRecordWrap>
                </MemberRecordWrapper>
              </MemberWrapper>
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
  background-color: #fff;
`;

const MemberWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #e0e0e0;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 20px;
`;

const MemberRecordWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  margin-top: 10px;
`;

const MemberNameBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  padding: 5px 0;
  align-items: center;
  justify-content: flex-start;
`;

const MemberText = styled.Text`
  font-size: 13px;
  color: #333;
  margin-bottom: 5px;
`;

const BestRecordWrap = styled.View`
  display: flex;
  flex-flow: row;
  width: 20%;
  padding: 5px;
  align-items: center;
  margin-left: 5px;
`;

const BestRecordText = styled.Text`
  font-size: 14px;
  color: #6d6d6d;
  text-align: center;
  width: 100%;
`;
