export interface IMapGroup {
  id: number;
  name: string;
  maps: Array<IMaps>;
}

export interface IMaps {
  id: number;
  thumbnail: string;
  style: string;
  name: string;
}
