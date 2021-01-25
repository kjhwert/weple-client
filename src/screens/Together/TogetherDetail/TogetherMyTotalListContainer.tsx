import React, {useState, useEffect, useContext} from 'react';
import TogetherMyTotalListPresenter from './TogetherMyTotalListPresenter';
import {togetherApi} from '../../../module/api';
import UserContext from '../../../module/context/UserContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {getUserId}: any = useContext(UserContext);

  const [userList, setUserList] = useState([]);

  const getTotalTogether = async (page: number) => {
    const id = await getUserId();
    const {data, statusCode} = await togetherApi.userOpenTotalList(id, page);
    if (statusCode !== 200) {
    } else {
      setUserList(data);
    }
  };

  useEffect(() => {
    getTotalTogether(1);
  }, []);

  return <TogetherMyTotalListPresenter navigation={navigation} userList={userList} />;
};
