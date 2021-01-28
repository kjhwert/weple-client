export interface IMusicGroup {
  id: number;
  name: string;
  musics: Array<IMusics>;
}

export interface IMusics {
  id: number;
  url: string;
  title?: string;
  artist?: string;
  artwork?: string;
}
