import React from "react";
import styles from "./index.module.css";
import Calendar from "../../../icons/Calendar/Calendar";
import Location from "../../../icons/Location/Location";
import Clock from "../../../icons/Clock/Clock";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const [date, time] = event.date.split("T");
  const timeFormatted = time.slice(0, 5);

  const handleEventClick = () => {
    navigate(`/events/${event.id}`, { state: event });
  };

  return (
    <div className={styles["event-card-container"]} onClick={handleEventClick}>
      <div className={styles["event-card-image"]}>
        <img height={164} width={160} src={event.image} alt="event" />
      </div>
      <div className={styles["event-card-content"]}>
        <h3 className={styles["event-card-title"]}>{event.location}</h3>
        <div className={styles["event-card-info"]}>
          <Calendar />
          <p className={styles["event-card-date"]}>{date}</p>
        </div>
        <div className={styles["event-card-info"]}>
          <Location />
          <p className={styles["event-card-location"]}>{event.address}</p>
        </div>
        <div className={styles["event-card-info"]}>
          <Clock />
          <p className={styles["event-card-time"]}>{timeFormatted}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
