import React, { useState } from 'react';
import CustomDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function MyDatePicker(props) {
  const [selectedDate, setSelectedDate] = useState(props.selectedDate);

  function handleDateChange(date) {
    setSelectedDate(date);
    props.onDateChange(date);
  }

  return (
    <div>
      <label htmlFor="date-picker">Select a date:</label>
      <CustomDatePicker
        id="date-picker"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
      />
    </div>
  );
}



