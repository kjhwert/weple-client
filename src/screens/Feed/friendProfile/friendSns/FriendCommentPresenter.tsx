import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {IFeedComments} from '../../../../module/type/feed';
import {ACTIVE_BUTTON, ACTIVE_TEXT, BASE_URL, INACTIVE_BUTTON} from '../../../../module/common';
import UserContext from '../../../../module/context/UserContext';
import {Text} from 'react-native';

interface IProps {
  navigation: any;
  comments: Array<IFeedComments>;
  description: string;
  onChangeDescription: (e: string) => void;
  finishComments: () => void;
  setModifyAlertVisible: (comment: IFeedComments) => void;
  commentStatus: {
    id: number;
    isModifiable: boolean;
    description: string;
  };
  onUpdateDescription: (text: string) => void;
  updateComment: () => void;
}

export default ({
  navigation,
  comments,
  onChangeDescription,
  finishComments,
  description,
  setModifyAlertVisible,
  commentStatus,
  onUpdateDescription,
  updateComment,
}: IProps) => {
  const {
    loginUser: {image},
  }: any = useContext(UserContext);

  return (
    <Container>
      <ScrollContainer>
        <ScrollWrapper>
          <Card>
            {comments.map((comment) => (
              <MemberWrapper
                key={comment.id}
                onPress={() => {
                  navigation.navigate('friendActive', {id: comment.userId});
                }}>
                <ProfileImageWrapper>
                  <ProfileImage
                    source={{
                      uri: `${BASE_URL}/${comment.userImage ? comment.userImage : 'public/user/no_profile.png'}`,
                    }}
                  />
                  <MemberTextWrapper>
                    <MemberText>{comment.userName}</MemberText>
                    {commentStatus.isModifiable && commentStatus.id === comment.id ? (
                      <CommentText
                        value={commentStatus.description}
                        modifiable={true}
                        onChangeText={onUpdateDescription}
                      />
                    ) : (
                      <CommentText editable={false} multiline={true} modifiable={false} value={comment.description} />
                    )}
                  </MemberTextWrapper>
                </ProfileImageWrapper>

                {comment.isLoginUserWrote === '1' ? (
                  commentStatus.isModifiable && commentStatus.id === comment.id ? (
                    <DotMoreBtn
                      onPress={() => {
                        updateComment();
                      }}>
                      <Text>??????</Text>
                    </DotMoreBtn>
                  ) : (
                    <DotMoreBtn
                      onPress={() => {
                        setModifyAlertVisible(comment);
                      }}>
                      <DotMoreImage source={require('../../../../assets/dotMore.png')} />
                    </DotMoreBtn>
                  )
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
            placeholder="???????????? ???????????????"
            value={description}
            onChangeText={onChangeDescription}
            clearButtonMode="always"
          />
          <WriteCommentButton onPress={finishComments}>
            <WriteCommentButtonText>??????</WriteCommentButtonText>
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

const MemberWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

const ProfileImageWrapper = styled.View`
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
  width: 70%;
  height: 100%;
  margin-right: 5px;
`;

const MemberText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #333;
  width: 100%;
  margin-bottom: -5px;
`;

const CommentText = styled.TextInput`
  width: 100%;
  font-size: 13px;
  color: #333;
  border-width: ${({modifiable}: {modifiable: boolean}) => (modifiable ? '1px' : '0px')};
  border-color: ${ACTIVE_TEXT};
  padding: 0;
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
