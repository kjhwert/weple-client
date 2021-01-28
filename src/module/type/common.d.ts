export type IGps = Array<Array<number>>;

export interface IEventDetail {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  image: string;
  isOnGoing: boolean;
}
