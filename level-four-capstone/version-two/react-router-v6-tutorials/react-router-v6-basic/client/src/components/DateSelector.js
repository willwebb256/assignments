import React, { useState } from "react";

const DateSelector = ({ onDateSelect }) => {
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onDateSelect(date);
  };

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="scores-subheading">
        Select a date:
        <input type="date" value={date} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DateSelector;

