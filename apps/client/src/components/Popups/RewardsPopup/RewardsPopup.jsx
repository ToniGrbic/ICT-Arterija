import React from "react";
import styles from "./index.module.css";

const RewardsPopup = ({ reward, userPoints, showPopup }) => {
  return (
    <div className={styles["rewards-popup-wrapper"]}>
      <div className={styles["rewards-popup-container"]}>
        <h2>{reward.title}</h2>
        <p>
          U najljepšem gradu na svijetu uživajte uz napoletanske okuse i pogled
          koji osvaja dah. U ručku za dvije osobe uživajte s osobom koju želite
          šarmirati dobrom atmosferom i ukusnom hranom na najatraktivnijoj
          lokaciji u gradu Splitu.
        </p>
        {userPoints ? (
          <div className={styles["rewards-popup-claim"]}>
            <button
              className={`${styles["rewards-popup-claim-btn"]} ${styles["btn-active"]}`}
              disabled={userPoints < reward.required_points}
            >
              Preuzmite nagradu
            </button>
            <p
              style={
                userPoints < reward.required_points
                  ? { color: "rgba(18, 27, 40, 0.20)" }
                  : { color: "" }
              }
            >
              {reward.required_points} bodova
            </p>
          </div>
        ) : (
          <div className={styles["rewards-popup-claim"]}>
            <button
              className={`${styles["rewards-popup-claim-btn"]}`}
              disabled={true}
            >
              Preuzmite nagradu
            </button>
            <p style={{ color: "rgba(18, 27, 40, 0.20)" }}>
              {reward.required_points} bodova
            </p>
          </div>
        )}

        <button
          onClick={() => {
            showPopup(false);
          }}
          className={styles["rewards-popup-close"]}
        >
          &#x274C;
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
