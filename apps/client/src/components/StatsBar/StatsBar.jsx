import React from "react";
import styles from "./index.module.css";

const StatsBar = () => {
  return (
    <div className={styles["statsbar-container"]}>
      <div className={styles["left-bar"]}>
        <h2>Spasili ste</h2>
      </div>
    </div>
  );
};

export default StatsBar;
