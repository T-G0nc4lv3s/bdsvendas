import './App.css';
import Header from './components/header';
import Filter from './components/filter';
import SalesSummary from './components/sales-summary';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <div className="app-sales-summary-container">
          <SalesSummary
            name="Gênero"
            labels={['Feminino', 'Masculino', 'Outro']}
            series={[50, 30, 20]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
