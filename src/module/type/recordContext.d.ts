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
}

export interface IMapboxRecord {
  speed: number;
  distance: number;
  coordinates: Array<Array<number>>;
  updated: boolean;
  map: number;
  music: number;
  images: Array<string>;
}
