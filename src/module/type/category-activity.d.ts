export interface ICategoryActivity {
  id: number;
  name: string;
  categoryActivity: Array<{
    id: number;
    name: string;
    caloriesPerMinute: number;
  }>;
}
