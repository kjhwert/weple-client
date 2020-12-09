import React, {
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import {IMapBoxLocation} from '../type/mapbox';
import {Database} from '../Database';
import {ISetActivityCategory} from '../type/recordContext';
import {getDistanceBetweenTwoGPS, MINUTE} from '../common';

const RecordContext = createContext({});
const sqlite = Database.getInstance();

interface IProps {
  children: ReactNode;
}

export const RecordContextProvider = ({children}: IProps) => {
  const [recordSetting, setRecordSetting] = useState({
    isInit: false,
    isStart: false,
    awake: false,
    activity: {
      id: 0,
      name: '',
      caloriesPerMinute: 0,
    },
  });
  const timer: any = useRef(null);

  const [record, setRecord] = useState({
    duration: 0,
    calorie: 0,
  });
  const [mapboxRecord, setMapboxRecord] = useState<{
    speed: number;
    distance: number;
    coordinates: Array<Array<number>>;
  }>({
    speed: 0,
    distance: 0,
    coordinates: [],
  });

  const setActivityCategory = ({
    id,
    name,
    caloriesPerMinute,
  }: ISetActivityCategory) => {
    const calorie = Math.floor(record.duration / MINUTE) * caloriesPerMinute;

    setRecordSetting({
      ...recordSetting,
      activity: {id, name, caloriesPerMinute},
    });
    setRecord({...record, calorie});
  };

  const toggleAwakeSwitch = () => {
    setRecordSetting({...recordSetting, awake: !recordSetting.awake});
  };

  const initialRecordStart = () => {
    setRecordSetting({...recordSetting, isInit: true, isStart: true});
  };

  const changeStartStatus = () => {
    setRecordSetting({...recordSetting, isStart: !recordSetting.isStart});
  };

  const finishRecording = () => {
    setRecordSetting({...recordSetting, isInit: false, isStart: false});
  };

  const onUpdateUserPosition = (location: IMapBoxLocation) => {
    if (!recordSetting.isStart) {
      return;
    }
    if (record.duration % 10 !== 0) {
      return;
    }

    const {
      coords: {latitude, longitude, speed: mapboxSpeed},
    } = location;
    const {coordinates} = mapboxRecord;

    const speed = Math.floor(mapboxSpeed / 10) * 10;

    // const {coordinates} = mapboxRecord;
    // const newPolyLine = coordinates.concat([longitude, latitude]);

    let distance = 0;
    if (coordinates.length !== 0) {
      distance = getDistanceBetweenTwoGPS(
        coordinates.concat([longitude, latitude]),
      );
    }
    setMapboxRecord({distance, speed, coordinates: [[longitude, latitude]]});
    sqlite.insertRecord([longitude, latitude]);
  };

  const updateRecordOnInterval = () => {
    const {
      activity: {caloriesPerMinute},
    } = recordSetting;
    const duration = record.duration + 1;
    if (record.duration % MINUTE === 0) {
      const calorie = Math.floor(record.duration / MINUTE) * caloriesPerMinute;
      return setRecord({...record, calorie, duration});
    }
    setRecord({...record, duration});
  };

  useEffect(() => {
    if (recordSetting.isStart) {
      timer.current = setInterval(() => updateRecordOnInterval(), 1000);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [recordSetting, record, mapboxRecord]);

  return (
    <RecordContext.Provider
      value={{
        recordSetting,
        record,
        mapboxRecord,
        initialRecordStart,
        changeStartStatus,
        finishRecording,
        onUpdateUserPosition,
        toggleAwakeSwitch,
        setActivityCategory,
      }}>
      {children}
    </RecordContext.Provider>
  );
};

export default RecordContext;
