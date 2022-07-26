import './styles.css';
import FlatPicker from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
//import flatpickrLib from 'flatpickr';
//import { French } from 'flatpickr/dist/l10n/fr';

//flatpickrLib.localize(French);

function Filter() {
  const onChangeDate = (dates: Date[]) => {
    console.log(dates);
  };
  return (
    <div className="filter-container base-card">
      <FlatPicker
        options={{ mode: 'range', dateFormat: 'd/m/Y', showMonths: 2 }}
        className="filter-input"
        onChange={onChangeDate}
        placeholder="Select date"
      />
      <select className="filter-input">
        <option value="">Genre select</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="OTHER">Other</option>
      </select>
    </div>
  );
}

export default Filter;
