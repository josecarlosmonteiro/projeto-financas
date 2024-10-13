export interface MonthlyRelease {
  id: string;
  title: string;
  value: number;
  category: string;
  type: 'revenue' | 'expense';
}

export type NewMonthlyRelease = Omit<MonthlyRelease, 'id'>;