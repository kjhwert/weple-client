import React, {useEffect, useState} from 'react';
import TogetherCommentPresenter from './TogetherCommentPresenter';
import Loading from '../../../components/Loading';
import {togetherApi} from '../../../module/api';
import {ITogetherComments} from '../../../module/type/together';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<Array<ITogetherComments>>([]);
  const [userComment, setUserComment] = useState({
    togetherId: 0,
    description: '',
  });

  const getComments = async () => {
    const id = route?.params?.id;
    if (!id) {
      navigation.goBack();
    }
    setUserComment({...userComment, togetherId: id});
    const {data, statusCode} = await togetherApi.getComment(id);
    if (statusCode === 200) {
      setComments(data);
    }
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

  useEffect(() => {
    getComments();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <TogetherCommentPresenter
      comments={comments}
      userComment={userComment}
      onChangeDescription={onChangeDescription}
      finishComments={finishComments}
    />
  );
};
