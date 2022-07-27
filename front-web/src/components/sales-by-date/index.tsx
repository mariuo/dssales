import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildChartSeries, chartOptions, sumSalesByDate } from './helpers';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { ChartSeriesData, SalesByDate, FilterData } from '../../types';
import { formatDate, formatPrice } from '../../utils/formatters';

type Props = {
  filterData?: FilterData;
};

function SalesByDateComponent({ filterData }: Props) {
  const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
  const [totalSum, setTotalSum] = useState(0);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByDate[]>('/sales/by-date', { params })
      .then((response) => {
        const newChartSeries = buildChartSeries(response.data);
        setChartSeries(newChartSeries);
        const newTotalSum = sumSalesByDate(response.data);
        setTotalSum(newTotalSum);
      })
      .catch(() => {
        console.error('Error fetch sales by date');
      });
  }, [params]);

  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className="sales-by-date-title">Sales evolution</h4>
        {filterData?.dates && (
          <span className="sales-by-date-period">
            {formatDate(filterData?.dates?.[0])} to {formatDate(filterData?.dates?.[1])}
          </span>
        )}
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">C{formatPrice(totalSum)}</h2>
          <span className="sales-by-date-quantity-label">Sales by period.</span>
          <span className="sales-by-date-quantity-description">
            The graphic shows all stores sales
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Sales', data: chartSeries }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDateComponent;
