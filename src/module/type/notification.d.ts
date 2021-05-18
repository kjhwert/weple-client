export interface INotification {
  createdAt: string;
  description: string;
  id: number;
  isRead: boolean;
  user: {
    id: number;
    nickName: string;
  };
}
