export type FilterData = {
  store?: StoreDTO;
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type StoreDTO = {
  id: string;
  name: string;
};

export type SummaryResponse = {
  sum: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type SalesByGender = {
  gender: Gender;
  sum: number;
};

export type PieChartConfig = {
  labels?: string[];
  series?: number[];
};
