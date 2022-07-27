import SalesSummaryCard from './sales-summary-card';
import './styles.css';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { FilterData, SalesSummaryData } from '../../types';

type Props = {
  filterData?: FilterData;
};
const initialSummary = {
  avg: 0,
  count: 0,
  max: 0,
  min: 0
};
function SalesSummary({ filterData }: Props) {
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error fetch sales summary');
      });
  }, [params]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={summary?.avg?.toFixed(2)} label="Average" icon={<DoneIcon />} />
      <SalesSummaryCard value={summary?.count} label="Quantity" icon={<SyncIcon />} />
      <SalesSummaryCard value={summary?.min} label="Minimum" icon={<BarChartIcon />} />
      <SalesSummaryCard value={summary?.max} label="Maximum" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
