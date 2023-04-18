import { createContext, useState } from "react";

// Create the context
const SelectedDateContext = createContext();

// Create a provider for the context
const SelectedDateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  // Pass the selected date and handleDateSelect function as values to the context
  return (
    <SelectedDateContext.Provider
      value={{ selectedDate: selectedDate, handleDateSelect: handleDateSelect }}
    >
      {children}
    </SelectedDateContext.Provider>
  );
};

export { SelectedDateProvider, SelectedDateContext };

