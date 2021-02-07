import React, {useContext, useEffect} from 'react';
import styled from 'styled-components/native';
import RecordContext from '../module/context/RecordContext';
import {IRecordContext} from '../module/type/recordContext';
import AlertContext from '../module/context/AlertContext';
import ConfirmAlert from './ConfirmAlert';
import FeedContext from '../module/context/FeedContext';

interface IProps {
  navigation: any;
  route?: any;
}

export default ({navigation, route}: IProps) => {
  const {changeTabBarVisible}: any = useContext(FeedContext);

  const onPressed = () => {
    changeTabBarVisible();
    navigation.goBack();
  };

  return (
    <Container onPress={onPressed}>
      <ArrowImage source={require('../assets/arrow_white_icon.png')} />
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
