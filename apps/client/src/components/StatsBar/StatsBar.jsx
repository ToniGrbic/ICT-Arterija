import React from "react";
import styles from "./index.module.css";
import Cookies from "universal-cookie";

const StatsBar = () => {
  const cookies = new Cookies(null, { path: "/" });
  const user = cookies.get("user");

  return (
    <div className={styles["statsbar-container"]}>
      <div className={styles["left-bar"]}></div>
      <h2>Spasili ste {Math.round(user.points / 100)} života</h2>
    </div>
  );
};

export default StatsBar;
