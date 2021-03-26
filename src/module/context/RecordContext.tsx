import React, {createContext, ReactNode, useContext, useEffect, useRef, useState} from 'react';
import {Database} from '../Database';
import {
  IIntervalRecord,
  IMapboxRecord,
  IMapboxRecordMap,
  IRecordSetting,
  ISetActivityCategory,
  ISqliteCallBack,
} from '../type/recordContext';
import {DURATION_TIME, getDistanceBetweenTwoGPS, GOOGLE_MAPS_GEOCODING_API_TOKEN, MINUTE} from '../common';
import ImagePicker from 'react-native-image-picker';
import {IMusics} from '../type/music';
import {feedApi} from '../api';
import {getLatestLocation} from 'react-native-location';
import AlertContext from './AlertContext';
import ConfirmAlert from '../../components/ConfirmAlert';
import CheckAlert from '../../components/CheckAlert';
import {Platform} from 'react-native';
import {captureRef} from 'react-native-view-shot';
import Geocoder from 'react-native-geocoding';
// import Geolocation from 'react-native-geolocation-service';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-community/async-storage';
import {act} from 'react-test-renderer';

Geolocation.setRNConfiguration({skipPermissionRequests: false, authorizationLevel: 'whenInUse'});

Geocoder.init(GOOGLE_MAPS_GEOCODING_API_TOKEN, {language: 'ko'});

const RecordContext = createContext({});
const sqlite = Database.getInstance();

interface IProps {
  children: ReactNode;
}

export interface IGeoLocation {
  coords: {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
  };
  timestamp: number;
}

const alertManagerInitialState = {
  activityUnSelected: false,
  backButtonOnClicked: false,
  created: false,
  recordsIsStored: true,
};

const tabBarVisibleInitialState = true;

const recordInitialState = {
  duration: 0,
  calorie: 0,
};

const mapboxRecordInitialState = {
  speed: [],
  distance: 0,
  records: [], // 좌표 데이터를 모으기 위한 변수
  isRecordsUpdate: false, // sqlite에서 데이터를 가져왔는지 체크하기 위한 변수
  coordinates: [],
  map: {
    id: 1,
    style: 'mapbox://styles/kjhwert/ckinuio2v2slu18pcvazoehxx',
  },
  music: {
    id: 0,
    url: '',
    title: '음악을 선택해주세요',
    artist: '',
    artwork: '',
  },
  images: [],
};
const recordSettingInitialState = {
  isInit: false,
  isStart: false,
  awake: true,
  startDate: null,
  endDate: null,
  activity: {
    id: 1,
    name: '싸이클링',
    caloriesPerMinute: 7,
  },
};

export const RecordContextProvider = ({children}: IProps) => {
  const {setAlertVisible}: any = useContext(AlertContext);
  const [alertManager, setAlertManager] = useState(alertManagerInitialState);
  const [tabBarVisible, setTabBarVisible] = useState(tabBarVisibleInitialState);
  const [recordSetting, setRecordSetting] = useState<IRecordSetting>(recordSettingInitialState);

  const timer: any = useRef(null);
  const webViewRef = useRef(null);
  const thumbnailRef = useRef(null);

  const [record, setRecord] = useState<IIntervalRecord>(recordInitialState);
  const [mapboxRecord, setMapboxRecord] = useState<IMapboxRecord>(mapboxRecordInitialState);

  const [finishLoading, setFinishLoading] = useState(false);

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

  const getActivityStorage = async () => {
    const activity = await AsyncStorage.getItem('@activity');
    if (activity) {
      setRecordSetting({...recordSetting, activity: JSON.parse(activity)});
    }
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

  const showCamera = async () => {
    if (!recordSetting.isStart) {
      return;
    }

    ImagePicker.launchCamera(
      {storageOptions: {privateDirectory: true}, quality: 0.5},
      ({didCancel, error, latitude, longitude, uri, timestamp, type, fileName}) => {
        if (didCancel) {
          return;
        }
        if (error) {
          return;
        }
        const {distance} = mapboxRecord;
        const timeStringToDate = new Date(timestamp ? timestamp : '');
        const images = mapboxRecord.images.concat({
          latitude,
          longitude,
          uri,
          distance,
          timestamp: timeStringToDate,
          type,
          fileName,
        });
        setMapboxRecord({...mapboxRecord, images});
      },
    );
  };

  const uploadThumbnailImage = async () => {
    const thumbnail = await captureRef(thumbnailRef, {
      format: 'jpg',
      quality: 0.5,
    });

    const image = new FormData();
    image.append('image', {
      name: 'thumbnail.jpg',
      type: 'image/jpg',
      uri: Platform.OS === 'android' ? thumbnail : thumbnail.replace('file://', ''),
    });

    return await feedApi.thumbnailCreate(image);
  };

  const uploadImages = async (feedId: number) => {
    return await Promise.all(
      mapboxRecord.images.map(async (image) => {
        const data = new FormData();
        data.append('image', {
          name: image.fileName,
          type: image.type,
          uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
        });

        const {distance, latitude, longitude} = image;

        const info = {
          distance: distance,
          lat: latitude,
          lon: longitude,
          feed: feedId,
        };

        data.append('imageInfo', JSON.stringify(info));

        const {statusCode} = await feedApi.imagesCreate(data);
        return statusCode;
      }),
    );
  };

  const changeImage = (idx: number) => {
    const options = {storageOptions: {skipBackup: true, path: 'image'}};
    ImagePicker.launchImageLibrary(options, ({uri}) => {
      let images = [...mapboxRecord.images];
      images[idx] = {...images[idx], uri};
      setMapboxRecord({...mapboxRecord, images});
    });
  };

  const setRecordMap = (map: IMapboxRecordMap) => {
    setMapboxRecord({...mapboxRecord, map});
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

  const setActivityCategory = async ({id, name, caloriesPerMinute}: ISetActivityCategory) => {
    const calorie = Math.floor(record.duration / MINUTE) * caloriesPerMinute;

    setRecordSetting({
      ...recordSetting,
      activity: {id, name, caloriesPerMinute},
    });
    setRecord({...record, calorie});
    await AsyncStorage.setItem('@activity', JSON.stringify({id, name, caloriesPerMinute}));
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

  const onStartRecord = () => {
    setTabBarVisible(false);
    setRecordSetting({...recordSetting, isInit: true, isStart: true});
  };

  const onPauseRecord = () => {
    setTabBarVisible(true);
    setRecordSetting({...recordSetting, isInit: true, isStart: false});
  };

  const finishRecording = (navigation: any) => {
    const {coordinates} = mapboxRecord;
    if (coordinates.length === 0) {
      return setAlertVisible(
        <ConfirmAlert
          confirm={{
            type: 'warning',
            title: '아직 루트가 저장되지 않았어요.',
            description: '',
            confirmedText: '기록재개',
            canceledText: '기록중지',
          }}
          canceled={clearAllState}
          confirmed={onStartRecord}
        />,
      );
    }
    // getRecords();
    setRecordSetting({
      ...recordSetting,
      isInit: false,
      isStart: false,
      endDate: new Date(),
    });
    navigation.navigate('recordFinish');
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
  const updateRecordOnInterval = async () => {
    onDurationAndCalorieUpdate();
    await getUserLocation();
  };

  const getCoordinates = async ({coords: {speed: geoSpeed, latitude, longitude}}: IGeoLocation) => {
    const {distance: recordedDistance} = mapboxRecord;

    if (geoSpeed === null) {
      geoSpeed = 0;
    }
    const currentSpeed = Math.floor(geoSpeed * 10) / 10;

    // const distance = getDistanceWithSpeedAndTime(currentSpeed, DURATION_TIME) + recordedDistance;
    let currentDistance = 0;
    if (mapboxRecord.coordinates.length > 0) {
      currentDistance = getDistanceBetweenTwoGPS([
        mapboxRecord.coordinates[mapboxRecord.coordinates.length - 1],
        [longitude, latitude],
      ]);
    }
    const distance = Math.floor((currentDistance + recordedDistance) * 1000) / 1000;
    const coordinates = mapboxRecord.coordinates.concat([[longitude, latitude]]);

    const speed = mapboxRecord.speed.concat(currentSpeed);
    setMapboxRecord({
      ...mapboxRecord,
      coordinates,
      distance,
      speed,
    });
  };

  const getUserLocation = async () => {
    if (record.duration % DURATION_TIME !== 0) return;
    await Geolocation.getCurrentPosition(
      (res) => getCoordinates(res),
      (err) => console.log(err),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );

    return;
    // const {latitude, longitude, speed: locationSpeed}: any = await getLatestLocation();
    //
    // const {distance: recordedDistance} = mapboxRecord;
    // // if (!locationSpeed || locationSpeed < 0) return;
    //
    // const currentSpeed = Math.floor(locationSpeed * 10) / 10;
    //
    // // const distance = getDistanceWithSpeedAndTime(currentSpeed, DURATION_TIME) + recordedDistance;
    // let currentDistance = 0;
    // if (mapboxRecord.coordinates.length > 0) {
    //   currentDistance = getDistanceBetweenTwoGPS([
    //     mapboxRecord.coordinates[mapboxRecord.coordinates.length - 1],
    //     [longitude, latitude],
    //   ]);
    // }
    // const distance = Math.floor((currentDistance + recordedDistance) * 1000) / 1000;
    // const coordinates = mapboxRecord.coordinates.concat([[longitude, latitude]]);
    //
    // const speed = mapboxRecord.speed.concat(currentSpeed);
    // setMapboxRecord({
    //   ...mapboxRecord,
    //   coordinates,
    //   distance,
    //   speed,
    // });
  };

  const onDurationAndCalorieUpdate = () => {
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

  const getAddress = async (records: Array<number>) => {
    const {results: res} = await Geocoder.from(records[1], records[0]);

    return [
      res[0].address_components[3].long_name,
      res[0].address_components[2].long_name,
      res[0].address_components[1].long_name,
      res[0].address_components[0].long_name,
    ].join(' ');
  };

  const createFeed = async (navigation: any) => {
    setFinishLoading(true);

    /**
     * Thumbnail image upload
     * */
    const {
      statusCode: thumbnailStatus,
      message: thumbnailMessage,
      data: {path},
    } = await uploadThumbnailImage();
    if (thumbnailStatus !== 201) {
      setFinishLoading(false);
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '등록에 실패했습니다.',
            description: thumbnailMessage,
          }}
        />,
      );
    }
    const thumbnail = path;
    const {activity, startDate, endDate} = recordSetting;
    const {duration, calorie} = record;
    const {distance, map, music, coordinates: records} = mapboxRecord;
    const address = await getAddress(records[0]);
    const startLatitude = records[0][0];
    const startLongitude = records[0][1];
    const coordinates = JSON.stringify(records);
    const feedRecords = {
      startDate: `${startDate}`,
      endDate: `${endDate}`,
      duration,
      calorie,
      distance,
      map: map.id,
      music: music.id,
      activity: activity.id,
      coordinates,
      thumbnail,
      address,
      startLatitude,
      startLongitude,
    };

    const {data, statusCode, message} = await feedApi.create(feedRecords);
    // 피드 업로드 먼저 하고, 이미지 업로드
    if (statusCode !== 201) {
      setFinishLoading(false);
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '등록에 실패했습니다.',
            description: message,
          }}
        />,
      );
    }
    const result: number[] = await uploadImages(data.id);
    const errorResult = result.find((statusCode) => statusCode !== 201);
    if (errorResult) {
      setFinishLoading(false);
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '일부 사진 업로드 중 오류가 발생했습니다.',
            description: '',
          }}
        />,
      );
    }
    setFinishLoading(false);
    clearAllState();
    return setAlertVisible(
      <CheckAlert
        check={{
          type: 'check',
          title: '등록되었습니다.',
          description: '',
        }}
        checked={() => {
          navigation.navigate('recordMain');
        }}
      />,
    );
  };

  useEffect(() => {
    getActivityStorage();
    if (recordSetting.isStart) {
      timer.current = setInterval(() => updateRecordOnInterval(), 1000);
    }
    return () => {
      clearInterval(timer.current);
    };
  }, [
    recordSetting.isInit,
    recordSetting.isStart,
    recordSetting.awake,
    record,
    mapboxRecord.distance,
    mapboxRecord.speed,
    mapboxRecord.coordinates,
    mapboxRecord.images,
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
        thumbnailRef,
        finishLoading,
        initializeRecordStart,
        onPauseRecord,
        onStartRecord,
        finishRecording,
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
        changeImage,
      }}>
      {children}
    </RecordContext.Provider>
  );
};

export default RecordContext;
