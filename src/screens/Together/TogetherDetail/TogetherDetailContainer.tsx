import React, {useState, useEffect, useContext} from 'react';
import TogetherDetailPresenter from './TogetherDetailPresenter';
import {togetherApi} from '../../../module/api';
import AlertContext from '../../../module/context/AlertContext';
import CheckAlert from '../../../components/CheckAlert';
import ConfirmAlert from '../../../components/ConfirmAlert';
import {IShowTogether} from '../../../module/type/together';
import Loading from '../../../components/Loading';

interface IProps {
  navigation: any;
  route: any;
}

export default ({navigation, route}: IProps) => {
  const {setAlertVisible, setWarningAlertVisible}: any = useContext(AlertContext);

  const [show, setShow] = useState<IShowTogether | null>(null);

  const getTogether = async () => {
    const id = route?.params?.id;
    if (!id) {
      return;
    }
    const {data, statusCode, message} = await togetherApi.userOpenDetail(id);
    if (statusCode !== 200) {
      return setWarningAlertVisible('데이터 조회에 실패했습니다.', message);
    }

    data.together.isUserJoined = !!+data.together.isUserJoined;
    data.together.isUsersTogether = !!+data.together.isUsersTogether;
    setShow(data);
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
    getTogether();
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
