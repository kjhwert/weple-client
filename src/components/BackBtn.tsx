import React, {useContext, useEffect} from 'react';
import styled from 'styled-components/native';
import RecordContext from '../module/context/RecordContext';
import {IRecordContext} from '../module/type/recordContext';
import AlertContext from '../module/context/AlertContext';
import ConfirmAlert from './ConfirmAlert';

interface IProps {
  navigation: any;
  route?: any;
}

export default ({navigation, route}: IProps) => {
  const {setAlertVisible, setAlertInvisible}: any = useContext(AlertContext);
  const {clearAllState}: IRecordContext = useContext(RecordContext);

  const onPressed = () => {
    if (route && route.name === 'recordFinish') {
      return setAlertVisible(
        <ConfirmAlert
          confirm={{
            type: 'warning',
            title: '종료하시겠습니까?',
            description: '기록된 데이터는 초기화됩니다.',
            confirmedText: '종료',
            canceledText: '취소',
          }}
          confirmed={() => {
            clearAllState && clearAllState();
            navigation.goBack();
          }}
          canceled={() => setAlertInvisible()}
        />,
      );
    }
    navigation.goBack();
  };

  return (
    <Container onPress={onPressed}>
      <ArrowImage source={require('../assets/arrowBlack.png')} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  margin-left: 10px;
  padding: 5px;
`;

const ArrowImage = styled.Image`
  width: 20px;
  height: 20px;
`;
