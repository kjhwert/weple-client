export interface IMapBoxLocation {
  coords: {
    accuracy: number;
    altitude: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
    timestamp: number;
  };
}
