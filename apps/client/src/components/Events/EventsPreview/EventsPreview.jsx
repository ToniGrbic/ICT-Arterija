import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { useEvents } from "../../../providers/EventsProvider";
const EventsPreview = () => {
  const navigate = useNavigate();
  const { events } = useEvents();

  const handleEventClick = (e, event) => {
    e.stopPropagation();
    navigate(`/events/${event.id}`, { state: event });
  };

  const handleMoreClick = () => {
    navigate(`/events`);
  };

  return (
    <div className={styles["events-preview-wrapper"]}>
      <div className={styles["events-preview-title"]}>
        <h2>Događaji</h2>
        <p
          className={styles["events-preview-more-btn"]}
          onClick={handleMoreClick}
        >
          Prikaži više
        </p>
      </div>

      <div className={styles["events-preview-container"]}>
        {events.map((event) => (
          <div
            key={event.id}
            className={styles["event-preview"]}
            onClick={(e) => handleEventClick(e, event)}
          >
            <h3>{event.location}</h3>
            <img height={150} width={150} src={event?.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPreview;
