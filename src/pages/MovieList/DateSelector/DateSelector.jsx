import React from "react";
import "./DateSelector.scss";

const DateSelector = ({ selectedDate, onDateChange }) => {
  const dates = generateDates(7);

  return (
    <div className="date-selector">
      <h1>PHIM ĐANG CHIẾU</h1>

      {dates.map((d) => (
        <button
          key={d.full}
          className={`date-btn ${d.full === selectedDate ? "active" : ""}`}
          onClick={() => onDateChange(d.full)}
        >
          {d.label}
        </button>
      ))}
    </div>
  );
};

// Tạo ngày real-time
function generateDates(days) {
  const result = [];
  const today = new Date();

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    result.push({
      full: `${yyyy}-${String(mm).padStart(2, "0")}-${String(dd).padStart(2, "0")}`,
      label: `${dd}-${mm}-${yyyy}`,
    });
  }

  return result;
}

export default DateSelector;
