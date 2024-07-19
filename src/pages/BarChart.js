import { Chart } from 'react-chartjs-2';
import { useEffect, useRef, useState } from 'react';

const BarChart = ({ data }) => {
  const [chartInstance, setChartInstance] = useState(null);
  const chartRef = useRef();

  useEffect(() => {
    if (chartRef && chartRef.current && data) {
      const newChartInstance = new Chart(chartRef.current, {
        type: 'bar',
        data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      setChartInstance(newChartInstance);
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
