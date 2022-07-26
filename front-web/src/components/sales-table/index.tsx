import React from 'react';
import './styles.css';

function SalesTable() {
  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Lastest sales</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATA</th>
            <th>GENRE</th>
            <th>STORE</th>
            <th>CATEGORY</th>
            <th>PAYMENT</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#341</td>
            <td>07/11/1997</td>
            <td>Female</td>
            <td>Vestiments</td>
            <td>Montreal</td>
            <td>Credit</td>
            <td>C$540.000,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/1997</td>
            <td>Female</td>
            <td>Vestiments</td>
            <td>Montreal</td>
            <td>Credit</td>
            <td>C$540.000,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/1997</td>
            <td>Female</td>
            <td>Vestiments</td>
            <td>Montreal</td>
            <td>Credit</td>
            <td>C$540.000,00</td>
          </tr>
          <tr>
            <td>#341</td>
            <td>07/11/1997</td>
            <td>Female</td>
            <td>Vestiments</td>
            <td>Montreal</td>
            <td>Credit</td>
            <td>C$540.000,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
