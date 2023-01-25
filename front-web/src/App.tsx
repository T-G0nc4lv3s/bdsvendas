import './App.css';
import Header from './components/header';
import Filter from './components/filter';
import SalesSummary from './components/sales-summary';
import { useState, useEffect, useMemo } from 'react';
import { FilterData, SummaryResponse } from './types';
import { requestBackend, buildFilterParams } from './utils/requests';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [summaryResponse, setSummaryResponse] = useState<SummaryResponse>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    requestBackend.get<SummaryResponse>('/sales/summary', { params }).then((response) => {
      setSummaryResponse(response.data);
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
            labels={['Feminino', 'Masculino', 'Outro']}
            series={[50, 30, 20]}
            summary={summaryResponse?.sum}
          />
        </div>
      </div>
    </>
  );
}

export default App;
