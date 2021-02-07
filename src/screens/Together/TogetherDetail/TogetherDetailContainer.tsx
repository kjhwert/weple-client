import React, {useEffect, useContext} from 'react';
import TogetherDetailPresenter from './TogetherDetailPresenter';
import {togetherApi} from '../../../module/api';
import AlertContext from '../../../module/context/AlertContext';
import CheckAlert from '../../../components/CheckAlert';
import ConfirmAlert from '../../../components/ConfirmAlert';
import Loading from '../../../components/Loading';
import TogetherContext from '../../../module/context/TogetherContext';

interface IProps {
  navigation: any;
  route: {
    params: {id: number};
  };
}

export default ({navigation, route}: IProps) => {
  const {setAlertVisible, setWarningAlertVisible}: any = useContext(AlertContext);
  const {show, getShow}: any = useContext(TogetherContext);

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
    getShow(route.params.id);
  }, [route]);

  return !show ? (
    <Loading />
  ) : (
    <TogetherDetailPresenter
      navigation={navigation}
      show={show}
      togetherInto={togetherInto}
      togetherOutOf={togetherOutOf}
    />
  );
};
