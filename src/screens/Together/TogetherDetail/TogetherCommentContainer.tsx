import React, {useContext, useEffect, useState} from 'react';
import TogetherCommentPresenter from './TogetherCommentPresenter';
import Loading from '../../../components/Loading';
import {togetherApi} from '../../../module/api';
import {ITogetherComments} from '../../../module/type/together';
import AlertContext from '../../../module/context/AlertContext';
import ConfirmAlert from '../../../components/ConfirmAlert';
import ModifyAlert from '../../../components/ModifyAlert';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {setAlertVisible, setWarningAlertVisible}: any = useContext(AlertContext);
  const [loading, setLoading] = useState(false);
  const [commentStatus, setCommentStatus] = useState({
    id: 0,
    isModifiable: false,
    description: '',
  });
  const [comments, setComments] = useState<Array<ITogetherComments>>([]);
  const [userComment, setUserComment] = useState({
    togetherId: 0,
    description: '',
  });

  const getComments = async () => {
    setLoading(true);
    const id = route?.params?.id;
    if (!id) {
      navigation.goBack();
    }
    setUserComment({...userComment, togetherId: id});
    const {data, statusCode, message} = await togetherApi.getComment(id);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setComments(data);
    setLoading(false);
  };

  const onChangeDescription = (e: string) => {
    setUserComment({...userComment, description: e});
  };

  const finishComments = async () => {
    const id = route?.params?.id;
    const request = {
      description: userComment.description,
    };
    const {statusCode} = await togetherApi.createComment(id, request);
    if (statusCode === 201) {
      setUserComment({...userComment, description: ''});
      await getComments();
    }
  };

  const initializeCommentStatus = () => {
    setCommentStatus({
      ...commentStatus,
      isModifiable: false,
    });
  };

  const modifyComments = ({id, description}: ITogetherComments) => {
    setCommentStatus({description, id, isModifiable: true});
  };

  const updateComment = async () => {
    const {description, id} = commentStatus;
    const {statusCode, message} = await togetherApi.updateComment(id, description);
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
    const {statusCode, message} = await togetherApi.destroyComment(id);
    if (statusCode !== 201) {
      return setWarningAlertVisible('삭제에 실패했습니다.', message);
    }

    await getComments();
  };

  const setModifyAlertVisible = (comment: ITogetherComments) => {
    setAlertVisible(<ModifyAlert modify={() => modifyComments(comment)} destroy={() => confirmDestroy(comment.id)} />);
  };

  const onUpdateDescription = (text: string) => {
    setCommentStatus({...commentStatus, description: text});
  };

  useEffect(() => {
    getComments();
  }, [route]);

  return loading ? (
    <Loading />
  ) : (
    <TogetherCommentPresenter
      comments={comments}
      userComment={userComment}
      onChangeDescription={onChangeDescription}
      finishComments={finishComments}
      commentStatus={commentStatus}
      updateComment={updateComment}
      setModifyAlertVisible={setModifyAlertVisible}
      onUpdateDescription={onUpdateDescription}
    />
  );
};
