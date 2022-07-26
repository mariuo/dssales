import './App.css';
import Header from './components/header';
import Filter from './components/filter';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import PieChartCard from './components/pie-chart-card';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Stores"
            labels={['Montreal', 'Quebec', 'Toronto']}
            series={[30, 50, 20]}
          />
          <PieChartCard
            name="Payments"
            labels={['Credit', 'Debit', 'Cash']}
            series={[20, 50, 30]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
