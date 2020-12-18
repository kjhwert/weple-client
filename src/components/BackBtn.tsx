import React, {useContext} from 'react';
import styled from 'styled-components/native';
import RecordContext from '../module/context/RecordContext';
import {IRecordContext} from '../module/type/recordContext';

interface IProps {
  navigation: any;
  route?: any;
}

export default ({navigation, route}: IProps) => {
  const {onChangeBackButtonAlert}: IRecordContext = useContext(RecordContext);
  return (
    <Container
      onPress={() => {
        if (route && route.name === 'recordFinish') {
          return onChangeBackButtonAlert && onChangeBackButtonAlert();
        }
        navigation.goBack();
      }}>
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
