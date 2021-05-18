import React from 'react';
import styled from 'styled-components/native';
import {ITogetherUsersStatistics} from '../../../module/type/together';
import {BASE_URL} from '../../../module/common';

interface IProps {
  users: Array<ITogetherUsersStatistics>;
}

export default ({users}: IProps) => {
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {users.length > 0 ? (
              <>
                {users.map((user) => (
                  <MemberWrapper key={user.userId}>
                    <ProfileImageWrap>
                      <ProfileImage
                        source={{uri: `${BASE_URL}/${user.userImage ? user.userImage : 'public/user/no_profile.png'}`}}
                      />
                    </ProfileImageWrap>
                    <MemberRecordWrapper>
                      <MemberNameBtn onPress={() => {}}>
                        <MemberName>{user.userNickName}</MemberName>
                      </MemberNameBtn>
                      <RecordWrapper>
                        {user.activities.map((activity, idx) => (
                          <BestRecordWrap key={idx}>
                            <ImageColor1 color={activity.activityColor}>
                              <BestImage source={{uri: `${BASE_URL}/${activity.activityImage}`}} />
                            </ImageColor1>
                            <BestRecordText>{activity.distance} km</BestRecordText>
                          </BestRecordWrap>
                        ))}
                      </RecordWrapper>
                    </MemberRecordWrapper>
                  </MemberWrapper>
                ))}
              </>
            ) : (
              <MemberInfoWrap>
                <MemberInfoText>현재 참여인원이 없습니다.</MemberInfoText>
              </MemberInfoWrap>
            )}
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
  background-color: #ffffff;
`;

const ScrollWrapper = styled.ScrollView``;

const Card = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
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

const ProfileImageWrap = styled.View`
  width: 20%;
  align-items: flex-start;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const MemberRecordWrapper = styled.View`
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`;

const MemberNameBtn = styled.TouchableOpacity`
  width: 100%;
  flex-flow: row;
  padding: 5px 0;
`;

const MemberName = styled.Text`
  font-size: 13px;
  color: #333333;
`;

const RecordWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

const BestRecordWrap = styled.View`
  display: flex;
  flex-flow: row;
  width: 33%;
  align-items: center;
`;

const ImageColor1 = styled.View`
  width: 30px;
  height: 20px;
  padding: 2px;
  border-radius: 5px;
  background-color: ${({color}: {color: string}) => (color ? color : '#007bf1')};
  align-items: center;
  justify-content: center;
`;

const BestImage = styled.Image`
  width: 15px;
  height: 15px;
`;

const BestRecordText = styled.Text`
  font-size: 10px;
  color: #6d6d6d;
  text-align: left;
  width: 68%;
  margin-left: 5px;
`;

const MemberInfoWrap = styled.View`
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
`;

const MemberInfoText = styled.Text`
  font-size: 15px;
  color: #333333;
  font-weight: bold;
  margin-top: 10px;
`;
