import React, {useState, useEffect} from 'react';
import TogetherDetailListPresenter from './TogetherDetailListPresenter';
import {togetherApi} from '../../../module/api';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [userList, setUserList] = useState({
    togetherCount: 0,
    togethers: [],
  });

  // 내가 개설한 모임 조회
  const getTogether = async () => {
    const {data, statusCode} = await togetherApi.userOpenList();
    // console.log('togetherUserData:', data);

    if (statusCode !== 200) {
    } else {
      setUserList(data);
    }
  };

  useEffect(() => {
    getTogether();
  }, []);

  return <TogetherDetailListPresenter navigation={navigation} userList={userList} />;
};
