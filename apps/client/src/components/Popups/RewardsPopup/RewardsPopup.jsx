import React, { useState } from "react";
import styles from "./index.module.css";
import Cookies from "universal-cookie";

const RewardsPopup = ({
  reward,
  userPoints,
  setUserPoints,
  showPopup,
  setFilteredRewards,
}) => {
  const cookies = new Cookies();
  const user = cookies.get("user");
  const [isClaimed, setIsClaimed] = useState(false);

  const claimReward = async (reward_id) => {
    try {
      const resRewards = await fetch(`api/user-rewards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          reward_id,
          user_id: user.id,
          created_at: new Date().toISOString(),
        }),
      });
      if (!resRewards.ok) throw new Error("Failed to claim reward");

      const resUser = await fetch(`api/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          points: user.points - reward.required_points,
        }),
      });
      if (!resUser.ok) throw new Error("Failed to update user points");

      setIsClaimed(true);
      setUserPoints(user.points - reward.required_points);
      setFilteredRewards((prev) =>
        prev.filter((filteredReward) => filteredReward.id !== reward_id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles["rewards-popup-wrapper"]}>
      <div className={styles["rewards-popup-container"]}>
        {isClaimed ? (
          <h2>Nagrada je uspješno preuzeta!</h2>
        ) : (
          <>
            <h2>{reward.name}</h2>
            <p>{reward.description}</p>
            {userPoints ? (
              <div className={styles["rewards-popup-claim"]}>
                <button
                  className={`${styles["rewards-popup-claim-btn"]} ${styles["btn-active"]}`}
                  disabled={userPoints < reward.required_points}
                  onClick={() => claimReward(reward.id)}
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
          </>
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
