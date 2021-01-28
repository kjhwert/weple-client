import React, {useState, useEffect, useContext} from 'react';
import TogetherDetailPresenter from './TogetherDetailPresenter';
import {togetherApi} from '../../../module/api';
import AlertContext from '../../../module/context/AlertContext';
import CheckAlert from '../../../components/CheckAlert';
import ConfirmAlert from '../../../components/ConfirmAlert';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);

  const [listDetail, setListDetail] = useState({
    userCount: 0,
    together: {
      id: 0,
      title: '',
      Place: '',
      price: '',
      limitDate: '',
      description: '',
      recommend: '',
      notice: '',
      address: '',
      thumbnail: '',
      commentNickName: null,
      commentImage: null,
      commentDescription: null,
      isUserJoined: '0',
    },
    commentCount: 0,
  });

  const getTogethertDetail = async () => {
    const id = route.params?.id;
    const {data, statusCode} = await togetherApi.userOpenDetail(id);
    if (statusCode !== 200) {
    } else {
      setListDetail(data);
    }
  };

  const togetherInto = async () => {
    const id = route?.params?.id;
    const {statusCode} = await togetherApi.togetherIn(id);
    if (statusCode !== 201) {
    } else {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'check',
            title: '해당 모임에 참여되었습니다.',
            description: '',
          }}
          checked={() => {
            navigation.navigate('togetherDetail', {refresh: true});
          }}
        />,
      );
    }
  };

  const outOfOkAlert = async () => {
    return setAlertVisible(
      <CheckAlert
        check={{
          type: 'check',
          title: '완료되었습니다.',
          description: '',
        }}
        checked={() => {
          navigation.navigate('togetherMain', {refresh: true});
        }}
      />,
    );
  };

  const togetherOutOf = async () => {
    return setAlertVisible(
      <ConfirmAlert
        confirm={{
          type: 'warning',
          title: '해당 모임에서 나가시겠습니까?',
          description: '',
          confirmedText: '확인',
          canceledText: '취소',
        }}
        canceled={() => {}}
        confirmed={async () => {
          const id = route?.params?.id;
          const {statusCode} = await togetherApi.togetherOut(id);
          if (statusCode !== 201) {
          } else {
            outOfOkAlert();
          }
        }}
      />,
    );
  };

  useEffect(() => {
    getTogethertDetail();
  }, []);

  useEffect(() => {
    if (route.params?.refresh) getTogethertDetail();
  }, [route.params?.refresh]);

  return (
    <TogetherDetailPresenter
      navigation={navigation}
      listDetail={listDetail}
      togetherInto={togetherInto}
      togetherOutOf={togetherOutOf}
    />
  );
};
