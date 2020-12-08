import React, {useEffect, useState} from 'react';
import RecordPresenter from './RecordPresenter';
import {Database} from '../../module/Database';

interface IProps {
  navigation: any;
}

const sqlite = Database.getInstance();

export default ({navigation}: IProps) => {
  const [record, setRecord] = useState({
    init: false,
    start: false,
  });

  const initialRecordStart = () => {
    setRecord({init: true, start: true});
  };

  const changeStartStatus = () => {
    setRecord({...record, start: !record.start});
  };

  const finishRecording = () => {
    setRecord({init: false, start: false});
  };

  useEffect(() => {}, []);

  return (
    <RecordPresenter
      navigation={navigation}
      record={record}
      initialRecordStart={initialRecordStart}
      changeStartStatus={changeStartStatus}
      finishRecording={finishRecording}
    />
  );
};
