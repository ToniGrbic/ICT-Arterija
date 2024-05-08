import React from "react";
import styles from "./index.module.css";
import { useLocation } from "react-router-dom";
import Calendar from "../../icons/Calendar/Calendar";
import Clock from "../../icons/Clock/Clock";
import Location from "../../icons/Location/Location";

const Event = () => {
  const { state: event } = useLocation();
  const [date, time] = event.date.split("T");
  const timeFormatted = time.slice(0, 5);

  return (
    <div className={styles["event-wrapper"]}>
      <div className={styles["event-img-container"]}>
        <h3>{event.location}</h3>
        <img src={event?.image} />
      </div>
      <div className={styles["event-info-container"]}>
        <div className={`${styles["event-info-card"]} ${styles["info-one"]}`}>
          <div className={styles["event-info-participants"]}>
            <p>Broj prijavljenih</p>
            <h2>79</h2>
          </div>
        </div>

        <div className={`${styles["event-info-card"]} ${styles["info-two"]}`}>
          <div className={styles["event-info-title"]}>
            <Calendar /> <p>Datum</p>
          </div>
          <p>{date}</p>
        </div>
        <div className={`${styles["event-info-card"]} ${styles["info-three"]}`}>
          <Clock />
          <p>{timeFormatted}</p>
        </div>
        <div className={`${styles["event-info-card"]} ${styles["info-four"]}`}>
          <div className={styles["event-info-title"]}>
            <Location /> <p>Adresa</p>
          </div>
          <p>{event.address}</p>
        </div>
      </div>
      <button className={styles["event-join-button"]}>Donirajte i Vi</button>
    </div>
  );
};

export default Event;
