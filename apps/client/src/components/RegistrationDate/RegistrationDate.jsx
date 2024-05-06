import React, { useState, useEffect } from "react";
import Picker from "react-scrollable-picker";

const CustomDatePicker = () => {
  // Initial date values
  const initialDate = new Date();
  const [selectedDate, setSelectedDate] = useState({
    year: initialDate.getFullYear(),
    month: initialDate.getMonth() + 1,
    day: initialDate.getDate(),
  });

  // Generate options for days, months, and years
  const daysInMonth = new Date(
    selectedDate.year,
    selectedDate.month,
    0
  ).getDate(); // Get the number of days in the selected month
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const months = [
    "siječanj", // January
    "veljača", // February
    "ožujak", // March
    "travanj", // April
    "svibanj", // May
    "lipanj", // June
    "srpanj", // July
    "kolovoz", // August
    "rujan", // September
    "listopad", // October
    "studeni", // November
    "prosinac", // December
  ];
  const years = Array.from(
    { length: 101 },
    (_, i) => initialDate.getFullYear() - i
  ); // Years range from 20 years after to 80 years before the current year

  // Handle change in selected date
  const handleChange = (name, value) => {
    setSelectedDate((prevDate) => ({
      ...prevDate,
      [name]: value,
    }));
  };

  // Log selected date whenever it changes
  useEffect(() => {
    console.log("Selected Date:", selectedDate);
  }, [selectedDate]);

  return (
    <Picker
      optionGroups={{
        day: days.map((day) => ({ value: day, label: day })),
        month: months.map((month, index) => ({
          value: index + 1,
          label: month,
        })),
        year: years.map((year) => ({ value: year, label: year })),
      }}
      valueGroups={{
        day: selectedDate.day,
        month: selectedDate.month,
        year: selectedDate.year,
      }}
      onChange={handleChange}
    />
  );
};

export default CustomDatePicker;
