import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
  isNew: boolean;
}

export default ({navigation, member}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {member.map((item, idx) => (
              <MemberWrapper key={idx}>
                <ProfileImageWrapper onPress={() => {}}>
                  <ProfileImage source={item.image} />
                </ProfileImageWrapper>
                <MemberTextWrapper>
                  <MemberText>{item.name}</MemberText>
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

const Card = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const MemberWrapper = styled.View`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

const ProfileImageWrapper = styled.TouchableOpacity`
  display: flex;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 10px;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const MemberTextWrapper = styled.View`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 60%;
  height: 100%;
  margin-right: 5px;
`;

const MemberText = styled.Text`
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  color: #333;
  padding-bottom: 5px;
`;
