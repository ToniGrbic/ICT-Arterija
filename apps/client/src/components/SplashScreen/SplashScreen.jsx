import React from "react";
import styles from "./index.module.css";
import ArteriaSplash from "../../assets/ArteriaSplash.svg";
import LoadingSpinner from "./LoadingSpinner";

const SplashScreen = () => {
  return (
    <div className={styles["splash-screen-wrapper"]}>
      <img src={ArteriaSplash} className={styles["splash-screen-img"]} />
      <LoadingSpinner />
    </div>
  );
};

export default SplashScreen;
