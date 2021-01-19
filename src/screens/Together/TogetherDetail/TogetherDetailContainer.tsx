import React, {useState, useEffect} from 'react';
import TogetherDetailPresenter from './TogetherDetailPresenter';
import {togetherApi} from '../../../module/api';

const content = [
  {
    id: 0,
    title: '모임하기 설명',
    content: '이 모임에 대한 소개입니다.',
  },
  {
    id: 1,
    title: '이런 분들께 추천합니다.',
    content: '이런 분들께 추천하는 내용입니다. 이런 분들께 추천하는 내용입니다.',
  },
  {
    id: 2,
    title: '공지사항',
    content: '공지사항 내용입니다.',
  },
];
interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const [userDetail, setUserDetail] = useState({
    togetherCount: 0,
    togethers: [],
  });

  // const getTogethertDetail = async () => {
  //   const id = route.params?.id;
  //   const {data, statusCode} = await togetherApi.userOpenList(id);

  //   if (statusCode !== 200) {
  //   } else {
  //     setUserDetail(data);
  //   }
  // };

  // useEffect(() => {
  //   getTogethertDetail();
  // }, []);

  return <TogetherDetailPresenter navigation={navigation} userDetail={userDetail} content={content} />;
};
