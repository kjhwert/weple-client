import React, {useState, useEffect} from 'react';
import MemberPresenter from './TogetherMemberPresenter';
import {togetherApi} from '../../../module/api';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const [togetherMemberData, setTogetherMemberData] = useState([
    {
      togetherId: 0,
      userId: 0,
      userImage: '',
      userNickName: '',
      toId: null,
      isUserFollowed: '',
    },
  ]);

  const getTogetherMember = async () => {
    const id = route.params?.togertherId;
    const {data, statusCode} = await togetherApi.togetherMember(id);
    if (statusCode !== 200) {
    } else {
      setTogetherMemberData(data);
    }
  };

  useEffect(() => {
    getTogetherMember();
  }, []);

  return <MemberPresenter navigation={navigation} togetherMemberData={togetherMemberData} />;
};
