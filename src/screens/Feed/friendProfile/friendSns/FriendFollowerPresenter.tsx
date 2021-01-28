import React from 'react';
import styled from 'styled-components/native';
import {IUserFollow} from '../../../../module/type/user';
import {BASE_URL} from '../../../../module/common';

interface IProps {
  navigation: any;
  counts: {
    followingCount: number;
    followerCount: number;
  };
  pagination: {
    tab: string;
    page: number;
    hasNextPage: boolean;
  };
  followers: Array<IUserFollow>;
  switchingTabs: () => void;
  userFollow: (userId: number) => void;
}

export default ({counts, pagination, followers, switchingTabs, userFollow}: IProps) => {
  const setCounts = (tab: string) => {
    switch (tab) {
      case '팔로워':
        return counts.followerCount;
      case '팔로잉':
        return counts.followingCount;
    }
  };

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <Line></Line>
            <MenuBarWrapper>
              {['팔로워', '팔로잉'].map((tab, idx) => (
                <MenuWrapper key={idx} isClick={tab === pagination.tab}>
                  <MenuBtn onPress={switchingTabs}>
                    <MenuText isClick={tab === pagination.tab}>{tab}</MenuText>
                    <MenuNumberText isClick={tab === pagination.tab}>{setCounts(tab)}</MenuNumberText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>

            {followers.map(({id, userImage, userNickName, isUserFollowed}) => (
              <MemberWrapper key={id}>
                <ProfileImage source={{uri: `${BASE_URL}/${userImage}`}} />
                <MemberTextWrapper>
                  <MemberBtn onPress={() => {}}>
                    <MemberText>{userNickName}</MemberText>
                  </MemberBtn>
                  <FollowBtn
                    isFollow={isUserFollowed === '1'}
                    onPress={() => {
                      userFollow(id);
                    }}>
                    <FollowBtnText isFollow={isUserFollowed === '1'}>
                      {isUserFollowed === '1' ? '팔로우' : '팔로잉'}
                    </FollowBtnText>
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

const Card = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const Line = styled.View`
  width: 100%;
  padding: 5px;
  background-color: #f3f3f3;
`;

const MenuBarWrapper = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const MenuWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-width: 3px;
  border-color: ${(props: {isClick: boolean}) => (props.isClick ? '#007bf1' : '#fff')};
`;

const MenuBtn = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

const MenuText = styled.Text`
  font-size: 15px;
  color: ${(props: {isClick: boolean}) => (props.isClick ? '#007bf1' : '#333')};
  font-weight: bold;
  text-align: center;
  margin-right: 5px;
  padding: 10px 0;
`;

const MenuNumberText = styled.Text`
  font-size: 15px;
  color: ${(props: {isClick: boolean}) => (props.isClick ? '#007bf1' : '#333')};
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
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

const MemberBtn = styled.TouchableOpacity`
  max-width: 70%;
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
  background-color: ${(props: {isFollow: boolean}) => (props.isFollow ? '#007bf1' : '#fff')};
  border-width: 1px;
  border-color: #007bf1;
`;

const FollowBtnText = styled.Text`
  color: ${(props: {isFollow: boolean}) => (props.isFollow ? '#fff' : '#007bf1')};
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
