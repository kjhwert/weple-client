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
import GpsCheckAlert from '../../components/GpsCheckAlert';

Geolocation.setRNConfiguration({skipPermissionRequests: false, authorizationLevel: 'always'});
Geocoder.init(GOOGLE_MAPS_GEOCODING_API_TOKEN, {language: 'ko'});

const RecordContext2 = createContext({});

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export interface IRecordContext2 {
  state: {
    loading: boolean;
    duration: number;
    settings: Settings;
    records: Records;
  };
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
  speed: number;
  distance: number;
  coordinates: any;
  map: Map;
  music: Music;
  images: Array<Image>;
  title: string;
}

interface IState {
  records: Records;
  settings: Settings;
  duration: number;
  loading: boolean;
}

const recordsInit = {
  calorie: 0,
  speed: 0,
  distance: 0,
  coordinates: [],
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

  const [state, setState] = useState<IState>({
    settings: settingsInit,
    records: recordsInit,
    duration: 0,
    loading: false,
  });

  const {setAlertVisible, setAlertInvisible}: any = useContext(AlertContext);

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
      state.records.images.map(async ({fileName, type, uri, latitude: lat, longitude: lon, distance}) => {
        const data = new FormData();
        data.append('image', {
          name: fileName,
          type: type,
          uri: uri,
        });

        const {
          data: {path},
        } = await feedApi.imagesCreate(data);
        return {img: path, lat, lon, distance};
      }),
    );
  };

  // const getAddress = async (coordinate: Array<number>) => {
  //   const {results: res} = await Geocoder.from(coordinate[1], coordinate[0]);
  //
  //   return [
  //     res[0].address_components[3].long_name,
  //     res[0].address_components[2].long_name,
  //     res[0].address_components[1].long_name,
  //     res[0].address_components[0].long_name,
  //   ].join(' ');
  // };

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
    setState({...state, records: {...state.records, title: text}});
  };

  const onCreateRecord = async (navigation: any) => {
    const {duration, records, settings} = state;
    setState({...state, loading: true});
    /**
     * Thumbnail image upload
     * */
    const {
      statusCode: thumbnailStatus,
      message: thumbnailMessage,
      data: {path},
    } = await onCreateThumbnailImage();
    if (thumbnailStatus !== 201) {
      setState({...state, loading: false});
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

    let title = state.records.title;
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
      setState({...state, loading: false});
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
          navigation.navigate('feedMain');
        }}
      />,
    );
  };

  const onChangeImage = (idx: number) => {
    const options = {storageOptions: {skipBackup: true, path: 'image'}};
    ImagePicker.launchImageLibrary(options, ({uri}) => {
      let images = [...state.records.images];
      images[idx] = {...images[idx], uri};
      setState({...state, records: {...state.records, images}});
    });
  };

  const onTakePicture = () => {
    if (!state.settings.isStart) {
      return;
    }

    onChangeRecord();
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
        const {distance} = state.records;
        const timeStringToDate = timestamp ? new Date(timestamp) : new Date();
        // random string generating
        fileName = !fileName ? Math.random().toString(36).substring(2, 15) : fileName;
        const images = state.records.images.concat({
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

        setState({
          ...state,
          records: {...state.records, images},
          settings: {...state.settings, isStart: !state.settings.isStart, tabBarVisible: !state.settings.tabBarVisible},
        });
      },
    );
  };

  /**
   * GPS 오차범위 체크
   * 오차범위는 0.0001로 추산.
   * */
  const isGpsError = (lat: number, lon: number) => {
    const {records} = state;
    if (records.coordinates.length === 0) return false;
    const [longitude, latitude] = records.coordinates[records.coordinates.length - 1];
    const latError = Math.abs(latitude - lat) < 0.0001;
    const lonError = Math.abs(longitude - lon) < 0.0001;
    if (latError || lonError) return true;
    return false;
  };

  const getCoordinates = ({coords: {latitude, longitude}}: IGeoLocation) => {
    if (isGpsError(latitude, longitude)) return;

    const {records, duration} = state;

    const coordinates = records.coordinates.concat([[longitude, latitude]]);
    if (coordinates.length === 1) {
      return setState({...state, records: {...records, coordinates}});
    }

    let currentDistance = 0;
    if (records.coordinates.length > 0) {
      currentDistance = getDistanceBetweenTwoGPS([
        records.coordinates[records.coordinates.length - 1],
        [longitude, latitude],
      ]);
    }

    const distance = Math.floor((currentDistance + records.distance) * 1000) / 1000;
    const speed = Math.floor(((distance * 1000) / duration) * 3.6);
    // currentSpeed = Math.floor(currentSpeed * 10) / 10;
    // const speed = records.speed.concat(currentSpeed);

    setState({...state, records: {...state.records, speed, distance, coordinates}});
  };

  const durationInterval = () => {
    if (state.duration % MINUTE === 0) {
      const calorie = getCalorie();
      return setState({...state, records: {...state.records, calorie}, duration: state.duration + 1});
    }
    setState({...state, duration: state.duration + 1});
  };

  const onRecord = async () => {
    durationInterval();
    if (state.duration % DURATION_TIME !== 0) return;

    Geolocation.getCurrentPosition(getCoordinates, (_) => {}, {
      enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: 1000,
    });
  };

  const isGpsConnected = async () => {
    return await new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 1000,
      });
    });
  };

  const onChangeRecordsMusic = (music: Music) => {
    if (state.records.music === music) {
      return setState({...state, records: {...state.records, music}});
    }
    setState({...state, records: {...state.records, music}});
    webViewRef.current.reload();
  };

  const onChangeRecordsMap = (map: Map) => {
    setState({...state, records: {...state.records, map}});
    webViewRef.current.reload();
  };

  const onChangeSettingAwake = () => {
    setState({...state, settings: {...state.settings, awake: !state.settings.awake}});
  };

  const onChangeSettingActivity = async (activity: Activity) => {
    setState({...state, settings: {...state.settings, activity}});
    await AsyncStorage.setItem('@activity', JSON.stringify(activity));
  };

  const onInitRecord = async () => {
    setAlertVisible(
      <GpsCheckAlert
        check={{
          type: 'check',
          title: 'GPS 정보를 수신 중입니다.',
          description: '잠시 기다려 주세요.',
        }}
      />,
    );
    try {
      await isGpsConnected();
      setAlertInvisible();
    } catch (e) {
      return setAlertVisible(
        <CheckAlert
          check={{
            type: 'warning',
            title: 'GPS 정보를 수신할 수 없습니다.',
            description: '잠시 후에 다시 시도해 주세요.',
          }}
        />,
      );
    }
    interval.current = BackgroundTimer.setInterval(() => {
      backgroundTimer.current();
    }, 1000);

    setState({
      ...state,
      settings: {
        ...state.settings,
        isInit: true,
        isStart: true,
        startDate: new Date(),
        tabBarVisible: false,
      },
    });
  };

  const onChangeRecord = () => {
    if (state.settings.isStart) {
      BackgroundTimer.clearInterval(interval.current);
    }
    if (!state.settings.isStart) {
      interval.current = BackgroundTimer.setInterval(() => {
        backgroundTimer.current();
      }, 1000);
    }
    setState({
      ...state,
      settings: {...state.settings, isStart: !state.settings.isStart, tabBarVisible: !state.settings.tabBarVisible},
    });
  };

  const clearAllState = () => {
    setState({...state, settings: settingsInit, records: recordsInit, duration: 0, loading: false});
    webViewRef.current.reload();
  };

  const onFinishRecord = (navigation: any) => {
    if (state.records.coordinates.length === 0) {
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
    return Math.floor(state.duration / MINUTE) * state.settings.activity.caloriesPerMinute;
  };

  useEffect(() => {
    backgroundTimer.current = onRecord;
  }, [state]);

  return (
    <RecordContext2.Provider
      value={{
        state,
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

export default RecordContext2;
