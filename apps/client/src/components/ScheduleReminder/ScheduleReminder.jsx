import React from "react";
import styles from "./index.module.css";
import Location from "../../icons/Location/Location";
import Clock from "../../icons/Clock/Clock";

const ScheduleReminder = () => {
  return (
    <div className={styles["schedule-reminder-container"]}>
      <h2>Podsjetnik | 14.5.2024.</h2>
      <div className={styles["icons-container"]}>
        <Location />
        <p>Ulica Udruge DUMP 12</p>
      </div>
      <div className={styles["icons-container"]}>
        <Clock />
        <p>17:00</p>
      </div>
    </div>
  );
};

export default ScheduleReminder;
