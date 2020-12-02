import React from 'react';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
  isClick: boolean;
  isFollow: boolean;
}

export default ({navigation, menuList, member}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            <Line></Line>
            <MenuBarWrapper>
              {menuList.map((item, idx) => (
                <MenuWrapper key={idx} isClick={item.isClick}>
                  <MenuBtn
                    onPress={() => {
                      navigation.navigate('followingMember');
                    }}>
                    <MenuText isClick={item.isClick}>{item.name}</MenuText>
                    <MenuNumberText isClick={item.isClick}>
                      {item.number}
                    </MenuNumberText>
                  </MenuBtn>
                </MenuWrapper>
              ))}
            </MenuBarWrapper>
            <Line></Line>

            {member.map((item, idx) => (
              <MemberWrapper key={idx}>
                <ProfileImage source={item.image} />
                <MemberTextWrapper>
                  <MemberBtn onPress={() => {}}>
                    <MemberText>{item.name}</MemberText>
                  </MemberBtn>
                  <FollowBtn isFollow={item.isFollow}>
                    <FollowBtnText isFollow={item.isFollow}>
                      {item.isFollow ? '팔로우' : '팔로우 중'}
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
  border-color: ${(props: IProps) => (props.isClick ? '#007bf1' : '#fff')};
`;

const MenuBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row wrap;
  align-items: center;
  padding: 5px 0;
`;

const MenuText = styled.Text`
  font-size: 15px;
  color: ${(props: IProps) => (props.isClick ? '#007bf1' : '#333')};
  font-weight: bold;
  text-align: center;
  margin-right: 5px;
  padding: 10px 0;
`;

const MenuNumberText = styled.Text`
  font-size: 15px;
  color: ${(props: IProps) => (props.isClick ? '#007bf1' : '#333')};
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
  background-color: ${(props: IProps) => (props.isFollow ? '#007bf1' : '#fff')};
  border-width: 1px;
  border-color: #007bf1;
`;

const FollowBtnText = styled.Text`
  color: ${(props: IProps) => (props.isFollow ? '#fff' : '#007bf1')};
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
