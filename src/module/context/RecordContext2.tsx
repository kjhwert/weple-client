import React, {createContext, ReactNode, useContext, useEffect, useRef, useState} from 'react';
import BackgroundTimer from 'react-native-background-timer';
import {DURATION_TIME, getDistanceBetweenTwoGPS, GOOGLE_MAPS_GEOCODING_API_TOKEN, MINUTE} from '../common';
import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from '@react-native-community/geolocation';
import ConfirmAlert from '../../components/ConfirmAlert';
import AlertContext from './AlertContext';
import ImagePicker from 'react-native-image-picker';
import {captureRef} from 'react-native-view-shot';
import {Platform} from 'react-native';
import {feedApi} from '../api';
import CheckAlert from '../../components/CheckAlert';
import Geocoder from 'react-native-geocoding';

Geolocation.setRNConfiguration({skipPermissionRequests: false, authorizationLevel: 'whenInUse'});
Geocoder.init(GOOGLE_MAPS_GEOCODING_API_TOKEN, {language: 'ko'});

const RecordContext2 = createContext({});

interface Props {
  children: ReactNode;
}

interface IGeoLocation {
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

interface Activity {
  id: number;
  name: string;
  caloriesPerMinute: number;
}

interface Settings {
  isInit: boolean;
  isStart: boolean;
  awake: boolean;
  startDate: Date | null;
  endDate: Date | null;
  activity: Activity;
  tabBarVisible: boolean;
}

interface Image {
  latitude: number | undefined;
  longitude: number | undefined;
  uri: string;
  distance: number;
  timestamp: Date;
  type: string | undefined;
  fileName: string | undefined;
}

interface Map {
  id: number;
  name: string;
  style: string;
}

interface Music {
  id: number;
  url: string;
  title: string;
  artist: string;
  artwork: string;
}

interface Records {
  duration: number;
  calorie: number;
  speed: Array<number>;
  distance: number;
  coordinates: Array<Array<number>>;
  map: Map;
  music: Music;
  images: Array<Image>;
}

const recordsInit = {
  duration: 0,
  calorie: 0,
  speed: [],
  distance: 0,
  coordinates: [],
  map: {
    id: 1,
    name: 'NORMAL',
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

const settingsInit = {
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
  tabBarVisible: true,
};

export const RecordContextProvider2 = ({children}: Props) => {
  /** interval refs */
  const interval: any = useRef(null);
  const backgroundTimer: any = useRef();
  const webViewRef: any = useRef(null);
  const thumbnailRef: any = useRef(null);

  /** record states */
  const [settings, setSettings] = useState<Settings>(settingsInit);
  const [records, setRecords] = useState<Records>(recordsInit);
  const [loading, setLoading] = useState(false);

  const {setAlertVisible}: any = useContext(AlertContext);

  const onCreateThumbnailImage = async () => {
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

  const onCreateImages = async (feedId: number) => {
    return await Promise.all(
      records.images.map(async (image) => {
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

  const getAddress = async (coordinate: Array<number>) => {
    const {results: res} = await Geocoder.from(coordinate[1], coordinate[0]);

    return [
      res[0].address_components[3].long_name,
      res[0].address_components[2].long_name,
      res[0].address_components[1].long_name,
      res[0].address_components[0].long_name,
    ].join(' ');
  };

  const onCreateRecord = async (navigation: any) => {
    setLoading(true);

    /**
     * Thumbnail image upload
     * */
    const {
      statusCode: thumbnailStatus,
      message: thumbnailMessage,
      data: {path},
    } = await onCreateThumbnailImage();
    if (thumbnailStatus !== 201) {
      setLoading(false);
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
    const {activity, startDate, endDate} = settings;
    const {duration, calorie, distance, map, music, coordinates: coors} = records;
    // const address = await getAddress(coors[0]);
    const startLatitude = coors[0][0];
    const startLongitude = coors[0][1];
    const coordinates = JSON.stringify(coors);
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
      address: '',
      startLatitude,
      startLongitude,
    };

    const {data, statusCode, message} = await feedApi.create(feedRecords);
    // 피드 업로드 먼저 하고, 이미지 업로드
    if (statusCode !== 201) {
      setLoading(false);
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
    const result: number[] = await onCreateImages(data.id);
    const errorResult = result.find((statusCode) => statusCode !== 201);
    if (errorResult) {
      setLoading(false);
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
    setLoading(false);
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

  const onChangeImage = (idx: number) => {
    const options = {storageOptions: {skipBackup: true, path: 'image'}};
    ImagePicker.launchImageLibrary(options, ({uri}) => {
      let images = [...records.images];
      images[idx] = {...images[idx], uri};
      setRecords({...records, images});
    });
  };

  const onTakePicture = () => {
    if (!settings.isStart) {
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
        const {distance} = records;
        const timeStringToDate = new Date(timestamp ? timestamp : '');
        const images = records.images.concat({
          latitude,
          longitude,
          uri,
          distance,
          timestamp: timeStringToDate,
          type,
          fileName,
        });
        setRecords({...records, images});
      },
    );
  };

  const getCoordinates = ({coords: {speed: currentSpeed, latitude, longitude}}: IGeoLocation) => {
    if (!currentSpeed || currentSpeed < 0) {
      currentSpeed = 0;
    }

    let currentDistance = 0;
    if (records.coordinates.length > 0) {
      currentDistance = getDistanceBetweenTwoGPS([
        records.coordinates[records.coordinates.length - 1],
        [longitude, latitude],
      ]);
    }

    currentSpeed = Math.floor(currentSpeed * 10) / 10;
    const speed = records.speed.concat(currentSpeed);
    const distance = Math.floor((currentDistance + records.distance) * 1000) / 1000;
    const coordinates = records.coordinates.concat([[longitude, latitude]]);
    let calorie = records.calorie;
    if (records.duration % MINUTE === 0) {
      calorie = getCalorie();
    }

    setRecords({...records, duration: records.duration + 1, speed, distance, coordinates, calorie});
  };

  const onRecord = () => {
    if (records.duration % DURATION_TIME !== 0) {
      return setRecords({...records, duration: records.duration + 1});
    }

    Geolocation.getCurrentPosition(
      getCoordinates,
      (err) => {
        //TODO GPS 안잡혔을 때는 duration이 안되는데. GPS 수신이 원활하지 않습니다.
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 1000,
      },
    );
  };

  const onChangeRecordsMusic = (music: Music) => {
    if (records.music === music) {
      return setRecords({...records, music});
    }
    setRecords({...records, music});
    webViewRef.current.reload();
  };

  const onChangeRecordsMap = (map: Map) => {
    setRecords({...records, map});
    webViewRef.current.reload();
  };

  const onChangeSettingAwake = () => {
    setSettings({...settings, awake: !settings.awake});
  };

  const onChangeSettingActivity = async (activity: Activity) => {
    const calorie = Math.floor(records.duration / MINUTE) * activity.caloriesPerMinute;

    setSettings({
      ...settings,
      activity,
    });
    setRecords({...records, calorie});
    await AsyncStorage.setItem('@activity', JSON.stringify(activity));
  };

  const onInitRecord = () => {
    interval.current = BackgroundTimer.setInterval(() => {
      backgroundTimer.current();
    }, 1000);
    setSettings({
      ...settings,
      isInit: true,
      isStart: true,
      startDate: new Date(),
      tabBarVisible: false,
    });
  };

  const onChangeRecord = () => {
    if (settings.isStart) {
      BackgroundTimer.clearInterval(interval.current);
    }
    if (!settings.isStart) {
      interval.current = BackgroundTimer.setInterval(() => {
        backgroundTimer.current();
      }, 1000);
    }
    setSettings({...settings, isStart: !settings.isStart, tabBarVisible: !settings.tabBarVisible});
  };

  const clearAllState = () => {
    setSettings(settingsInit);
    setRecords(recordsInit);
  };

  const onFinishRecord = (navigation: any) => {
    if (records.coordinates.length === 0) {
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
          confirmed={onChangeRecord}
        />,
      );
    }
    navigation.navigate('recordFinish');
  };

  const getCalorie = () => {
    return Math.floor(records.duration / MINUTE) * settings.activity.caloriesPerMinute;
  };

  useEffect(() => {
    backgroundTimer.current = onRecord;
  }, [records, settings]);

  return (
    <RecordContext2.Provider
      value={{
        loading,
        settings,
        records,
        webViewRef,
        thumbnailRef,
        onChangeRecordsMusic,
        onChangeRecordsMap,
        onChangeSettingActivity,
        onChangeSettingAwake,
        onInitRecord,
        onChangeRecord,
        onFinishRecord,
        onTakePicture,
        onCreateRecord,
        onChangeImage,
        clearAllState,
      }}>
      {children}
    </RecordContext2.Provider>
  );
};

export interface IRecordContext2 {
  loading: boolean;
  settings: Settings;
  records: Records;
  webViewRef: any;
  thumbnailRef: any;
  onChangeRecordsMap: (map: Map) => void;
  onChangeRecordsMusic: (music: Music) => void;
  onInitRecord: () => void;
  onChangeRecord: () => void;
  onFinishRecord: (navigation: any) => void;
  onChangeSettingActivity: (activity: Activity) => void;
  onChangeSettingAwake: () => void;
  onTakePicture: () => void;
  onCreateRecord: (navigation: any) => void;
  onChangeImage: (idx: number) => void;
  clearAllState: () => void;
}

export default RecordContext2;
