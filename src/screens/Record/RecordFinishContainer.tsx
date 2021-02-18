import React, {useContext} from 'react';
import RecordFinishPresenter from './RecordFinishPresenter';
import RecordContext from '../../module/context/RecordContext';
import Loading from '../../components/Loading';
import {View} from 'react-native';
import styled from 'styled-components/native';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {finishLoading}: any = useContext(RecordContext);
  const getAverageSpeed = (speed: Array<number>) => {
    if (speed.length === 0) {
      return 0;
    }
    const sumSpeed = speed.reduce((prev, next) => prev + next, 0);
    return Math.floor((sumSpeed / speed.length) * 10) / 10;
  };

  return finishLoading ? (
    <Container>
      <Loading />
    </Container>
  ) : (
    <RecordFinishPresenter navigation={navigation} getAverageSpeed={getAverageSpeed} />
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
