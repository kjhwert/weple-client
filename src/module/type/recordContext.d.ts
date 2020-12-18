import {IMusics} from './music';

export interface IRecordContext {
  webViewRef?: any;
  tabBarVisible?: boolean;
  alertManager?: IAlertManager;
  recordSetting?: IRecordSetting;
  record?: IIntervalRecord;
  mapboxRecord?: IMapboxRecord;
  initializeRecordStart?: Function;
  changeStartStatus?: Function;
  finishRecording?: Function;
  onUpdateUserPosition?: Function;
  toggleAwakeSwitch?: Function;
  setActivityCategory?: Function;
  showCamera?: Function;
  setRecordMap?: Function;
  setRecordMusic?: Function;
  createFeed?: Function;
  onChangeActivityUnSelectedAlert?: Function;
  onChangeBackButtonAlert?: Function;
  onChangeCreateAlert?: Function;
  clearAllState?: Function;
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
  speed: number;
  distance: number;
  coordinates: Array<Array<number>>;
  records: Array<Array<number>>;
  updated: boolean;
  isRecordsUpdate: boolean;
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
