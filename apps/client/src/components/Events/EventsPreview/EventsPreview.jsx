import React from "react";
import styles from "./index.module.css";
import EventImg from "../../../assets/images/event.png";
import { useNavigate } from "react-router-dom";

const handleEventClick = (e, id) => {
  e.stopPropagation();
  navigate(`/events/${id}`);
};

const handleMoreClick = () => {
  navigate(`/events`);
};

const EventsPreview = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["events-preview-wrapper"]}>
      <div className={styles["events-preview-title"]}>
        <h2>Događaji</h2>
        <p
          className={styles["events-preview-more-btn"]}
          onClick={handleMoreClick}
        >
          ...
        </p>
      </div>

      <div className={styles["events-preview-container"]}>
        {Array.from({ length: 3 }).map((_, id) => (
          <div
            key={id}
            className={styles["event-preview"]}
            onClick={(e) => handleEventClick(e, id)}
          >
            <h3></h3>{" "}
            {/*zasada slika ima i naslov pa je u ovom slucaju prazan*/}
            <img height={150} src={EventImg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPreview;
