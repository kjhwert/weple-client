import React from 'react';
import styled from 'styled-components/native';
import {BASE_URL} from '../../../../module/common';

interface IProps {
  navigation: any;
  users: Array<{id: number; userId: number; userNickName: string; userImage: string; isUserFollowed: number}>;
  userFollowAction: (userId: number) => void;
}

export default ({navigation, users, userFollowAction}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {users.map((user) => (
              <MemberWrapper
                key={user.id}
                onPress={() => {
                  navigation.navigate('friendActive', {id: user.userId});
                }}>
                <ProfileImage
                  source={{uri: `${BASE_URL}/${user.userImage ? user.userImage : 'public/user/no_profile.png'}`}}
                />
                <MemberTextWrapper>
                  <MemberText>{user.userNickName}</MemberText>
                  {user.isUserFollowed !== 2 && (
                    <FollowBtn
                      isFollow={user.isUserFollowed}
                      onPress={() => {
                        userFollowAction(user.userId);
                      }}>
                      <FollowBtnText isFollow={user.isUserFollowed}>
                        {!user.isUserFollowed ? '팔로우' : '팔로잉'}
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

const MemberWrapper = styled.TouchableOpacity`
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
  background-color: ${({isFollow}: {isFollow: number}) => (!isFollow ? '#007bf1' : '#fff')};
  border-width: 1px;
  border-color: #007bf1;
`;

const FollowBtnText = styled.Text`
  color: ${({isFollow}: {isFollow: number}) => (!isFollow ? '#fff' : '#007bf1')};
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
