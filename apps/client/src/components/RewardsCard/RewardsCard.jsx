import React, { useState } from "react";
import styles from "./index.module.css";
import RewardsPopup from "../Popups/RewardsPopup/RewardsPopup";

const RewardsCard = ({ reward, userPoints }) => {
  const [showRewardPopup, setShowRewardPopup] = useState(false);

  const calculateBarWidthPercentage = () => {
    if (userPoints >= reward.points) return 100;
    return (userPoints / reward.points) * 100;
  };

  const handleClick = () => {
    setShowRewardPopup(true);
  };

  return (
    <div className={styles["reward-card-container"]} onClick={handleClick}>
      {showRewardPopup && (
        <RewardsPopup
          reward={reward}
          userPoints={userPoints}
          showPopup={setShowRewardPopup}
        />
      )}
      <img
        className={styles["reward-card-image"]}
        src={reward.image || "https://via.placeholder.com/116x105"}
      />
      <div className={styles["reward-card-info"]}>
        <h3>{reward.title}</h3>
        <div className={styles["reward-progress-bar"]}>
          <div
            style={{ width: `${calculateBarWidthPercentage()}%` }}
            className={styles["reward-progress-bar-fill"]}
          ></div>
        </div>
        <p>
          <span className={styles["reward-required-points"]}>
            {reward.points}
          </span>{" "}
          bodova
        </p>
      </div>
    </div>
  );
};

export default RewardsCard;
