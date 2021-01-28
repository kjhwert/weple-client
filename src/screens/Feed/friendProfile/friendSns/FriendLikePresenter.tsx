import React from 'react';
import styled from 'styled-components/native';
import {BASE_URL} from '../../../../module/common';

interface IProps {
  users: Array<{id: number; userId: number; userNickName: string; userImage: string; isUserFollowed: string}>;
  userFollowAction: (userId: number) => void;
}

export default ({users, userFollowAction}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {users.map((user) => (
              <MemberWrapper key={user.id}>
                <ProfileImage source={{uri: `${BASE_URL}/${user.userImage}`}} />
                <MemberTextWrapper>
                  <MemberText>{user.userNickName}</MemberText>
                  {Number(user.isUserFollowed) !== 2 && (
                    <FollowBtn
                      isFollow={Number(user.isUserFollowed)}
                      onPress={() => {
                        userFollowAction(user.userId);
                      }}>
                      <FollowBtnText isFollow={Number(user.isUserFollowed)}>
                        {user.isUserFollowed === '1' ? '팔로우' : '팔로잉'}
                      </FollowBtnText>
                    </FollowBtn>
                  )}
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
  width: 26%;
  padding: 7px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props: {isFollow: number}) => (props.isFollow !== 1 ? '#007bf1' : '#fff')};
  border-width: 1px;
  border-color: #007bf1;
`;

const FollowBtnText = styled.Text`
  color: ${(props: {isFollow: number}) => (props.isFollow !== 1 ? '#fff' : '#007bf1')};
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
