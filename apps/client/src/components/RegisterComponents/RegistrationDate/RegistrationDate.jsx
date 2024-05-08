import { useState } from "react";
import CustomDatePicker from "../../DatePicker/DatePicker";
import classes from "./index.module.css";
import { useRegistration } from "../../../providers/RegistrationProvider";

export default function RegistrationDate() {
  const [parentSelectedDate, setParentSelectedDate] = useState(null);
  const { updateStep, updateData } = useRegistration();

  const handleSelectedDateChange = (selectedDate) => {
    setParentSelectedDate(selectedDate);
  };

  const handleRegistrationDate = () => {
    const registrationDate = new Date(
      parentSelectedDate.year,
      parentSelectedDate.month - 1,
      parentSelectedDate.day + 1
    );

    const formattedDate = registrationDate.toISOString();

    updateData(formattedDate, "birth_date");
    updateStep();
  };

  return (
    <div className={classes.registrationDateContainer}>
      <h1>Unesite Vaš datum rođenja.</h1>
      <p>Koristite Vaš datum rođenja.</p>
      <CustomDatePicker onDateChange={handleSelectedDateChange} />
      <button
        className={classes.registrationButton}
        onClick={handleRegistrationDate}
      >
        Nastavite
      </button>
    </div>
  );
}
