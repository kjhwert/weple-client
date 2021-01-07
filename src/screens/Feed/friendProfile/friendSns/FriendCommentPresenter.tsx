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
                  <MemberNameBtn>
                    <MemberText>{item.name}</MemberText>
                  </MemberNameBtn>
                  <CommentText multiline={true}>{item.comment}</CommentText>
                </MemberTextWrapper>

                <DotMoreBtn>
                  <DotMoreImage source={require('../../../../assets/dotMore.png')} />
                </DotMoreBtn>
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
  width: 69%;
  height: 100%;
  margin-right: 5px;
`;

const MemberNameBtn = styled.TouchableOpacity`
  width: 100%;
`;

const MemberText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #333;
  padding-bottom: 5px;
`;

const CommentText = styled.TextInput`
  width: 100%;
  font-size: 13px;
  color: #333;
`;

const DotMoreBtn = styled.TouchableOpacity`
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: center;
`;

const DotMoreImage = styled.Image`
  width: 16px;
  height: 4px;
`;
