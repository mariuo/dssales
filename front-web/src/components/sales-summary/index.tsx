import SalesSummaryCard from './sales-summary-card';
import './styles.css';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={430} label="Average" icon={<DoneIcon />} />
      <SalesSummaryCard value={630} label="Quantity" icon={<SyncIcon />} />
      <SalesSummaryCard value={330} label="Minimum" icon={<BarChartIcon />} />
      <SalesSummaryCard value={550} label="Maximum" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
