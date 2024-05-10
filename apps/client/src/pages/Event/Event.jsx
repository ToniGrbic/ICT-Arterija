import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { useLocation } from "react-router-dom";
import Calendar from "../../icons/Calendar/Calendar";
import Clock from "../../icons/Clock/Clock";
import Location from "../../icons/Location/Location";
import ConfirmPopup from "../../components/Popups/ConfirmPopup/ConfirmPopup";
import Cookies from "universal-cookie";

const Event = () => {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const { state: event } = useLocation();

  const [date, time] = event.date.split("T");
  const timeFormatted = time.slice(0, 5);

  const cookies = new Cookies();
  const user = cookies.get("user");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/participants/user`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const userParticipant = await res.json();

        if (userParticipant.length === 0) return;

        const isUserJoined = userParticipant.some(
          (participant) => participant.event_id === event.id
        );

        setIsJoined(isUserJoined);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const onConfirm = async () => {
    try {
      await fetch("http://localhost:3000/api/participants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          event_id: event.id,
          user_id: user.id,
          is_working: true,
          is_valid: true,
          is_finished: false,
        }),
      });
      setShowConfirmPopup(false);
      setIsJoined(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles["event-wrapper"]}>
      {showConfirmPopup && (
        <ConfirmPopup
          title="Jeste li sigurni da se želite prijaviti na ovaj događaj?"
          onCancel={() => setShowConfirmPopup(false)}
          onConfirm={() => onConfirm()}
        />
      )}
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
      <button
        className={styles["event-join-button"]}
        onClick={() => setShowConfirmPopup(true)}
        disabled={isJoined || !user}
      >
        {isJoined ? "Prijavljeni ste" : "Donirajte i Vi"}
      </button>
    </div>
  );
};

export default Event;
