import axios from 'axios';
import { FilterData } from '../types';

const baseURL = 'http://localhost:8080';

export const requestBackend = axios.create({ baseURL });

export const buildFilterParams = (filterData?: FilterData) => {
  return {
    storeId: filterData?.store?.id
  };
};
