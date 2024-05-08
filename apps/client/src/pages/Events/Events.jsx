import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useEvents } from "../../providers/EventsProvider";
import styles from "./index.module.css";
import EventCard from "../../components/Events/EventCard/EventCard";

const Events = () => {
  const [_, setPageName] = useOutletContext();
  const { events } = useEvents();

  useEffect(() => {
    setPageName("Događaji");
  }, []);

  return (
    <div className={styles["events-list-container"]}>
      {events?.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Events;
