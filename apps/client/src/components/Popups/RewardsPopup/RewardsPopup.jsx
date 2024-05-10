import React from "react";
import styles from "./index.module.css";

const RewardsPopup = ({ reward, userPoints, showPopup }) => {
  return (
    <div className={styles["rewards-popup-wrapper"]}>
      <div className={styles["rewards-popup-container"]}>
        <h2>{reward.title}</h2>

        <div className={styles["rewards-popup-claim"]}>
          <button disabled={userPoints < reward.points}>
            Preuzmite nagradu
          </button>
          <p>{reward.points} bodova</p>
        </div>

        <button
          onClick={() => {
            showPopup(false);

            console.log("Close button clicked");
          }}
          className={styles["rewards-popup-close"]}
        >
          X
        </button>
        <img
          className={styles["rewards-popup-img"]}
          width={370}
          src={reward.image}
          alt={reward.title}
        />
      </div>
    </div>
  );
};

export default RewardsPopup;
