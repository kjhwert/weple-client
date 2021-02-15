import React, {useContext, useEffect, useState} from 'react';
import FriendCommentPresenter from './FriendCommentPresenter';
import Loading from '../../../../components/Loading';
import {feedApi} from '../../../../module/api';
import {IFeedComments} from '../../../../module/type/feed';
import AlertContext from '../../../../module/context/AlertContext';
import CheckAlert from '../../../../components/CheckAlert';
import ModifyAlert from '../../../../components/ModifyAlert';
import ConfirmAlert from '../../../../components/ConfirmAlert';
import {IFeedCreateComment} from '../../../../module/type/api';
import FeedContext from '../../../../module/context/FeedContext';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {increaseCommentCount, decreaseCommentCount}: any = useContext(FeedContext);
  const {setAlertVisible, setWarningAlertVisible}: any = useContext(AlertContext);
  const [commentStatus, setCommentStatus] = useState({
    id: 0,
    isModifiable: false,
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<Array<IFeedComments>>([]);
  const [userComment, setUserComment] = useState<IFeedCreateComment>({
    feedId: 0,
    description: '',
  });
  const getComments = async () => {
    const feedId = route?.params?.id;
    if (!feedId) {
      navigation.goBack();
    }
    setUserComment({...userComment, feedId});
    const {data, statusCode, message} = await feedApi.showComments(feedId);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setComments(data);
  };

  const onUpdateDescription = (text: string) => {
    setCommentStatus({...commentStatus, description: text});
  };

  const onChangeDescription = (e: string) => {
    setUserComment({...userComment, description: e});
  };

  const finishComments = async () => {
    const {statusCode, message} = await feedApi.createComment(userComment);
    if (statusCode !== 201) {
      return setWarningAlertVisible('댓글 등록에 실패했습니다.', message);
    }
    setUserComment({...userComment, description: ''});
    increaseCommentCount(userComment.feedId);
    await getComments();
    return setAlertVisible(
      <CheckAlert
        check={{
          type: 'check',
          title: message,
          description: '',
        }}
      />,
    );
  };

  const initializeCommentStatus = () => {
    setCommentStatus({
      ...commentStatus,
      isModifiable: false,
    });
  };

  const modifyComments = ({id, description}: IFeedComments) => {
    setCommentStatus({description, id, isModifiable: true});
  };

  const updateComment = async () => {
    const {description, id} = commentStatus;
    const {statusCode, message} = await feedApi.updateComment(id, description);
    if (statusCode !== 201) {
      return setWarningAlertVisible('댓글 수정에 실패했습니다.', message);
    }

    await initializeCommentStatus();
    await getComments();
  };

  const confirmDestroy = async (id: number) => {
    setAlertVisible(
      <ConfirmAlert
        confirm={{
          type: 'warning',
          title: '정말 삭제하시겠습니까?',
          description: '삭제된 댓글을 복구되지 않습니다.',
          confirmedText: '삭제',
          canceledText: '취소',
        }}
        confirmed={() => {
          destroyComment(id);
        }}
        canceled={() => {}}
      />,
    );
  };

  const destroyComment = async (id: number) => {
    const {statusCode, message} = await feedApi.destroyComment(id);
    if (statusCode !== 201) {
      return setWarningAlertVisible('삭제에 실패했습니다.', message);
    }

    decreaseCommentCount(userComment.feedId);
    await getComments();
  };

  const setModifyAlertVisible = (comment: IFeedComments) => {
    setAlertVisible(<ModifyAlert modify={() => modifyComments(comment)} destroy={() => confirmDestroy(comment.id)} />);
  };

  useEffect(() => {
    getComments();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <FriendCommentPresenter
      navigation={navigation}
      comments={comments}
      userComment={userComment}
      onChangeDescription={onChangeDescription}
      finishComments={finishComments}
      setModifyAlertVisible={setModifyAlertVisible}
      commentStatus={commentStatus}
      onUpdateDescription={onUpdateDescription}
      updateComment={updateComment}
    />
  );
};
