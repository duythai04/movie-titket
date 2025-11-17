import React from 'react';
import './DateSelector.scss';

const dates = [
  { day: "17", full: "2025-11-17", label: "17-11-2025" },
  { day: "18", full: "2025-11-18", label: "18-11-2025" },
  { day: "19", full: "2025-11-19", label: "19-11-2025" },
  { day: "20", full: "2025-11-20", label: "20-11-2025" },
];

const DateSelector = ({ selectedDate, onDateChange }) => {
  return (
    <div className="date-selector">
        <h1>PHIM ĐANG CHIẾU</h1>
      {dates.map((d) => (
        <button
          key={d.full}
          className={`date-btn ${d.full === selectedDate ? 'active' : ''}`}
          onClick={() => onDateChange(d.full)}
        >
          {d.label}
        </button>
      ))}
    </div>
  );
};

export default DateSelector;