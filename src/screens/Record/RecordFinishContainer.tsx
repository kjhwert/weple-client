import React, {useContext} from 'react';
import RecordFinishPresenter from './RecordFinishPresenter';
import Loading from '../../components/Loading';
import styled from 'styled-components/native';
import RecordContext2, {IRecordContext2} from '../../module/context/RecordContext2';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {loading} = useContext(RecordContext2) as IRecordContext2;

  return loading ? (
    <Container>
      <Loading />
    </Container>
  ) : (
    <RecordFinishPresenter navigation={navigation} />
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
