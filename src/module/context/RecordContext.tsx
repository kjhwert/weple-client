import React, {
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import {IMapBoxLocation} from '../type/mapbox';
import {Database} from '../Database';
import {
  IIntervalRecord,
  IMapboxRecord,
  IMapboxRecordMap,
  IRecordSetting,
  ISetActivityCategory,
  ISqliteCallBack,
} from '../type/recordContext';
import {getDistanceBetweenTwoGPS, MINUTE} from '../common';
import ImagePicker from 'react-native-image-picker';
import {IMusics} from '../type/music';
import {feedApi} from '../api';

const RecordContext = createContext({});
const sqlite = Database.getInstance();

interface IProps {
  children: ReactNode;
}

const alertManagerInitialState = {
  activityUnSelected: false,
  backButtonOnClicked: false,
  created: false,
  recordsIsStored: true,
};

const tabBarVisibleInitialState = true;

const recordSettingInitialState = {
  isInit: false,
  isStart: false,
  awake: true,
  activity: {
    id: 0,
    name: '',
    caloriesPerMinute: 0,
  },
  startDate: null,
  endDate: null,
};

const recordInitialState = {
  duration: 0,
  calorie: 0,
};

const mapboxRecordInitialState = {
  speed: 0,
  distance: 0,
  coordinates: [], // 이전 좌표와 비교하기 위한 변수
  records: [], // 좌표 데이터를 모으기 위한 변수
  updated: false, // onUpdateUserPosition 함수에서 같은 위치에 여러번 데이터를 보낼 때 하나만 담기 위한 validator
  isRecordsUpdate: false, // sqlite에서 데이터를 가져왔는지 체크하기 위한 변수
  map: {
    id: 1,
    style: 'mapbox://styles/kjhwert/ckinuio2v2slu18pcvazoehxx',
  },
  music: {
    id: 0,
    url: '',
    title: '',
    artist: '',
    artwork: '',
  },
  images: [],
};

export const RecordContextProvider = ({children}: IProps) => {
  const [alertManager, setAlertManager] = useState(alertManagerInitialState);
  const [tabBarVisible, setTabBarVisible] = useState(tabBarVisibleInitialState);
  const [recordSetting, setRecordSetting] = useState<IRecordSetting>(
    recordSettingInitialState,
  );
  const timer: any = useRef(null);
  const webViewRef = useRef(null);

  const [record, setRecord] = useState<IIntervalRecord>(recordInitialState);
  const [mapboxRecord, setMapboxRecord] = useState<IMapboxRecord>(
    mapboxRecordInitialState,
  );

  const clearAllState = () => {
    setAlertManager(alertManagerInitialState);
    setTabBarVisible(tabBarVisibleInitialState);
    setRecordSetting(recordSettingInitialState);
    setRecord(recordInitialState);
    setMapboxRecord(mapboxRecordInitialState);
    sqlite.deleteRecord();
  };

  const onChangeCreateAlert = () => {
    setAlertManager({
      ...alertManager,
      created: !alertManager.created,
    });
  };

  const onChangeActivityUnSelectedAlert = () => {
    setAlertManager({
      ...alertManager,
      activityUnSelected: !alertManager.activityUnSelected,
    });
  };

  const onChangeBackButtonAlert = () => {
    setAlertManager({
      ...alertManager,
      backButtonOnClicked: !alertManager.backButtonOnClicked,
    });
  };

  const showCamera = () => {
    if (!recordSetting.isStart) {
      return;
    }
    ImagePicker.launchCamera(
      {},
      ({latitude, longitude, uri, data, timestamp}) => {
        const {distance} = mapboxRecord;
        const timeStringToDate = new Date(timestamp ? timestamp : '');
        const images = mapboxRecord.images.concat({
          latitude,
          longitude,
          uri,
          distance,
          timestamp: timeStringToDate,
        });
        setMapboxRecord({...mapboxRecord, images});
      },
    );
  };

  const setRecordMap = (map: IMapboxRecordMap) => {
    setMapboxRecord({...mapboxRecord, map: map});
    // @ts-ignore webview reload
    webViewRef.current.reload();
  };

  const setRecordMusic = (music: IMusics) => {
    if (mapboxRecord.music === music) {
      return setMapboxRecord({...mapboxRecord, music});
    }
    setMapboxRecord({...mapboxRecord, music});
    // @ts-ignore webview reload
    webViewRef.current.reload();
  };

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

  const initializeRecordStart = () => {
    setRecordSetting({
      ...recordSetting,
      isInit: true,
      isStart: true,
      startDate: new Date(),
    });
    setTabBarVisible(false);
  };

  const changeStartStatus = () => {
    setRecordSetting({...recordSetting, isStart: !recordSetting.isStart});
  };

  const finishRecording = (navigation: any) => {
    getRecords();
    setRecordSetting({
      ...recordSetting,
      isInit: false,
      isStart: false,
      endDate: new Date(),
    });
    navigation.navigate('recordFinish');
  };

  /**
   *  mapbox user location update
   * */
  const onUpdateUserPosition = (location: IMapBoxLocation) => {
    if (!recordSetting.isStart) {
      return;
    }

    /** 5초에 한번씩 데이터를 쌓는다. */
    if (record.duration % 5 !== 0) {
      setMapboxRecord({...mapboxRecord, updated: false});
      return;
    }

    const {
      coords: {latitude, longitude, speed: mapboxSpeed},
    } = location;
    const {coordinates, distance: mapboxDistance, updated} = mapboxRecord;
    if (updated) {
      return;
    }

    const speed = Math.floor(mapboxSpeed * 10) / 10;

    let distance = 0;
    if (coordinates.length !== 0) {
      distance =
        getDistanceBetweenTwoGPS(coordinates.concat([[longitude, latitude]])) +
        mapboxDistance;
      distance = Math.floor(distance * 1000) / 1000;
    }

    setMapboxRecord({
      ...mapboxRecord,
      updated: true,
      distance,
      speed,
      coordinates: [[longitude, latitude]],
    });
    sqlite.insertRecord([longitude, latitude]);
  };

  const getRecords = () => {
    sqlite.getRecords((data: Array<ISqliteCallBack>) => {
      if (data.length === 0) {
        setAlertManager({...alertManager, recordsIsStored: false});
      }
      const records = data.map(({records}) => JSON.parse(records));
      setMapboxRecord({...mapboxRecord, records, isRecordsUpdate: true});
    });
  };

  /**
   * interval event
   * */
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

  const createFeed = async () => {
    const {activity, startDate, endDate} = recordSetting;
    if (activity.id === 0) {
      return onChangeActivityUnSelectedAlert();
    }
    const {duration, calorie} = record;
    const {distance, images, map, music, records} = mapboxRecord;
    const coordinates = JSON.stringify(records);
    const feedRecords = {
      activityId: activity.id,
      startDate: `${startDate}`,
      endDate: `${endDate}`,
      duration,
      calorie,
      distance,
      mapId: map.id,
      musicId: music.id,
      coordinates,
    };

    const {data, statusCode, message} = await feedApi.create(feedRecords);
    // 피드 업로드 먼저 하고, 이미지 업로드
    console.log(statusCode, message, data);
    if (statusCode === 201) {
      return onChangeCreateAlert();
    }
  };

  useEffect(() => {
    if (recordSetting.isStart) {
      timer.current = setInterval(() => updateRecordOnInterval(), 1000);
    }
    return () => {
      clearInterval(timer.current);
    };
  }, [
    recordSetting,
    record,
    mapboxRecord.distance,
    mapboxRecord.speed,
    tabBarVisible,
    alertManager,
  ]);

  return (
    <RecordContext.Provider
      value={{
        recordSetting,
        record,
        mapboxRecord,
        webViewRef,
        tabBarVisible,
        alertManager,
        initializeRecordStart,
        changeStartStatus,
        finishRecording,
        onUpdateUserPosition,
        toggleAwakeSwitch,
        setActivityCategory,
        showCamera,
        setRecordMap,
        setRecordMusic,
        createFeed,
        onChangeActivityUnSelectedAlert,
        onChangeBackButtonAlert,
        onChangeCreateAlert,
        clearAllState,
      }}>
      {children}
    </RecordContext.Provider>
  );
};

export default RecordContext;
