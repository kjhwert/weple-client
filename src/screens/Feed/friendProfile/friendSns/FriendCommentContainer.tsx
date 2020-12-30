import React, {useEffect, useState} from 'react';
import FriendCommentPresenter from './FriendCommentPresenter';
import Loading from '../../../../components/Loading';
import {feedApi} from '../../../../module/api';
import {IFeedComments} from '../../../../module/type/feed';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<Array<IFeedComments>>([]);
  const [userComment, setUserComment] = useState({
    feedId: 0,
    description: '',
  });
  const getComments = async () => {
    const id = route?.params?.id;
    if (!id) {
      navigation.goBack();
    }
    setUserComment({...userComment, feedId: id});
    const {data, statusCode} = await feedApi.showComments(id);
    if (statusCode === 200) {
      setComments(data);
    }
  };

  const onChangeDescription = (e: string) => {
    setUserComment({...userComment, description: e});
  };

  const finishComments = async () => {
    const {statusCode} = await feedApi.createComment(userComment);
    if (statusCode === 201) {
      setUserComment({...userComment, description: ''});
      await getComments();
    }
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
