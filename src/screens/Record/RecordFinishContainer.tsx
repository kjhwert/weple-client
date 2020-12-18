import React, {useContext} from 'react';
import RecordFinishPresenter from './RecordFinishPresenter';
import RecordContext from '../../module/context/RecordContext';
import Loading from '../../components/Loading';
import {IRecordContext} from '../../module/type/recordContext';

interface IProps {
  navigation: any;
}

export default ({navigation}: IProps) => {
  const {
    mapboxRecord: {isRecordsUpdate},
  }: IRecordContext = useContext(RecordContext);
  return !isRecordsUpdate ? (
    <Loading />
  ) : (
    <RecordFinishPresenter navigation={navigation} />
  );
};
