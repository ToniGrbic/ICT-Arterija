import React from "react";
import styles from "./index.module.css";

const StatsBar = () => {
  return (
    <div className={styles["statsbar-container"]}>
      <div className={styles["left-bar"]}></div>
      <h2>Spasili ste 3 života</h2>
    </div>
  );
};

export default StatsBar;
