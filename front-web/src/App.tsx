import './App.css';
import Header from './components/header';
import Filter from './components/filter';
import SalesSummary from './components/sales-summary';
import { useState, useEffect, useMemo } from 'react';
import { FilterData, SummaryResponse, SalesByGender, PieChartConfig } from './types';
import { requestBackend, buildFilterParams } from './utils/requests';
import { buildSalesByGenderChart } from './helpers';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [summaryResponse, setSummaryResponse] = useState<SummaryResponse>();
  const [salesByGender, setsalesByGender] = useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    requestBackend.get<SummaryResponse>('/sales/summary', { params }).then((response) => {
      setSummaryResponse(response.data);
    });
  }, [params]);

  useEffect(() => {
    requestBackend.get<SalesByGender[]>('/sales/by-gender', { params }).then((response) => {
      const newSalesByGender = buildSalesByGenderChart(response.data);
      setsalesByGender(newSalesByGender);
    });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <div className="app-sales-summary-container">
          <SalesSummary
            name="Gênero"
            labels={salesByGender?.labels}
            series={salesByGender?.series}
            summary={summaryResponse?.sum}
          />
        </div>
      </div>
    </>
  );
}

export default App;
