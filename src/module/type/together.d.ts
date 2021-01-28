export interface ITogetherComments {
  id: number;
  description: string;
  createdAt: string;
  user: {
    id: number;
    image: string;
    nickName: string;
  };
  isModify: false;
}
