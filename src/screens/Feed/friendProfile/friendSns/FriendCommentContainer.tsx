import React, {useContext, useEffect, useState} from 'react';
import FriendCommentPresenter from './FriendCommentPresenter';
import Loading from '../../../../components/Loading';
import {feedApi} from '../../../../module/api';
import {IFeedComments} from '../../../../module/type/feed';
import AlertContext from '../../../../module/context/AlertContext';
import CheckAlert from '../../../../components/CheckAlert';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<Array<IFeedComments>>([]);
  const [userComment, setUserComment] = useState({
    feed: 0,
    description: '',
  });
  const getComments = async () => {
    const id = route?.params?.id;
    if (!id) {
      navigation.goBack();
    }
    setUserComment({...userComment, feed: id});
    const {data, statusCode, message} = await feedApi.showComments(id);
    if (statusCode !== 200) {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '데이터 조회에 실패했습니다.',
            description: message,
          }}
        />,
      );
    }
    setComments(data);
  };

  const onChangeDescription = (e: string) => {
    setUserComment({...userComment, description: e});
  };

  const finishComments = async () => {
    const {statusCode, message} = await feedApi.createComment(userComment);
    if (statusCode !== 201) {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '데이터 조회에 실패했습니다.',
            description: message,
          }}
        />,
      );
    }
    setUserComment({...userComment, description: ''});
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

  useEffect(() => {
    getComments();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <FriendCommentPresenter
      comments={comments}
      userComment={userComment}
      onChangeDescription={onChangeDescription}
      finishComments={finishComments}
    />
  );
};
