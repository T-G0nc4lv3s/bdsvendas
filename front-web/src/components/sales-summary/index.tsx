import './styles.css';
import ReactApexCharts from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

function SalesSummary({ labels, name, series }: Props) {
  return (
    <div className="sales-summary-container base-card">
      <div className="sales-amount-container">
        <span className="sales-amount">R$ 746.484,00</span>
        <span className="summary-label">Total de vendas</span>
      </div>
      <div className="pie-chart-container">
        <ReactApexCharts
          options={buildPieChartConfig(labels, name)}
          type="donut"
          widht="400"
          height="400"
          series={series}
        />
      </div>
    </div>
  );
}

export default SalesSummary;
