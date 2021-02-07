import React, {useState, useEffect, useContext} from 'react';
import MemberPresenter from './TogetherMemberPresenter';
import {togetherApi} from '../../../module/api';
import AlertContext from '../../../module/context/AlertContext';
import {ITogetherUsersStatistics} from '../../../module/type/together';

interface IProps {
  navigation: any;
  route: {
    params: {
      togetherId: number;
    };
  };
}

export default ({navigation, route}: IProps) => {
  const {setWarningAlertVisible}: any = useContext(AlertContext);
  const [users, setUsers] = useState<Array<ITogetherUsersStatistics>>([]);

  const getTogetherMember = async () => {
    const id = route.params.togetherId;
    const {data, statusCode, message} = await togetherApi.togetherMember(id);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }
    setUsers(data);
  };

  useEffect(() => {
    getTogetherMember();
  }, []);

  return <MemberPresenter navigation={navigation} users={users} />;
};
