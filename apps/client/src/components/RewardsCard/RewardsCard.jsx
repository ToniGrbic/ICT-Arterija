import React, { useState } from "react";
import styles from "./index.module.css";
import RewardsPopup from "../Popups/RewardsPopup/RewardsPopup";

const RewardsCard = ({
  reward,
  userPoints = 0,
  setUserPoints,
  setFilteredRewards,
}) => {
  const [showRewardPopup, setShowRewardPopup] = useState(false);

  const calculateBarWidthPercentage = () => {
    if (userPoints >= reward.required_points) return 100;
    return (userPoints / reward.required_points) * 100;
  };

  const handleClick = () => {
    setShowRewardPopup(true);
  };

  return (
    <>
      {showRewardPopup && (
        <RewardsPopup
          reward={reward}
          userPoints={userPoints}
          setUserPoints={setUserPoints}
          showPopup={setShowRewardPopup}
          setFilteredRewards={setFilteredRewards}
        />
      )}
      <div className={styles["reward-card-container"]} onClick={handleClick}>
        <img
          className={styles["reward-card-image"]}
          src={reward.image || "https://via.placeholder.com/116x105"}
        />
        <div className={styles["reward-card-info"]}>
          <h3>{reward.name}</h3>
          <div className={styles["reward-progress-bar"]}>
            <div
              style={{ width: `${calculateBarWidthPercentage()}%` }}
              className={styles["reward-progress-bar-fill"]}
            ></div>
          </div>
          <p>
            <span className={styles["reward-required-points"]}>
              {reward.required_points}
            </span>{" "}
            bodova
          </p>
        </div>
      </div>
    </>
  );
};

export default RewardsCard;
