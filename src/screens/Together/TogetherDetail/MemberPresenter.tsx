import React from 'react';
import styled from 'styled-components/native';
import Card from '../../../components/Card';

interface IProps {
  navigation: any;
  isNew: boolean;
}

export default ({navigation, member}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card paddingTop={0}>
            {member.map((item, idx) => (
              <MemberWrapper key={idx}>
                <ProfileImage source={item.image} />
                <MemberTextWrapper>
                  <MemberText>{item.name}</MemberText>
                  <FollowBtn>
                    <FollowBtnText>팔로우</FollowBtnText>
                  </FollowBtn>
                </MemberTextWrapper>
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

const MemberWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 10px;
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

const MemberTextWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const MemberText = styled.Text`
  font-size: 13px;
  color: #333;
  margin-bottom: 5px;
`;

const FollowBtn = styled.TouchableOpacity`
  width: 30%;
  padding: 6px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #007bf1;
`;

const FollowBtnText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
