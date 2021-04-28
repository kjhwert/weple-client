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

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

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

export interface Image {
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
  calorie: number;
  speed: Array<number>;
  distance: number;
  coordinates: Array<Array<number>>;
  map: Map;
  music: Music;
  images: Array<Image>;
  title: string;
}

const recordsInit = {
  calorie: 0,
  speed: [],
  distance: 0,
  coordinates: [[126.97842453212644, 37.566629386346264]],
  title: '',
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
  const [duration, setDuration] = useState<number>(0);
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

  const onCreateImages = async () => {
    return await Promise.all(
      records.images.map(async ({fileName, type, uri, latitude: lat, longitude: lon, distance}) => {
        const data = new FormData();
        data.append('image', {
          name: fileName,
          type: type,
          uri: uri,
        });

        const {data: path} = await feedApi.imagesCreate(data);
        return {img: path, lat, lon, distance};
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

  const onChangeTitle = (text: string) => {
    if (text.length > 10) {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: '제목은 10자 이내로 작성해주세요.',
            description: '',
          }}
        />,
      );
    }
    setRecords({...records, title: text});
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
    const {calorie, distance, map, music, coordinates: coors} = records;
    // const address = await getAddress(coors[0]);
    const startLatitude = coors[0][0];
    const startLongitude = coors[0][1];
    const coordinates = JSON.stringify(coors);

    let title = records.title;
    if (!title) {
      const date = new Date();
      title = `${date.getHours() >= 12 ? 'Afternoon' : 'Morning'} ${months[date.getMonth()]} ${date.getDate()}th`;
    }
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
      title,
    };

    const images = await onCreateImages();
    const {statusCode, message} = await feedApi.create({...feedRecords, images});
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

    const options = {storageOptions: {skipBackup: true, path: 'image'}, quality: 0.5};
    ImagePicker.launchCamera(
      options,
      async ({didCancel, error, latitude, longitude, uri, timestamp, type, fileName}) => {
        if (didCancel) {
          return;
        }
        if (error) {
          return;
        }
        const {distance} = records;
        const timeStringToDate = timestamp ? new Date(timestamp) : new Date();
        // random string generating
        fileName = !fileName ? Math.random().toString(36).substring(2, 15) : fileName;
        const images = records.images.concat({
          latitude,
          longitude,
          uri,
          distance,
          timestamp: timeStringToDate,
          type,
          fileName,
        });
        const data = new FormData();
        data.append('image', {
          name: fileName,
          type: type,
          uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
        });

        await feedApi.imagesCreate(data);
        setRecords({...records, images});
      },
    );
  };

  const getError = () => {
    if (duration >= 10) return;
    onChangeRecord();
    return setAlertVisible(
      <CheckAlert
        check={{
          type: 'warning',
          title: 'GPS 정보를 수신할 수 없습니다.',
          description: '잠시 후에 다시 시도해 주세요.',
        }}
      />,
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

    const distance = Math.floor((currentDistance + records.distance) * 1000) / 1000;
    const speed1 = (distance * 1000) / DURATION_TIME;
    // currentSpeed = Math.floor(currentSpeed * 10) / 10;
    // const speed = records.speed.concat(currentSpeed);
    const speed = records.speed.concat(speed1);
    const coordinates = records.coordinates.concat([[longitude, latitude]]);

    setRecords({...records, speed, distance, coordinates});
  };

  const durationInterval = () => {
    if (duration % MINUTE === 0) {
      const calorie = getCalorie();
      setRecords({...records, calorie});
    }
    setDuration(duration + 1);
  };

  const onRecord = async () => {
    durationInterval();
    if (duration % DURATION_TIME !== 0) return;
    Geolocation.getCurrentPosition(getCoordinates, getError, {
      enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: 1000,
    });
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
    const calorie = Math.floor(duration / MINUTE) * activity.caloriesPerMinute;

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
    setDuration(0);
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
    return Math.floor(duration / MINUTE) * settings.activity.caloriesPerMinute;
  };

  useEffect(() => {
    backgroundTimer.current = onRecord;
  }, [records, settings, duration]);

  return (
    <RecordContext2.Provider
      value={{
        loading,
        settings,
        duration,
        records,
        webViewRef,
        thumbnailRef,
        onChangeTitle,
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
  duration: number;
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
  onChangeTitle: (text: string) => void;
}

export default RecordContext2;
