import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {ITogetherComments} from '../../../module/type/together';
import {ACTIVE_BUTTON, BASE_URL, INACTIVE_BUTTON} from '../../../module/common';
import UserContext from '../../../module/context/UserContext';
import {ITogetherCreateComment} from '../../../module/type/api';

interface IProps {
  comments: Array<ITogetherComments>;
  userComment: ITogetherCreateComment;
  onChangeDescription: (e: string) => void;
  finishComments: () => void;
}

export default ({comments, onChangeDescription, userComment, finishComments}: IProps) => {
  const {
    loginUser: {image, id},
  }: any = useContext(UserContext);
  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {comments.map((comment) => (
              <MemberWrapper key={comment.id}>
                <ProfileImageWrapper onPress={() => {}}>
                  <ProfileImage
                    source={{
                      uri: `${BASE_URL}/${comment.user.image ? comment.user.image : 'public/user/no_profile.png'}`,
                    }}
                  />
                  <MemberTextWrapper>
                    <MemberNameBtn>
                      <MemberText>{comment.user.nickName}</MemberText>
                    </MemberNameBtn>
                    <CommentText>{comment.description}</CommentText>
                  </MemberTextWrapper>
                </ProfileImageWrapper>

                {comment.user.id === id ? (
                  <DotMoreBtn onPress={() => {}}>
                    <DotMoreImage source={require('../../../assets/dotMore.png')} />
                  </DotMoreBtn>
                ) : (
                  <></>
                )}
              </MemberWrapper>
            ))}
          </Card>
        </ScrollWrapper>
        <CommentWrapper>
          <WriteCommentUserProfile
            source={{
              uri: `${BASE_URL}/${image ? image : 'public/user/no_profile.png'}`,
            }}
          />
          <WriteComment
            placeholder="코멘트를 달아보세요"
            value={userComment.description}
            onChangeText={onChangeDescription}
          />
          <WriteCommentButton onPress={finishComments}>
            <WriteCommentButtonText>전송</WriteCommentButtonText>
          </WriteCommentButton>
        </CommentWrapper>
      </ScrollContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const CommentWrapper = styled.View`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WriteCommentUserProfile = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const WriteComment = styled.TextInput`
  width: 60%;
  background-color: ${INACTIVE_BUTTON};
  padding: 5px 10px;
  border-radius: 5px;
`;

const WriteCommentButton = styled.TouchableOpacity`
  background-color: ${ACTIVE_BUTTON};
  padding: 10px 25px;
  border-radius: 5px;
`;

const WriteCommentButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
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
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

const ProfileImageWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 10px;
`;

const MemberTextWrapper = styled.View`
  display: flex;
  align-items: center;
  width: 65%;
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

const CommentText = styled.Text`
  width: 100%;
  font-size: 13px;
  color: #333;
`;

const DotMoreBtn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DotMoreImage = styled.Image`
  width: 16px;
  height: 4px;
`;
