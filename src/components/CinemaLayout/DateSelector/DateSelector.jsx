import React from "react";
import "./DateSelector.scss";

const DateSelector = ({ dates, selectedDate, onSelect }) => {
  return (
    <div className="date-selector">
      {dates.map((date) => {
        const d = new Date(date);
        const day = d.getDate();
        const weekday = d.toLocaleDateString("vi-VN", { weekday: "short" });

        return (
          <div
            key={date}  
            className={`date-item ${selectedDate === date ? "active" : ""}`}
            onClick={() => onSelect(date)}
          >
            <span>{weekday}</span>
            <strong>{day}</strong>
          </div>
        );
      })}
    </div>
  );
};

export default DateSelector;
