import React from "react";
import AutoPlay from "../../components/Sliders/AutoPlay/AutoPlay";
import StatsBar from "../../components/StatsBar/StatsBar";
import styles from "./index.module.css";
import ScheduleReminder from "../../components/ScheduleReminder/ScheduleReminder";

const LandingPage = () => {
  return (
    <>
      <AutoPlay />
      <div className={styles["landing-main-wrapper"]}>
        <StatsBar />
        <ScheduleReminder />
      </div>
    </>
  );
};

export default LandingPage;
