import './styles.css';
import FlatPicker from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import React, { useState } from 'react';
import { Gender, FilterData } from '../../types';
//import flatpickrLib from 'flatpickr';
//import { French } from 'flatpickr/dist/l10n/fr';
//flatpickrLib.localize(French);

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [dates, setDates] = useState<Date[]>([]);
  const [gender, setGender] = useState<Gender>();

  const onChangeDate = (dates: Date[]) => {
    if (dates.length === 2) {
      setDates(dates);
      onFilterChange({ dates, gender });
    }
  };

  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value as Gender;

    setGender(selectedGender);
    onFilterChange({ dates, gender: selectedGender });
  };

  return (
    <div className="filter-container base-card">
      <FlatPicker
        options={{ mode: 'range', dateFormat: 'd/m/Y', showMonths: 2 }}
        className="filter-input"
        onChange={onChangeDate}
        placeholder="Select date"
      />
      <select className="filter-input" value={gender} onChange={onChangeGender}>
        <option value="">Genre select</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="OTHER">Other</option>
      </select>
    </div>
  );
}

export default Filter;
