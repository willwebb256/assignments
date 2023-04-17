import React from "react";

const YearSelector = ({ selectedYear, onChange }) => {
  const startYear = 1947;
  const currentYear = new Date().getFullYear();

  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i
  ).reverse();

  const handleYearChange = (e) => {
    onChange(parseInt(e.target.value));
  };

  return (
    <select value={selectedYear} onChange={handleYearChange}>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearSelector;


