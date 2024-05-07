import { useState, useEffect } from "react";
import Picker from "react-scrollable-picker";

// eslint-disable-next-line react/prop-types
const CustomDatePicker = ({ onDateChange }) => {
  const initialDate = new Date();
  const [selectedDate, setSelectedDate] = useState({
    year: initialDate.getFullYear(),
    month: initialDate.getMonth() + 1,
    day: initialDate.getDate(),
  });

  let days = [];
  let months = [];
  let years = [];
  try {
    const daysInMonth = new Date(
      selectedDate.year,
      selectedDate.month,
      0
    ).getDate();
    days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    months = [
      "siječanj",
      "veljača",
      "ožujak",
      "travanj",
      "svibanj",
      "lipanj",
      "srpanj",
      "kolovoz",
      "rujan",
      "listopad",
      "studeni",
      "prosinac",
    ];
    years = Array.from(
      { length: 101 },
      (_, i) => initialDate.getFullYear() - i
    );
  } catch (error) {
    console.error("Error in date calculation:", error);
  }

  const handleChange = (name, value) => {
    setSelectedDate((prevDate) => ({
      ...prevDate,
      [name]: value,
    }));
  };

  useEffect(() => {
    onDateChange(selectedDate);
  }, [selectedDate, onDateChange]);

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
