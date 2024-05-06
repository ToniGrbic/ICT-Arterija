import React from "react";
import styles from "./index.module.css";
import EventImg from "../../../assets/images/event.png";

const handleEventClick = () => {
  console.log("Event clicked");
};

const handleMoreClick = () => {
  console.log("More clicked");
};

const EventsPreview = () => {
  return (
    <div>
      <div className={styles["events-preview-title"]}>
        <h2>Događaji</h2>
        <p
          onClick={handleMoreClick}
          className={styles["events-preview-more-btn"]}
        >
          ...
        </p>
      </div>

      <div className={styles["events-preview-container"]}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={styles["event-preview"]}
            onClick={handleEventClick}
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
