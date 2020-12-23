import {IMusics} from './music';

export interface IRecordContext {
  webViewRef?: any;
  tabBarVisible?: boolean;
  alertManager?: IAlertManager;
  recordSetting?: IRecordSetting;
  record?: IIntervalRecord;
  mapboxRecord?: IMapboxRecord;
  initializeRecordStart?: Function;
  onPauseRecord?: Function;
  onStartRecord?: () => void;
  finishRecording?: Function;
  toggleAwakeSwitch?: Function;
  setActivityCategory?: Function;
  showCamera?: Function;
  setRecordMap?: Function;
  setRecordMusic?: Function;
  createFeed?: Function;
  onChangeActivityUnSelectedAlert?: Function;
  onChangeBackButtonAlert?: Function;
  onChangeCreateAlert?: Function;
  clearAllState?: () => void;
}

export interface IAlertManager {
  activityUnSelected: boolean;
  backButtonOnClicked: boolean;
  created: boolean;
}

export interface ISetActivityCategory {
  id: number;
  name: string;
  caloriesPerMinute: number;
}

export interface IIntervalRecord {
  duration: number;
  calorie: number;
}

export interface IRecordSetting {
  isInit: boolean;
  isStart: boolean;
  awake: boolean;
  activity: {
    id: number;
    name: string;
    caloriesPerMinute: number;
  };
  startDate: Date | null;
  endDate: Date | null;
}

export interface IMapboxRecord {
  speed: Array<number>;
  distance: number;
  records: Array<Array<number>>;
  isRecordsUpdate: boolean;
  coordinates: Array<Array<number>>;
  map: IMapboxRecordMap;
  music: IMusics;
  images: Array<IMapboxRecordImage>;
}

export interface IMapboxRecordMap {
  id: number;
  style: string;
}

export interface IMapboxRecordImage {
  latitude: number | undefined;
  longitude: number | undefined;
  uri: string;
  distance: number;
  timestamp: Date;
}

export interface ISqliteCallBack {
  id: number;
  records: string;
}
