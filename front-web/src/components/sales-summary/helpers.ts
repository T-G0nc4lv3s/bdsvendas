import { ApexOptions } from 'apexcharts';

export const buildPieChartConfig = (labels: string[] = [], name: string) => {
  return {
    labels,
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 0,
      labels: {
        colors: ['#8D8D8D']
      },
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '16px',
      itemMargin: {
        vertical: 15
      }
    },
    plotOptions: {
      pie: {
        size: 400,
        donut: {
          size: '60%',
          labels: {
            show: false,
            name: {
              show: false,
              offsetY: 0,
              formatter: function () {
                return name;
              }
            }
          }
        }
      }
    },
    chart: {
      height: '400px'
    }
  } as ApexOptions;
};
