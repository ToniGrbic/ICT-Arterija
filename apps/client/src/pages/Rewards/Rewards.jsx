import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import RewardsCard from "../../components/RewardsCard/RewardsCard";
import { useOutletContext } from "react-router-dom";
import Filter from "../../components/Filter/Filter";
import Cookies from "universal-cookie";

const filterOptions = {
  Sve: "Sve",
  Osvojene: "Osvojene",
  Dostupne: "Dostupne",
};

const Rewards = () => {
  const [_, setPageName] = useOutletContext();
  const [filteredRewards, setFilteredRewards] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Sve");

  const cookies = new Cookies();
  const user = cookies.get("user");

  useEffect(() => {
    (async () => {
      const resRewards = await fetch("api/rewards");
      const rewards = await resRewards.json();

      if (!user) {
        setFilteredRewards(rewards);
        return;
      }

      const resUserRewards = await fetch(`api/user-rewards/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const userRewards = await resUserRewards.json();

      if (activeFilter === "Osvojene") {
        setFilteredRewards(
          rewards.filter((reward) =>
            userRewards.some(
              (userReward) => userReward.rewards.id === reward.id
            )
          )
        );
      } else if (activeFilter === "Dostupne") {
        setFilteredRewards(
          rewards.filter(
            (reward) =>
              !userRewards.some(
                (userReward) => userReward.rewards.id === reward.id
              )
          )
        );
      } else {
        setFilteredRewards(rewards);
      }
    })();
  }, [activeFilter]);

  useEffect(() => {
    setPageName("Nagrade");
  }, []);

  return (
    <div className={styles["rewards-wrapper"]}>
      <div className={styles["rewards-container"]}>
        {user ? (
          <>
            <Filter
              filterOptions={filterOptions}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
            <h3>
              Vaši bodovi:{" "}
              <span className={styles["rewards-user-points"]}>
                {user.points}
              </span>
            </h3>
          </>
        ) : (
          <p>Niste prijavljeni!</p>
        )}
        {filteredRewards.map((reward) => (
          <RewardsCard
            key={reward.id}
            reward={reward}
            userPoints={user?.points}
          />
        ))}
      </div>
    </div>
  );
};

export default Rewards;
