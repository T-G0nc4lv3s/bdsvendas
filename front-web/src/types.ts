export type FilterData = {
  store?: StoreDTO;
};

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
